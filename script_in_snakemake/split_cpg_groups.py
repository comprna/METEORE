#!/usr/bin/env python3

import sys
import pandas as pd
import re

"""
	split_cpg_groups.py
	Author: Zaka Yuen, JCSMR, ANU
	Created on Feb 18 2020

	The output of the nanopolish calling procedure is a log-likelihood ratio, 
	where a positive log-likelihood ratio indicates evidence for methylation.
	Nanopolish groups nearby CpG sites together and calls the group jointly,
	assigning the same scores to each site in the group.

	This script is to:
	-use after running nanopolish call-methylation
	-allow per-site comparison to other datasets
	-split up the CpG group into its constituent CpG sites and assign the same log-likelihood ratio
	-keeping strandedness and readID information
"""


target ="CG"
out = open(snakemake.output[1],'w')
out.write("\t".join(['Chr', 'Pos','Strand', 'Log.like.ratio', 'Read_ID']) + "\n")
with open(snakemake.input[0],'r') as fh:
    next(fh)
    for line in fh:
        fields = line.rstrip().split()
        chrom = str(fields[0])
        strand = str(fields[1])
        start = int(fields[2]) + 1 # fix the position
        read_name = str(fields[4]).split('_', 1)[0]
        logRatio = float(fields[5])
        cpg_num = int(fields[9])
        seq = str(fields[10])

        if cpg_num == 1:
            out.write(chrom + "\t" + str(start) + "\t" + strand + "\t" + str(logRatio) + "\t" + read_name + "\n")

        elif cpg_num > 1:
            # index = []
            # pos.append(start)
            for match in  re.finditer(target, seq):
                #print(match.start())
                index.append(match.start())
                length = len(index)
            for i in range(1, length):
                new_start = start + (index[i] - index[0])
                # pos.append(new_start)
                out.write(chrom + "\t" + str(new_start) + "\t" + strand + "\t" + logRatio + "\t" + read_name + "\n")
                #print(new_start)
            '''
            ch.extend([chrom] * cpg_num)
            st.extend([strand] * cpg_num)
            log.extend([logRatio] * cpg_num)
            readID.extend([read_name] * cpg_num)
            

final = pd.DataFrame(list(zip(ch,pos,st,log,readID)), columns =['Chr', 'Pos','Strand', 'Log.like.ratio', 'Read_ID'])
final.to_csv(snakemake.output[0], sep="\t", header=True, index=False)
'''

