#!/usr/bin/env python

from sklearn.linear_model import RidgeCV
#from skleanr.linear_model import Ridge, LinearRegression, SGDRegressor,\
#        ElasticNet, Lars, Lasso, ARDRegression, BayesianRidge, HuberRegressor,\
#        PoissonRegressor, PassiveAggressiveRegressor
#from sklearn.svm import LinearSVR
#from sklearn.ensemble import RandomForestRegressor
#from sklearn.ensemble import StackingRegressor
from sklearn.preprocessing import MinMaxScaler

import numpy as np
import sys
from math import floor
from argparse import ArgumentParser as AP
from collections import Counter
import gzip

"""
Author: Cameron Jack, ANU Bioinformatics Consultancy, Australian National University (ANU)
Created: Sept 2020
Copyright: Cameron Jack, Zaka (Wing-Sze) Yuen, Eduardo Eyras, ANU 2020.

Multiple regression approach to combining Nanopore methylation prediction from multiple tools.
Truth group (label), read ID and locus must be shared across all inputs.

TODO: imputation of missing loci. Also, trying a simple linear regression model would be interesting.
"""

def myopen(fn):
    """ Bob's Buckley's function to handle gzip transparently """
    if fn.endswith('.gz') :
        return gzip.open(fn, 'rt')
    return open(fn, errors='ignore')


def parse_training_loci(fn):
    """ Get all reads and positions to check for overlap before reading values """
    with myopen(fn) as f:
        group_read_pos = set()
        for i, row in enumerate(f):
            if i == 0:
                continue
            cols = row.strip().split('\t')
            group = int(cols[0].strip().replace('m',''))
            read = cols[1].strip()
            pos = int(cols[2].strip())
            entry = (group, read, pos)
            if entry in group_read_pos:
                print (fn, 'duplicate group, read, position:', entry)
            group_read_pos.add(entry)
    return group_read_pos


def parse_training_values(fn, shared_ids, trunc_score_min, trunc_score_max, debug=False):
    """ parse file contents into dictionary of [(group,read,pos)] = (strand, label, prediction, score) """
    truncated = 0
    contents = {}
    with myopen(fn) as f:
        for i, row in enumerate(f):
            if i == 0:
                continue
            cols = row.strip().split('\t')
            group = int(cols[0].strip().replace('m',''))
            read = cols[1].strip()
            pos = int(cols[2].strip())
            if (group, read, pos) in shared_ids:
                strand = 1 if cols[3].strip() == '+' else 0
                label = 1 if cols[4].strip() == 'yes' else 0  # truth
                predicted = 1 if cols[5].strip() == 'yes' else 0
                score = float(cols[6].strip())
                if trunc_score_max:
                    if score > trunc_score_max:
                        score = trunc_score_max
                        truncated += 1
                if trunc_score_min:
                    if score < trunc_score_min:
                        score = trunc_score_min
                        truncated += 1
                contents[(group, read, pos)] = (strand, label, predicted, score)
    if debug:
        print(truncated, 'scores truncated', file=sys.stderr)
    return contents


def parse_test_loci(fn):
    """ Parse test data (doesn't contain known outcomes or groups) """
    with myopen(fn) as f:
        read_pos = set()
        for i, row in enumerate(f):
            if i == 0:
                continue
            cols = row.strip().split('\t')
            read = cols[0].strip()
            pos = int(cols[1].strip())
            entry = (read, pos)
            if entry in read_pos:
                print (fn, 'duplicate read, position:', entry)
            read_pos.add(entry)
    return read_pos


def parse_test_values(fn, shared_ids, trunc_score_min, trunc_score_max, debug=False):
    """
    Parse test file for shared_ids and write values to value_array
    If first, place into cols 0, 2, else cols 1, 3
    If trunc_score_min/max then set more extreme scores to this. Important for balancing
    contributions to regression.
    modify in place
    """
    truncated = 0
    contents = {}
    with myopen(fn) as f:
        for i, row in enumerate(f):
            if i == 0:
                continue
            cols = row.strip().split('\t')
            read = cols[0].strip()
            pos = int(cols[1].strip())
            if (read, pos) in shared_ids:
                strand = 1 if cols[2].strip() == '+' else 0
                score = float(cols[3].strip())
                if trunc_score_max:
                    if score > trunc_score_max:
                        score = trunc_score_max
                        truncated += 1
                if trunc_score_min:
                    if score < trunc_score_min:
                        score = trunc_score_min
                        truncated += 1
                contents[(read, pos)] = (strand, score)
    if debug:
        print(truncated, 'scores were truncated', file=sys.stderr)
    return contents


def get_filter_vals_fixed_proportion(value_array, critical_value, filter=-1):
    """
    Removes a fixed proportion of scores around the critical value as these are most uncertain in
    terms of calling methylation status.
    Find the rank of the critical value in array, then find the value corresponding to a
    fixed number of ranks either side the mean. Return these min and max filter values.
    """
    if filter == -1:
        return critical_value, critical_value
    else:
        scores_sorted = np.sort(value_array[:,-1])
        half_num_ignore = floor(len(scores_sorted)*(filter/2))
        mean_index = np.argmax(scores_sorted>critical_value)-1
        filter_min = scores_sorted[mean_index-half_num_ignore]
        filter_max = scores_sorted[mean_index+half_num_ignore]
        #print('mean score:',critical_value,'filter min:', filter_min, 'filter max:', 
        #       filter_max, file=sys.stderr)
        return filter_min, filter_max


def count_success(critical_value, value_array, method_name, training_desc, test_desc,
        tool_names, id_list, filter=-1, include_pred=False):
    """
        If prediction is higher than the critical_value, consider as methylated
        filter is the proportion of scores close to the critical value to ignore +/- the critical_value
    """
    groups = len(tool_names)
    score_index = 2
    success = Counter()
    total_ignored = 0
    filter_min, filter_max = get_filter_vals_fixed_proportion(value_array, critical_value, filter)
    fn = 'meteore_training_'+'_'.join(tool_names)+'_'+method_name+'_'+\
            str(training_desc)+'_'+str(filter)+'_'+str(test_desc)+'.tsv'
    if include_pred:
        fn = fn.replace('.tsv','_inc_pred.tsv')
    with open(fn, 'wt') as out:
        print('\t'.join(map(str,['Group','Read','Pos','Strand','Label','Prediction','Score'])), file=out)
        for i, s in enumerate(value_array[:,-1]):
            if s > filter_min and s < filter_max:
                total_ignored += 1
                continue
            if int(value_array[i][0]) == 1:  # truth about methylation status
                for k in range(groups):
                    # check the tool's predicted methylation status
                    if value_array[i][score_index+groups+k] == 1:
                        success[tool_names[k]] += 1
                if s > critical_value:
                    success['model'] += 1
            else:  # unmethylated
                for k in range(groups):
                    if value_array[i][score_index+groups+k] == 0:
                        success[tool_names[k]] += 1
                if s < critical_value:
                    success['model'] += 1
            if s > critical_value:
                # methylated
                c = 1
            else:
                # unmethylated
                c = 0
            group, read, pos = id_list[i]
            # 0 truth/label
            # 1 strand
            # 2 score - t1
            # 3 score - t2
            # 4 prediction - t1
            # 5 prediction - t2
            # 6 np.arange(0,len(shared_ids),dtype=np.float)
            # 7 predicted_values
            strand = value_array[i,1]
            label = value_array[i,0]
            c_str = 'no' if c == 0 else 'yes'
            strand_str = '-' if strand == 0 else '+'
            label_str = 'no' if label == 0 else 'yes'
            print('\t'.join(map(str,[group,read,pos,strand_str,label_str,c_str,s])), file=out)
    return success, total_ignored
    

def load_training_data(training_fns, trunc_min_scores,
        trunc_max_scores, debug=False):
    """ First parse group, read and position to find shared data points
        Then read in training scores, truncating as appropriate """
    # Parse file twice. First time get all the loci, second time all the value data
    training_ids = [parse_training_loci(t_fn) for t_fn in training_fns]
    shared_ids = set.intersection(*training_ids)
    id_list = sorted(shared_ids)
    if debug:
        print('Number of shared ids in training sets:', len(shared_ids), file=sys.stderr)
    # value_array contents
    # 0 truth
    # 1 strand
    # 2:len(train)+2, tool score x train
    # 2+len(train):2+len(train)*2, tool prediction x train
    # 2+2*len(train) or -2, numeric order
    # 3+2*len(train) or -1, model predicted score
    groups = len(training_fns)
    value_array = np.zeros((len(shared_ids),4+(2*groups)), dtype=np.float)
    value_array[:,-2] = np.arange(0,len(shared_ids), dtype=np.float)
    for index, (training_fn, t_min, t_max) in \
            enumerate(zip(training_fns, trunc_min_scores, trunc_max_scores)):
        # Read in values
        contents = parse_training_values(training_fn, shared_ids, t_min, t_max, debug=debug)
        for i, id in enumerate(id_list):
            strand, label, predicted, score = contents[id]
            if index == 0:
                value_array[i,0] = label
                value_array[i,1] = strand
            value_array[i,2+index] = score
            value_array[i,2+groups+index] = predicted
    return value_array, id_list


def load_test_data(test_fns, trunc_min_scores,
        trunc_max_scores, debug=False):
    """ First parse group, read and position to find shared data points
        Then read in test scores, truncating as appropriate """
    # Parse file twice. First time get all the loci, second time all the value data
    test_ids = [parse_test_loci(t_fn) for t_fn in test_fns]
    shared_ids = set.intersection(*test_ids)
    id_list = sorted(shared_ids)
    if debug:
        print('Number of shared ids in test sets:', len(shared_ids), file=sys.stderr)
    # value_array contents
    # 0 strand
    # 1:len(train)+1, tool score x train
    # 1+len(train) or -2, numeric order
    # 2+len(train) or -1, model predicted score
    groups = len(test_fns)
    value_array = np.zeros((len(shared_ids),3+(groups)), dtype=np.float)
    value_array[:,-2] = np.arange(0,len(shared_ids), dtype=np.float)
    for index, (test_fn, t_min, t_max) in \
            enumerate(zip(test_fns, trunc_min_scores, trunc_max_scores)):
        # Read in values
        contents = parse_test_values(test_fn, shared_ids,
                t_min, t_max, debug=debug)
        for i, id in enumerate(id_list):
            strand, score = contents[id]
            if index == 0:
                value_array[i,0] = strand
            value_array[i,1+index] = score
    return value_array, id_list


def scale_data(value_array, groups, score_index, trunc_min, trunc_max):
    """
    Adds min and max scaling values into temporary score array, rescales,
    then writes back scores to value_array.
    Parameters:
    value_array : data matrix
    groups : (int) number of data sets
    score_index: index of first column belonging to scores. 2 for training, 1 for test
    trunc_min/max: list of min/max score values

    Returns:
    In place modification of value_array reference
    """
    start = score_index
    stop = score_index + groups
    x, y = value_array[:,start:stop].shape
    scores = np.zeros((x+2,y), dtype=np.float)  # need 2 extra rows, for min and max
    scores[:x,:] = value_array[:,start:stop]
    for i in range(groups):
        scores[x,i] = trunc_min[i] if trunc_min[i] is not None else -5 
        scores[x+1,i] = trunc_max[i] if trunc_max[i] is not None else 5
    scores = MinMaxScaler().fit_transform(scores)
    value_array[:,start:stop] = scores[:x,:]
    return value_array


def load_env():
    """ define interface and load any environment variables required """
    parser = AP()
    parser.add_argument('--train', nargs='+', required=True, help='Path to training data')
    parser.add_argument('--train_desc', required=True , help='Describe the training data set')
    parser.add_argument('--test', nargs='*', help='Path to test data. Must be omitted or '+\
            'same number of tool files as as --train (and in the same order)')
    parser.add_argument('--test_desc', help='Describe the test data set')
    parser.add_argument('--tool_names', nargs='+', required=True, help='Names of each tool in the same order '+\
            'as given for --train (and --test if provided)')
    parser.add_argument('--trunc_max', nargs='*', type=float,
            help='Truncate maximum values. Must match order of training data')
    parser.add_argument('--trunc_min', nargs='*', type=float,
            help='Truncate minimum values. Must match order of training data')
    parser.add_argument('--debug', action='store_true', help='Turn on debugging output (STDERR)')
    parser.add_argument('--inc_pred', action='store_true', help='Include tool prediction categories '+\
            'in regression. NOTE: must be present in all input files')
    parser.add_argument('--filter', type=float, default=-1, help='Percentage of total reads to remove '+\
            'around mean score, default -1 (disabled)')
    parser.add_argument('--testIsTraining', action='store_true',
            help='Use functions for handling training data for the test parameters')
    parser.add_argument('--no_scaling', action='store_true', help='Disable score scaling')
    args = parser.parse_args()
    # check that the number of command line arguments make sense
    if len(args.train) != len(args.tool_names):
        print('Tool names must match training files', file=sys.stderr)
        sys.exit(-1)
    if args.test and len(args.test) != len(args.train):
        print('Test files must match training files', file=sys.stderr)
        sys.exit(-1)
    if args.test and not args.test_desc:
        print('Description of test data set required', file=sys.stderr)
        sys.exit(-1)
    if args.trunc_max and len(args.trunc_max) != len(args.train):
        print('Truncation maximum values must match against each training input', file=sys.stderr)
        sys.exit(-1)
    if args.trunc_min and len(args.trunc_min) != len(args.train):
        print('Truncation minimum values must match against each training input', file=sys.stderr)
        sys.exit(-1)
    return args


def main():
    args = load_env()
    groups = len(args.train)
    if args.trunc_min is None:
        trunc_min_scores = (None for i in range(groups))
    else:
        trunc_min_scores = args.trunc_min
    if args.trunc_max is None:
        trunc_max_scores = (None for i in range(groups))
    else:
        trunc_max_scores = args.trunc_max
        
    value_array, id_list = load_training_data(args.train,trunc_min_scores,
            trunc_max_scores,debug=args.debug)
    score_index = 2
    start = score_index
    stop = score_index + groups
    if not args.no_scaling:
        value_array = scale_data(value_array, groups, score_index, trunc_min_scores, trunc_max_scores)
    
    # prepare a regression model to use later
    #extra_regressors = [Ridge, LinearRegression, SGDRegressor, ElasticNet, Lars, Lasso, ARDRegression,
    #                    BayesianRidge, HuberRegressor, PoissonRegressor, PassiveAggressiveRegressor]
    regressors = [RidgeCV]
    #extra_names = ['Ridge', 'LinearRegression', 'SGDRegressor', 'ElasticNet', 'Lars', 'Lasso',
    #               'ARDRegression', 'BayesianRidge', 'HuberRegressor', 'PoissonRegressor',
    #               'PassiveAggressiveRegressor']
    reg_names = ['RidgeCV']
    for r, n in zip(regressors, reg_names):    
        # sort array by scores prior to fitting regression
        for k in range(groups):
            if k==0:
                value_array = value_array[value_array[:,score_index+k].argsort()]
            else:
                value_array = value_array[value_array[:,score_index+k].argsort(kind='mergesort')]
        model = r()
        if args.inc_pred:
            model.fit(value_array[:,score_index:], value_array[:,0])  # fit against truth [:,0]
            value_array[:,-1] = model.predict(value_array[:,start:])
        else:
            model.fit(value_array[:,score_index:score_index+groups], value_array[:,0])
            value_array[:,-1] = model.predict(value_array[:,start:stop])
        # sort by numeric id to bring back in line with ids
        value_array = value_array[value_array[:,-2].argsort()]    
        
        critical_value = 0.5
        if args.no_scaling:
            critical_value = 0  # np.mean(value_array[:,7])
        # We pass args.train_desc twice because we test on our training data first
        success, total_ignored = count_success(critical_value, value_array, n,
                args.train_desc, args.train_desc, args.tool_names, id_list, 
                filter=args.filter, include_pred=args.inc_pred)
        #print ('Number of data points:', truth.shape[0], 'Number filtered out:', total_ignored)
        divisor = value_array.shape[0] - total_ignored
        fields = ['Filter', 'Ignored'] +\
                 ['\t'.join([t+'_pass', t+'_prop']) for t in args.tool_names] +\
                 ['Model_succ', 'Model_prop']
        print('\t'.join(fields), file=sys.stderr)
        fields = [args.filter, total_ignored] +\
                ['\t'.join(map(str, [success[t], success[t]/divisor])) for t in args.tool_names] +\
                ['\t'.join(map(str, [success['model'], success['model']/divisor]))]
        print('\t'.join(map(str, fields)), file=sys.stderr)    
    
    ### Load real data to test with our model
    if args.test:
        if args.testIsTraining:
            value_array, id_list = load_training_data(args.test,trunc_min_scores,
                    trunc_max_scores,debug=args.debug)
            score_index = 2
        else:
            value_array, id_list = load_test_data(args.test,trunc_min_scores,
                    trunc_max_scores,debug=args.debug)
            score_index = 1
            
        if not args.no_scaling:
            value_array = scale_data(value_array, groups, score_index, trunc_min_scores, trunc_max_scores)
        # sort array by scores prior to fitting regression
        for k in range(groups):
            if k==0:
                value_array = value_array[value_array[:,score_index+k].argsort()]
            else:
                value_array = value_array[value_array[:,score_index+k].argsort(kind='mergesort')]
        # Predict based on training model
        if args.inc_pred:
            value_array[:,-1] = model.predict(value_array[:,score_index:])
        else:
            value_array[:,-1] = model.predict(value_array[:,score_index:score_index+groups])
        # sort by numeric id to bring back in line with ids
        value_array = value_array[value_array[:,-2].argsort()]
        
        # set tipping point between unmethylated/methylated call
        critical_value = 0.5
        if args.no_scaling:
            critical_value = 0  # np.mean(value_array[:,7])
    
        if args.testIsTraining:
            success, total_ignored = count_success(critical_value, value_array, 'RidgeCV',
                    args.train_desc, args.test_desc, args.tool_names, id_list, filter=args.filter, include_pred=args.inc_pred)
            #print ('Number of data points:', truth.shape[0], 'Number filtered out:', total_ignored)
            divisor = value_array.shape[0] - total_ignored
            fields = ['Filter', 'Ignored'] +\
                    ['\t'.join([t+'_pass', t+'_prop']) for t in args.tool_names] +\
                    ['Model_succ', 'Model_prop']
            print('\t'.join(fields), file=sys.stderr)
            fields = [args.filter, total_ignored] +\
                    ['\t'.join(map(str,[success[t], success[t]/divisor])) for t in args.tool_names] +\
                    ['\t'.join(map(str, [success['model'], success['model']/divisor]))]
            print('\t'.join(map(str, fields)), file=sys.stderr)
        else:
            filter_min, filter_max = get_filter_vals_fixed_proportion(value_array,
                    critical_value, args.filter)
            total_ignored = 0
            fn = 'meteore_test_'+'_'.join(args.tool_names)+'_'+'RidgeCV'+'_'+\
                    str(args.train_desc)+'_'+str(args.filter)+'_'+str(args.test_desc)+'.tsv'
            if args.inc_pred:
                fn = fn.replace('.tsv','_inc_pred.tsv')
            with open(fn, 'wt') as out:
                print('\t'.join(map(str,['Read','Pos','Strand','Score','Prediction'])), file=out)
                for i, s in enumerate(value_array[:,-1]):
                    if s > filter_min and s < filter_max:
                        total_ignored += 1
                        continue
                    if s > critical_value:
                        c = 1  #  methylated
                    else:
                        c = 0  # unmethylated
                    read, pos = id_list[i]
                    # 0 strand
                    # 1: scores - t1
                    # -1 predicted_values
                    strand = value_array[i,0]
                    c_str = 'no' if c == 0 else 'yes'
                    strand_str = '-' if strand == 0 else '+'
                    print('\t'.join(map(str,[read,pos,strand_str,s,c_str])), file=out)
        

if __name__ == '__main__':
    main()
