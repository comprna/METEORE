#!/usr/bin/env Rscript

# Author: Zaka Yuen, JCSMR, ANU
# Created on July 2020
# Modified on March 2021

# This script is to:
# -take the default aggregated modified base output (bedMethyl format) after running Megalodon for modified base detection
# -generate 2 outputs:
#   -Retain information form both strnds (chr, start, end, cov, methylation ,strand)
#   -Combine information from both both strands (chr, start, end, cov, methylation)


library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

df <- read.table(args[1], header = FALSE, sep = "\t", stringsAsFactors = TRUE)
df <- df %>% select(1, 3, 6, 11, 10)
colnames(df) <- c("Chr", "Pos_end", "Strand", "Methylation", "Coverage")

######################## Retain methylation on both strands for a CpG site ###########################
df_1 <- df
df_1$Pos_start <- df_1$Pos_end-1
df_1 <- select(df_1, Chr, Pos_start, Pos_end, Coverage, Methylation, Strand)
df_1$Pos_start <- format(df_1$Pos_start, scientific = FALSE)
df_1$Pos_end <- format(df_1$Pos_end, scientific = FALSE)
write.table(df_1, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)

########################## Combine methylation from both strands for a CpG site ########################
df_2 <- df
# Accumulate CpG sites into +'ve strand
df_2[df_2$Strand == "-","Pos_end"] <- df_2[df_2$Strand == "-","Pos_end"]-1
# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df_2 <- data.table(df_2)
df_2 <- df_2[,list(Methylation = mean(Methylation), 
                   Coverage = sum(Coverage)),
             list(Chr, Pos_end)]
df_2 <- data.frame(df_2)
df_2$Pos_start <- df_2$Pos_end-1
df_2 <- select(df_2, Chr, Pos_start, Pos_end,  Coverage, Methylation)
df_2$Pos_start <- format(df_2$Pos_start, scientific = FALSE)
df_2$Pos_end <- format(df_2$Pos_end, scientific = FALSE)
write.table(df_2, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)