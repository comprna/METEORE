#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020

# This script is to:
# -create the input file (TSV) from Nanopolish's per-read data for making the predictions from combination model
  
args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = TRUE, sep = "\t")
colnames(df) <- c("Chr", "Pos", "Strand", "Score", "ID")
df[df$Strand == "-","Pos"] <- df[df$Strand == "-","Pos"]+1
df <- df[, c("ID", "Pos", "Strand", "Score")]
write.table(df, file=args[2], sep = "\t", row.names = FALSE, col.names = TRUE, quote = FALSE)