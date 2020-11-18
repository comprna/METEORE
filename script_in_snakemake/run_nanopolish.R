#!/usr/bin/env Rscript

# Author: Zaka Yuen, JCSMR, ANU
# Created on May 2020

# This script is to:
# -calculate per-site methylation frequency (no. of methylated reads/total reads) from the log-likelihood ratio
# -use the cutoff of 2.5 suggested by Nanopolish to remove non-significant methylation call
# 	-log-likelihood ratio >=2.5, considered as methylated 
# 	-log-likelihood ratio <=-2.5, considered as unmethylated

library(data.table)
library(dplyr)
library(plyr)

args = commandArgs(trailingOnly=TRUE)

# test if there is at least one argument: if not, return an error
if (length(args)==0) {
  stop("Please input your per-read and per-site log-likelihood output file from Nanopolish", call.=FALSE)
} else if (length(args)==1) {
  # default output file
  args[2] = "nanopolish_freq_perCG.txt"
}

df <- read.table(args[1], header=TRUE, sep = "\t")
df <- select(df, -Read_ID)
df$Chr <- as.character(levels(df$Chr))[df$Chr]
df$Strand <- as.character(levels(df$Strand))[df$Strand]
# Apply the cutoff
df <- filter(df, Log.like.ratio >= 2.5 | Log.like.ratio <= -2.5)
# Correct the coordinates
df[df$Strand == "-", "Pos"] <- df[df$Strand == "-", "Pos"]+1

# The position for same site on differnt stands repeats themselves, need to count no. of methylated CpG and unmethylated CpG using plyr package
df_m <- count(df[df$Log.like.ratio > 0, ], c("Chr", "Pos","Strand"))
df_unm <- count(df[df$Log.like.ratio < 0, ], c("Chr", "Pos","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"
# New df
df <- full_join(df_m, df_unm, by = c("Chr", "Pos", "Strand"))
# Replace NA with 0
df[is.na(df)] <- 0
# Create a new column that gives a total no. of reads (coverage)
df$df.cov <- df$Num.methylated + df$Num.unmethylated
# Get the methylation frequency by (no. of methylated reads / total no. of reads)
df$df.freq <- df$Num.methylated/df$df.cov
# Remove unnessary columns
df <- select(df, Chr, Pos, Strand, df.cov, df.freq)

# Accumulate CpG sites into +'ve strand
df[df$Strand == "-","Pos"] <- df[df$Strand == "-","Pos"]-1

# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df <- data.table(df)
#str(df)
df <- df[,list(df.freq = mean(df.freq),
                df.cov = sum(df.cov)),
                list(Chr,Pos)]
df <- data.frame(df)

colnames(df) <- c("Chr", "Pos", "Methyl_freq", "Cov")
df$Pos <- format(df$Pos,scientific=FALSE)
write.table(df, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)
