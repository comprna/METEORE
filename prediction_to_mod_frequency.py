#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
	prediction_to_mod_frequency.py
	Author: Zaka Yuen, JCSMR, ANU
	Created on July 22 2020
"""
import pandas as pd
import sys

inFile = sys.argv[1]
outFile = sys.argv[2]

per_read_data = pd.read_csv(inFile, header=0, sep="\t")
# Count Duplicates in Pandas DataFrame across position and prediction columns
duplicates = per_read_data.pivot_table(index=['Pos','Prediction'], aggfunc='size')
duplicates = duplicates.rename('Result') 

duplicates_df = duplicates.to_frame()
site_data = duplicates_df.reset_index(level=['Pos', 'Prediction'])

# Collect unmethylated sites
unmeth = site_data.loc[site_data['Prediction'] == 0]
unmeth = unmeth.drop(['Prediction'], axis=1)
unmeth = unmeth.rename(columns={'Result': 'Unmodified_read'})
# Collect methylated sites
meth = site_data.loc[site_data['Prediction'] == 1]
meth = meth.drop(['Prediction'], axis=1)
meth = meth.rename(columns={'Result': 'Modified_read'})
# Merge by position
reads = pd.merge(unmeth, meth, how='outer',on=['Pos'])
# Replace NA with 0
reads = reads.fillna(0)

# Merge column duplicate and sum number of reads
per_site_data = site_data.groupby(['Pos'], as_index=False).agg({'Result': 'sum'})
per_site_data = per_site_data.rename(columns={'Result': 'Coverage'})

final_per_site = pd.merge(reads, per_site_data, how='inner', on=['Pos'])
final_per_site['Methylation_frequency'] = final_per_site['Modified_read']/final_per_site['Coverage']
final_per_site.Unmodified_read = final_per_site.Unmodified_read.astype(int)
final_per_site.Modified_read = final_per_site.Modified_read.astype(int)
final_per_site.to_csv(outFile, sep="\t", header=True, index=False)
