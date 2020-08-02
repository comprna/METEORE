#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020

# This script is to:
# -create a per-read prediction output that is formatted to be used in METEORE for the subsequent consensus prediction

library(dplyr)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE,  sep = "\t")
df <- df %>% select(2,3,5,7,8) # pos, strand, id, unmethylated, methylated
df$Score <- log2(df$V8/df$V7)
df <- df %>% select(3,1,2,6)
colnames(df) <- c("ID","Pos","Strand","Score")
df[,"Pos"] <- df[,"Pos"]+1 

write.table(df, file=args[2], quote=FALSE, sep ="\t", col.names = TRUE, row.names = FALSE)
