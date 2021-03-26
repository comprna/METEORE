#!/usr/bin/env python3

import sys
from tombo import tombo_helper, tombo_stats
import numpy as np
import pandas as pd

"""
	extract_tombo_per_read_results.py
	Author: Zaka Yuen JCSMR, ANU
	Created on June 2020
	Modified on March 2021
	Access the per-read statistics files using the template from here:
	<https://nanoporetech.github.io/tombo/tombo.html#python-api-examples>
	This script is to:
	-extract per-read statistics into a text format using Tombo python API
"""

###################################################
######## specify region of interest below: ########
chromosome = 'NC_000913.3'
start_position = 412305
end_position = 4584088
###################################################
###################################################

reg_data_plus = tombo_helper.intervalData(
    chrm=chromosome, start=start_position, end=end_position, strand="+")

# specify region of interest (minus strand) below:
reg_data_minus = tombo_helper.intervalData(
    chrm=chromosome, start=start_position, end=end_position, strand="-")

# Plus strand
sample_per_read_stats = tombo_stats.PerReadStats(snakemake.input[0])
reg_per_read_stats_plus = sample_per_read_stats.get_region_per_read_stats(reg_data_plus)
reg_per_read_stats_plus['pos'] = reg_per_read_stats_plus['pos']+1
plus = pd.DataFrame(reg_per_read_stats_plus)
plus["strand"] = "+"
plus["Chr"] = chromosome

# Minus strand
reg_per_read_stats_minus = sample_per_read_stats.get_region_per_read_stats(reg_data_minus)
reg_per_read_stats_minus['pos'] = reg_per_read_stats_minus['pos']+1
minus = pd.DataFrame(reg_per_read_stats_minus)
minus["strand"] = "-"
minus["Chr"] = chromosome

# Combine the results
final=pd.concat([plus, minus])
final.sort_values(["Chr", "pos"], inplace=True)
final.columns=["Pos", "Score", "ID", "Strand", "Chr"]
final = final[["ID", "Chr", "Pos", "Strand", "Score"]]
final['ID'].replace(regex=True, inplace=True, to_replace="b'", value="")
final['ID'].replace(regex=True, inplace=True, to_replace="'", value="")
final.to_csv(snakemake.output[0],sep="\t", header=True, index=False)
