#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020
# Modified on Mar 2021

# This script is to:
# -create a per-read prediction output that is formatted to be used in METEORE for the subsequent consensus prediction

library(dplyr)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = TRUE, sep = "\t", stringsAsFactors = TRUE)
df <- df %>% select(1,2,4,3,5,6)
df$Score <- df$mod_log_prob - df$can_log_prob
df <- df %>% select(1,2,3,4,6)
colnames(df) <- c("ID", "Chr", "Pos", "Strand", "Score")
df <- df %>% mutate(Strand = if_else(Strand == 1, "+", "-"))
df[,"Pos"] <- df[,"Pos"]+1
df$Pos <- format(df$Pos,scientific=FALSE)
write.table(df, file=args[2], sep = "\t", row.names = FALSE, col.names = TRUE, quote = FALSE)
