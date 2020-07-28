#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on May 2020

# This script is to:
# -combine methylation scores amd coverage into one dataframe
# -combine the CpG methylation calls from both strands into a single strand for a CpG site

library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

# test if there is at least one argument: if not, return an error
if (length(args)==0 | length(args)==1) {
  stop("At least two arguments must be supplied (input files for freq and cov outputs from Tombo).n", call.=FALSE)
} else if (length(args)==2) {
  # default output file
  args[3] = "out.txt"
}

tb.freq <- read.table(args[1], header = TRUE, sep = "\t")
tb.cov <- read.table(args[2], header = TRUE, sep = "\t")
colnames(tb.freq) <- c("Chr", "Pos", "Methyl_freq", "Strand")
colnames(tb.cov) <- c("Chr", "Pos", "Cov", "Strand")
tb <- inner_join(tb.cov, tb.freq, by = c("Chr", "Pos", "Strand"))
tb <- select(tb, Chr, Pos, Strand, Cov, Methyl_freq)
# Accumulate Cpg sites on +'ve strand
tb[tb$Strand == "-","Pos"] <- 
  tb[tb$Strand == "-","Pos"]-1
# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
tb <- data.table(tb)
tb <- tb[,list(Methyl_freq=mean(Methyl_freq), 
                               Cov=sum(Cov)),
                         list(Chr,Pos)]
tb <- data.frame(tb)

write.table(tb, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)