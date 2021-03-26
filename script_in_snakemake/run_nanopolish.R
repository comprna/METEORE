#!/usr/bin/env Rscript

# Author: Zaka Yuen, JCSMR, ANU
# Created on May 2020
# Modified on  Mar 2021

# This script is to:
# -calculate per-site methylation frequency (no. of methylated reads/total reads) from the log-likelihood ratio
# -use the cutoff of 2.0 to remove non-significant methylation call
# 	-log-likelihood ratio >=2.0, considered as methylated
# 	-log-likelihood ratio <=-2.0, considered as unmethylated
# -generate 2 outputs:
#   -Retain information from both strands (chr, start, end, cov, methylation, strand)
#   -Combine information from both strands (chr, start, end, cov, methylation)

library(data.table)
library(dplyr)
library(plyr)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = TRUE, sep = "\t", stringsAsFactors = TRUE)
df <- filter(df, Log.like.ratio >= 2.0 | Log.like.ratio <= -2.0)
# Fix positions on the -'ve strand
df[df$Strand == "-","Pos"] <- df[df$Strand == "-","Pos"]+1


######################### Retain methylation on both strands for a CpG site ###########################
# count no. of methylated CpG and unmethylated CpG using plyr package
df_m <- plyr::count(df[df$Log.like.ratio > 0, ], c("Chr", "Pos","Strand"))
df_unm <- plyr::count(df[df$Log.like.ratio < 0, ], c("Chr", "Pos","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"
df_1 <- full_join(df_m, df_unm, by = c("Chr", "Pos", "Strand"))
# Replace NA with 0
df_1[is.na(df_1)] <- 0
# Create a new column that gives a total no. of reads (coverage)
df_1$df.cov <- df_1$Num.methylated + df_1$Num.unmethylated
# Get the methylation frequency by (no. of methylated reads / total no. of reads)
df_1$df.freq <- df_1$Num.methylated/df_1$df.cov

str(df_1)
df_1 <- select(df_1, Chr, Pos, df.cov, df.freq, Strand)
df_1$Pos_start <- df_1$Pos-1
df_1 <- select(df_1, Chr, Pos_start, Pos, df.cov, df.freq, Strand)
colnames(df_1) <- c("Chr", "Pos_start", "Pos_end", "Coverage", "Methylation", "Strand")
df_1$Pos_start <- format(df_1$Pos_start, scientific = FALSE)
df_1$Pos_end <- format(df_1$Pos_end, scientific = FALSE)
write.table(df_1, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)

########################## Combine methylation from both strands for a CpG site ########################
df_2 <- df
# Accumulate CpG sites into +'ve strand
df_2[df_2$Strand == "-","Pos"] <- df_2[df_2$Strand == "-","Pos"]-1

df_m <- plyr::count(df_2[df_2$Log.like.ratio > 0, ], c("Chr", "Pos","Strand"))
df_unm <- plyr::count(df_2[df_2$Log.like.ratio < 0, ], c("Chr", "Pos","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"

df_2 <- full_join(df_m, df_unm, by = c("Chr", "Pos", "Strand"))
# Replace NA with 0
df_2[is.na(df_2)] <- 0
# Create a new column that gives a total no. of reads (coverage)
df_2$Coverage <- df_2$Num.methylated + df_2$Num.unmethylated
# Get the methylation frequency by (no. of methylated reads / total no. of reads)
df_2$Methylation <- df_2$Num.methylated/df_2$Coverage
# Remove unnessary columns
df_2 <- select(df_2, -Num.methylated, -Num.unmethylated)
  
# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df_2 <- data.table(df_2)
df_2 <- df_2[,list(Methylation = mean(Methylation),
                Coverage = sum(Coverage)),
                list(Chr, Pos)]
df_2 <- data.frame(df_2)

df_2$Pos_start <- df_2$Pos-1
df_2 <- select(df_2, Chr, Pos_start, Pos, Coverage, Methylation)
colnames(df_2) <- c("Chr", "Pos_start", "Pos_end", "Coverage", "Methylation")
df_2$Pos_start <- format(df_2$Pos_start, scientific = FALSE)
df_2$Pos_end <- format(df_2$Pos_end, scientific = FALSE)
write.table(df_2, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)
