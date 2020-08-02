#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020

# This script is to:
# -create a per-read prediction output that is formatted to be used in METEORE for the subsequent consensus prediction

library(dplyr)

args = commandArgs(trailingOnly=TRUE)

# test if there is at least one argument: if not, return an error
if (length(args)==0) {
  stop("Please specify the path to the Megalodon's per-read output file (per_read_modified_base_calls.txt) and/or the output file\nIf the output file is not specified, the output file is saved to megalodon-score.tsv by default", call.=FALSE)
} else if (length(args)==1) {
  # default output file
  args[2] = "megalodon-score.tsv"
}

df <- read.table(args[1], header = TRUE, sep = "\t")
df <- df %>% select(1,4,3,5,6)
df$Score <- df$mod_log_prob - df$can_log_prob
df <- df %>% select(1,2,3,6)
colnames(df) <- c("ID", "Pos", "Strand", "Score")
df <- df %>% mutate(Strand = if_else(Strand == 1, "+", "-"))
df[,"Pos"] <- df[,"Pos"]+1
write.table(df, file=args[2], sep = "\t", row.names = FALSE, col.names = TRUE, quote = FALSE)
