#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020

# This script is to:
#   -convert the output of the guppy-gcf52ref calling pipeline which is a log-likelihood ratio into methylation freq
#   -where a positive log-likelihood ratio indicates evidence for methylation
#   -combine the CpG methylation calls from both strands into a single strand for a CpG site
# Please visit gcf52ref: https://github.com/kpalin/gcf52ref for more information

library(data.table)
library(dplyr)
library(plyr)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE, sep = "\t") # false header because the header starts with #
colnames(df) <- c("Chr", "Strand","start", "Pos", "read_name", "Log.like.ratio",
                   "log_like_methylated", "log_like_unmethylated", "df.cov", "num_motifs", "sequence")
df <- select(df, Chr, Pos, Strand, Log.like.ratio)
df$Chr <- as.character(levels(df$Chr))[df$Chr]
df$Strand <- as.character(levels(df$Strand))[df$Strand]
# Correct the coordinates
df[df$Strand == "-", "Pos"] <- df[df$Strand == "-", "Pos"]+1

# The position for same site on differnt stands repeats themselves, need to count no. of methylated CpG and unmethylated CpG using plyr package
df_m <- count(df[df$Log.like.ratio > 0, ], c("Chr", "Pos","Strand"))
df_unm <- count(df[df$Log.like.ratio < 0, ], c("Chr", "Pos","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"
# New dataframe
df <- full_join(df_m, df_unm, by = c("Chr", "Pos", "Strand"))

# Replace NA with 0
df[is.na(df)] <- 0
# Create a new column that gives you a total number of reads (coverage)
df$Cov <- df$Num.methylated + df$Num.unmethylated
# Get the methylation frequency by (Methylated reads / Number of reads)
df$Methyl_freq <- df$Num.methylated/df$Cov
# Remove unnessary columns
df <- select(df, Chr, Pos, Strand, Cov, Methyl_freq)

# Accumulate Cpg sites on +'ve strand
df[df$Strand == "-","Pos"] <- df[df$Strand == "-","Pos"]-1
# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df <- data.table(df)
#str(df)
df <- df[,list(Methyl_freq = mean(Methyl_freq),
               Cov = sum(Cov)),
               list(Chr,Pos)]
df <- data.frame(df)

write.table(df, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)
