#!/usr/bin/env python3

import sys
import pandas as pd
import wiggelen

"""
	wig2bed.py
	Author: Dr Akanksha Srivastava. JCSMR, ANU
	Modified by: Zaka Yuen, JCSMR, ANU
	Created on Nov 2019

	Tombo can only output methylation scores in a wig format.

	This script is to:
	-convert a wiggle format to a text format containing per-site scores for downstream analyses
"""

# Positive strand
r=[]
p=[]
v=[]

with open(snakemake.input[0],'r') as fh:
    for region, position, value in wiggelen.walk(fh):
        r.append(region)
        p.append(position)
        v.append(value)
    d_plus = pd.DataFrame(list(zip(r,p,v)), columns =['names', 'start','values'])
    d_plus["strand"]="+"

# Negative strand
r_m=[]
p_m=[]
v_m=[]

with open(snakemake.input[1],'r') as fh:
    for region, position, value in wiggelen.walk(fh):
        r_m.append(region)
        p_m.append(position)
        v_m.append(value)
    d_minus = pd.DataFrame(list(zip(r_m,p_m,v_m)), columns =['names', 'start','values'])
    d_minus["strand"]="-"
d=pd.concat([d_plus, d_minus])
d.sort_values(["names","start"], inplace=True)

d.to_csv(snakemake.output[0],sep="\t", header=True, index=False)

