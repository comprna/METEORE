#!/usr/bin/env python3

import sys
import pandas as pd

"""
	bedgraph2bed.py
	Author: Zaka Yuen, JCSMR, ANU
	Created on Nov 2019

	Tombo can only output coverage in a bedGraph format.

	This script is to:
	-convert a bedGraph format to a text format containing per-base coverage for downstream analyses
"""
# Positive strand
ch_plus=[]
pos_plus=[]
c_plus=[]
with open(snakemake.input[0],'r') as fh:
    next(fh)
    for line in fh:
        fields = line.rstrip().split()
        chrom = str(fields[0])
        start = int(fields[1]) +1
        end = int(fields[2]) +1 # Plus 1 for the range() function below
        cov = int(fields[3])

        for i in range (start, end):
            ch_plus.append(chrom)
            pos_plus.append(i)
            c_plus.append(cov)

    plus = pd.DataFrame(list(zip(ch_plus,pos_plus,c_plus)), columns=['Chr', 'Pos', 'Cov'])
    plus["strand"]="+"

# Negative strand
ch_minus=[]
pos_minus=[]
c_minus=[]
with open(snakemake.input[1],'r') as fh:
    next(fh)
    for line in fh:
        fields = line.rstrip().split()
        chrom = str(fields[0])
        start = int(fields[1]) +1
        end = int(fields[2]) +1
        cov = int(fields[3])

        for i in range (start, end):
            ch_minus.append(chrom)
            pos_minus.append(i+1)
            c_minus.append(cov)

    minus = pd.DataFrame(list(zip(ch_minus,pos_minus,c_minus)), columns=['Chr', 'Pos', 'Cov'])
    minus["strand"]="-"

final=pd.concat([plus, minus])
final.sort_values(["Chr","Pos"], inplace=True)

final.to_csv(snakemake.output[0],sep="\t", header=True, index=False)
