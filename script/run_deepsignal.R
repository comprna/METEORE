#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on June 2020

# This script is to:
# -combine the CpG methylation calls from both strands into a single strand for a CpG site


library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE, sep = "\t")
df <- df  %>% select(1, 2, 3, 10, 9)
colnames(df) <- c("Chr", "Pos", "Strand", "Methyl_freq", "Cov")
df[,"Pos"] <- df[,"Pos"]+1 
# Accumulate Cpg sites on the +'ve strand
df[df$Strand == "-","Pos"] <- 
  df[df$Strand == "-","Pos"]-1
# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df <- data.table(df)
df <- df[,list(Methyl_freq = mean(Methyl_freq), 
               Cov = sum(Cov)),
               list(Chr,Pos)]
df <- data.frame(df)

write.table(df, file=args[2], quote=FALSE, sep ="\t", col.names = TRUE, row.names = FALSE)
