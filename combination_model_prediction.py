# -*- coding: utf-8 -*-
"""
Created on Thu Jul  9 18:03:39 2020

@author: akanksha
"""

import pandas as pd
import numpy as np
import pickle
from itertools import combinations 
import sklearn
from functools import reduce
import argparse
import os

    
parser = argparse.ArgumentParser(description = 'Prediction from combined models for the reads.')

parser.add_argument('--methodsfile','-i', type = str, required = True,
    help = 'TSV file containing name and path of the method output tsv file. The output tsv file from the method should be in the format [ID, Pos,Strand,Score]. Can be compressed in gz.')  

parser.add_argument('--model','-m', choices=["default","optimized"],required=True, type=str,
   help = 'which model to select from default RF or optimized RF with max_depth 3 and n_estimator 10')

parser.add_argument('--output', '-o',type = str, required = True,
		help = 'Where to store the outputs')
options = parser.parse_args()

def mod_file(data_file_path):
    data_file=pd.read_csv(data_file_path, header=0, sep="\t")
    name=data_file_path.split("\\")[-1].split(".")[0]
    data_file.drop_duplicates(subset=["ID","Pos", "Strand"],inplace=True)
    data_file.reset_index(inplace=True,drop=True)
    mask=data_file.index[data_file.Strand=="-"].tolist()
    data_file["Pos"][mask]=data_file["Pos"][mask]-1
    data_file.drop(["Strand"], axis=1, inplace=True)
    data_file.rename(columns={ "Score":name}, inplace=True)
    data_file.reset_index(inplace=True,drop=True)
    return(data_file)
    
def main(mp,combine_file):
    
    loaded_model = pickle.load(open(mp, 'rb'))
    X=combine_file[combine_file.columns[2:]]
    X=sklearn.preprocessing.MinMaxScaler().fit_transform(X)
    prediction=pd.DataFrame(loaded_model.predict(X))
    prediction_prob=pd.DataFrame(loaded_model.predict_proba(X))
    prediction.rename(columns={0:"Prediction"}, inplace=True)
    prediction_prob=prediction_prob[[1]]
    prediction_prob.rename(columns={1:"Prob_methylation"}, inplace=True)
    final_output=pd.concat([combine_file[combine_file.columns[:2]],prediction,prediction_prob], axis=1)
    final_output["Pos"] = final_output["Pos"].apply(np.int64) # Covert float into integer for Pos column
    #os.makedirs(options.output) 
    #final_output.to_csv(options.output+'/predictions_combination_method.tsv', header=True, index=None, sep='\t')
    dir = ("combined_model_results")
    if not os.path.isdir(dir):
        os.makedirs(dir)
        final_output.to_csv(dir+'/'+options.output, header=True, index=None, sep='\t')
    else:
        final_output.to_csv(dir+'/'+options.output, header=True, index=None, sep='\t')
   
if __name__ == '__main__':
     
     df_file=pd.read_csv(options.methodsfile,header=None, sep='\t')
     if options.model=="default":
         fillval="default"
     else:
         fillval="max_depth_3_n_estimator_10"
     modelname='_'.join(df_file[0])
     mp='saved_models/rf_model_'+fillval+'_'+modelname+'.model'
     dfs=[]
     for i in df_file[1]:
         dfs.append(mod_file(i))
     combine_file=reduce(lambda left,right: pd.merge(left, right, how='inner',on=["ID","Pos"]), dfs)
     combine_file.drop_duplicates(subset=["ID","Pos"],inplace=True)
     combine_file.reset_index(inplace=True,drop=True)
     main(mp,combine_file)
  
