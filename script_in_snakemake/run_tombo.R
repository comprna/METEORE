#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on May 2020
# Modified on March 2021

# This script is to:
# -combine methylation freq and coverage outputs from Tombo into one dataframe
# -generate 2 outputs:
#   -Retain information from both strands (chr, start, end, cov, methylation, strand)
#   -Combine information from both strands (chr, start, end, cov, methylation)

library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

tb.freq <- read.table(args[1], header = TRUE, sep = "\t", stringsAsFactors = TRUE)
tb.cov <- read.table(args[2], header = TRUE, sep = "\t", stringsAsFactors = TRUE)
colnames(tb.freq) <- c("Chr", "Pos_end", "Methylation", "Strand")
colnames(tb.cov) <- c("Chr", "Pos_end", "Coverage", "Strand")
df <- inner_join(tb.cov, tb.freq, by = c("Chr", "Pos_end", "Strand"))
######################################### Retain methylation on both strands for a CpG site ####################################
df_1 <- df
df_1$Pos_start <- df_1$Pos_end-1
df_1 <- select(df_1, Chr, Pos_start, Pos_end, Coverage, Methylation, Strand)
df_1$Pos_start <- format(df_1$Pos_start, scientific = FALSE)
df_1$Pos_end <- format(df_1$Pos_end, scientific = FALSE)
write.table(df_1, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)

##################################### Combine methylation from both strands for a CpG site ####################################
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
write.table(df_2, file=args[4],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)