#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020
# Modified on March 2021

# This script is to:
# -create a per-read prediction output that is formatted to be used in METEORE for the subsequent consensus prediction

library(dplyr)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE,  sep = "\t", stringsAsFactors = TRUE)
df <- df %>% select(1,2,3,5,7,8) # chr, pos, strand, id, unmethylated, methylated
df$Score <- log2(df$V8/df$V7)
df <- df %>% select(4,1,2,3,7)
colnames(df) <- c("ID", "Chr", "Pos", "Strand", "Score")
df[,"Pos"] <- df[,"Pos"]+1 
df$Pos <- format(df$Pos,scientific=FALSE)
write.table(df, file=args[2], quote=FALSE, sep ="\t", col.names = TRUE, row.names = FALSE)