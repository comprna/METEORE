# -*- coding: utf-8 -*-
"""
Created on Tue Jul 28 17:47:20 2020

@author: akanksha
"""

import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier
from itertools import combinations 
import sklearn
from functools import reduce
import os
import argparse
import warnings
warnings.filterwarnings("ignore")


parser = argparse.ArgumentParser(description = 'train and save the combined models')

parser.add_argument('--deepsignalfilepath','-d', type = str, required = False,
    help = 'Path to deepsignal output tsv file in the format [ID, Pos,Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--nanopolishfilepath','-n', type = str, required = False,
    help = 'Path to nanopolish output tsv file in the format [ID, Pos, Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--guppyfilepath','-g', type = str, required = False,
    help = 'Path to guppy output tsv file in the format [ID, Pos,Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--megalodonfilepath','-m', type = str, required = False,
    help = 'Path to megalodon output tsv file in the format [ID, Pos, Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--tombofilepath','-t', type = str, required = False,
    help = 'Path to tombo output tsv file in the format [ID, Pos,Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--combinations','-c', choices=range(2, 6),required=True, type=int,
   help = 'number of methods to combine together for training')

parser.add_argument('--output', '-o',type = str, required = True,
		help = 'Where to save the trained model')
options = parser.parse_args()


def mod_file(data_file_path):
    data_file=pd.read_csv(data_file_path, header=0, sep="\t")
    name=data_file_path.split("\\")[-1].split(".")[0]
    data_file.drop(["Set","Prediction"], axis=1, inplace=True)
    data_file.drop_duplicates(subset=["ID","Pos", "Strand"],inplace=True)
    data_file.reset_index(inplace=True,drop=True)
    mask=data_file.index[data_file.Strand=="-"].tolist()
    data_file["Pos"][mask]=data_file["Pos"][mask]-1
    data_file.drop(["Strand"], axis=1, inplace=True)
    data_file.rename(columns={ "Score":name}, inplace=True)
    data_file.reset_index(inplace=True,drop=True)
    return(data_file)
    
def combine_methods(val):
    dfs=[]
    for v in val:
        dfs.append(methods[v])
    combine_file=reduce(lambda left,right: pd.merge(left, right, how='inner',on=["ID","Pos","Label"]), dfs)
    combine_file.drop(["ID","Pos"], axis=1, inplace=True)
    combine_file.Label[combine_file.Label=="no"]=0
    combine_file.Label[combine_file.Label=="yes"]=1
    return(combine_file[combine_file.columns[-(len(val)):]],combine_file.Label)
    
 
    
if __name__ == '__main__':   
    
    if options.deepsignalfilepath is not None:
        deepsignal= mod_file(options.deepsignalfilepath)
        methods={"deepsignal":deepsignal}
    if options.nanopolishfilepath is not None:
        nanopolish= mod_file(options.nanopolishfilepath)
        methods.update({"nanopolish":nanopolish})
    if options.guppyfilepath is not None:
        guppy= mod_file(options.guppyfilepath)
        methods.update({"guppy":guppy})
    if options.megalodonfilepath is not None: 
        megalodon= mod_file(options.megalodonfilepath)
        methods.update({"megalodon":megalodon})
    if options.tombofilepath is not None:
        tombo= mod_file(options.tombofilepath)
        methods.update({"tombo":tombo})
  
    comb = combinations(list(methods.keys()), options.combinations) 
    os.makedirs(options.output) 


    for val in list(comb):
     
        X,y=combine_methods(val)
        
        X=sklearn.preprocessing.MinMaxScaler().fit_transform(X)
        y=y.astype(int)
        y=y.to_numpy()
        y=np.ravel(y)
    
        rf = RandomForestClassifier(max_depth=3, n_estimators =10)
        
        rf.fit(X, y)
        
        filename = options.output+'/'+'rf_model_max_depth_3_n_estimator_10_'+'_'.join(val)+'.model'
        joblib.dump(rf, open(filename, 'wb'))
        
  
    
    comb = combinations(list(methods.keys()), options.combinations) 
    
    for val in list(comb):
        X,y=combine_methods(val)
        
        X=sklearn.preprocessing.MinMaxScaler().fit_transform(X)
        y=y.astype(int)
        y=y.to_numpy()
        y=np.ravel(y)
    
        
        rf = RandomForestClassifier()
        rf.fit(X, y)
       
        filename = options.output+'/'+'rf_model_default_'+'_'.join(val)+'.model'
        joblib.dump(rf, open(filename, 'wb'),compress=3)
