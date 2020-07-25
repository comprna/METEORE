#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
	prediction_to_mod_frequency.py
	Author: Zaka Yuen, JCSMR, ANU
	Created on July 22 2020
"""
import pandas as pd
import sys

"""
Set the threshold below:

    For rf_model_max_depth_3_n_estimator_10_deepsignal_nanopolish.model (deepsignal_nanopolish_default), 
        optimal threshold = 0.3
        
    For rf_model_default_deepsignal_nanopolish.model (deepsignal_nanopolish), 
        optimal threshold = 0.43
        
Note that the prediction ouput after running combination_model_prediction.py script uses the threshold of 0.5
"""
threshold=0.3 

"""
Script starts here
"""
inFile = sys.argv[1]
outFile = sys.argv[2]

per_read_data = pd.read_csv(inFile, header=0, sep="\t")
per_read_data.loc[per_read_data['Prob_methylation'] <= threshold, 'Called'] = 0 # called as unmethylated
per_read_data.loc[per_read_data['Prob_methylation'] > threshold, 'Called'] = 1 # called as methylated
# Count Duplicates in Pandas DataFrame across position and called columns
duplicates = per_read_data.pivot_table(index=['Pos','Called'], aggfunc='size')
duplicates = duplicates.rename('Count') 

duplicates_df = duplicates.to_frame()
site_data = duplicates_df.reset_index(level=['Pos', 'Called'])

# Collect unmethylated sites
unmeth = site_data.loc[site_data['Called'] == 0]
unmeth = unmeth.drop(['Called'], axis=1)
unmeth = unmeth.rename(columns={'Count': 'Unmodified_read'})
# Collect methylated sites
meth = site_data.loc[site_data['Called'] == 1]
meth = meth.drop(['Called'], axis=1)
meth = meth.rename(columns={'Count': 'Modified_read'})
# Merge by position
reads = pd.merge(unmeth, meth, how='outer',on=['Pos'])
# Replace NA with 0
reads = reads.fillna(0)

# Merge column duplicate and sum number of reads
per_site_data = site_data.groupby(['Pos'], as_index=False).agg({'Count': 'sum'})
per_site_data = per_site_data.rename(columns={'Count': 'Coverage'})

final_per_site = pd.merge(reads, per_site_data, how='inner', on=['Pos'])
final_per_site['Methylation_frequency'] = final_per_site['Modified_read']/final_per_site['Coverage']
final_per_site.Unmodified_read = final_per_site.Unmodified_read.astype(int)
final_per_site.Modified_read = final_per_site.Modified_read.astype(int)
final_per_site.to_csv(outFile, sep="\t", header=True, index=False)
