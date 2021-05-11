#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
	prediction_to_mod_frequency.py
	Author: Zaka Yuen, JCSMR, ANU
	Created on July 22 2020
"""
import pandas as pd
import sys
import argparse


parser = argparse.ArgumentParser(description = 'Convert the per-site predictions for each individual read into per-site predictions at genome level (methylation frequency)')

parser.add_argument('-i', '--input', type = str, required = True,
    help = 'The file after running combination_model_prediction.py, which is a per-read per-site prediction result')

parser.add_argument('-t', '--threshold',required=False, type=float, default=0.5,
   help='Threshold to classify the per-read site as unmethylate/methylated [default = 0.5]')


parser.add_argument('-o', '--output', type = str, required = True,
		help = 'The output file of the per-site predictions at genome level')

options = parser.parse_args()


def main(thres,per_read_data):
	per_read_data.loc[per_read_data['Prob_methylation'] <= thres, 'Called'] = 0 # called as unmethylated
	per_read_data.loc[per_read_data['Prob_methylation'] > thres, 'Called'] = 1 # called as methylated
	# Count Duplicates in Pandas DataFrame across position and called columns
	duplicates = per_read_data.pivot_table(index=['Chr','Pos','Called'], aggfunc='size') # add chr
	duplicates = duplicates.rename('Count')

	duplicates_df = duplicates.to_frame()
	site_data = duplicates_df.reset_index(level=['Chr','Pos','Called']) # add chr

	# Collect unmethylated sites
	unmeth = site_data.loc[site_data['Called'] == 0]
	unmeth = unmeth.drop(['Called'], axis=1)
	unmeth = unmeth.rename(columns={'Count': 'Unmodified_read'})
	# Collect methylated sites
	meth = site_data.loc[site_data['Called'] == 1]
	meth = meth.drop(['Called'], axis=1)
	meth = meth.rename(columns={'Count': 'Modified_read'})
	# Merge by position
	reads = pd.merge(unmeth, meth, how='outer',on=['Chr', 'Pos']) # add chr
	# Replace NA with 0
	reads = reads.fillna(0)

	# Merge column duplicate and sum number of reads
	per_site_data = site_data.groupby(['Chr','Pos'], as_index=False).agg({'Count': 'sum'}) # add chr
	per_site_data = per_site_data.rename(columns={'Count': 'Coverage'})

	final_per_site = pd.merge(reads, per_site_data, how='inner', on=['Chr','Pos']) # add chr
	final_per_site['Methylation_frequency'] = final_per_site['Modified_read']/final_per_site['Coverage']
	final_per_site.Unmodified_read = final_per_site.Unmodified_read.astype(int)
	final_per_site.Modified_read = final_per_site.Modified_read.astype(int)
	final_per_site.to_csv(options.output, sep="\t", header=True, index=False)


if __name__ == '__main__':
     thres=options.threshold
     per_read_data=pd.read_csv(options.input, header=0, sep="\t")
     main(thres,per_read_data)
