#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020
# Modified on Mar 2021

# This script is to:
#   -convert the output of the guppy-gcf52ref calling pipeline which is a log-likelihood ratio into methylation freq
#   -where a positive log-likelihood ratio indicates evidence for methylation
# -generate 2 outputs:
#   -Retain information form both strnds (chr, start, end, cov, methylation ,strand)
#   -Combine information from both both strands (chr, start, end, cov, methylation)
# Please visit gcf52ref: https://github.com/kpalin/gcf52ref for more information

library(data.table)
library(plyr)
library(dplyr)


args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE, sep = "\t", stringsAsFactors = TRUE)
colnames(df) <- c("Chr", "Strand","start", "Pos_end", "read_name", "Log.like.ratio",
                  "log_like_methylated", "log_like_unmethylated", "df.cov", "num_motifs", "sequence")
df <- select(df, Chr, Pos_end, Strand, Log.like.ratio)
df[df$Strand == "-", "Pos_end"] <- df[df$Strand == "-", "Pos_end"]+1 # Correct the coordinates

######################### Retain methylation on both strands for a CpG site ###########################
# count no. of methylated CpG and unmethylated CpG using plyr package
df_m <- plyr::count(df[df$Log.like.ratio > 0, ], c("Chr", "Pos_end","Strand"))
df_unm <- plyr::count(df[df$Log.like.ratio < 0, ], c("Chr", "Pos_end","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"
df_1 <- full_join(df_m, df_unm, by = c("Chr", "Pos_end", "Strand"))
# Replace NA with 0
df_1[is.na(df_1)] <- 0
# Create a new column that gives a total no. of reads (coverage)
df_1$df.cov <- df_1$Num.methylated + df_1$Num.unmethylated
# Get the methylation frequency by (no. of methylated reads / total no. of reads)
df_1$df.freq <- df_1$Num.methylated/df_1$df.cov

df_1 <- select(df_1, Chr, Pos_end, df.cov, df.freq, Strand)
df_1$Pos_start <- df_1$Pos_end-1
df_1 <- select(df_1, Chr, Pos_start, Pos_end, df.cov, df.freq, Strand)
colnames(df_1) <- c("Chr", "Pos_start", "Pos_end", "Coverage", "Methylation", "Strand")
df_1$Pos_start <- format(df_1$Pos_start, scientific = FALSE)
df_1$Pos_end <- format(df_1$Pos_end, scientific = FALSE)
write.table(df_1, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)

########################## Combine methylation from both strands for a CpG site ########################
df_2 <- df
# Accumulate CpG sites into +'ve strand
df_2[df_2$Strand == "-","Pos_end"] <- df_2[df_2$Strand == "-","Pos_end"]-1

df_m <- plyr::count(df_2[df_2$Log.like.ratio > 0, ], c("Chr", "Pos_end","Strand"))
df_unm <- plyr::count(df_2[df_2$Log.like.ratio < 0, ], c("Chr", "Pos_end","Strand"))
colnames(df_m)[4] <- "Num.methylated"
colnames(df_unm)[4] <- "Num.unmethylated"

df_2 <- full_join(df_m, df_unm, by = c("Chr", "Pos_end", "Strand"))
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
             list(Chr, Pos_end)]
df_2 <- data.frame(df_2)

df_2$Pos_start <- df_2$Pos-1
df_2 <- select(df_2, Chr, Pos_start, Pos_end, Coverage, Methylation)
colnames(df_2) <- c("Chr", "Pos_start", "Pos_end", "Coverage", "Methylation")
df_2$Pos_start <- format(df_2$Pos_start, scientific = FALSE)
df_2$Pos_end <- format(df_2$Pos_end, scientific = FALSE)
write.table(df_2, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)