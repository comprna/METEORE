#!/usr/bin/env Rscript

# Author: Zaka Yuen, JCSMR, ANU
# Created on July 2020

# This script is to:
# -take the default aggregated modified base output (bedMethyl format) after running Megalodon for modified base detection
# -combine the CpG methylation calls from both strands into a single strand for a CpG site

library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

# test if there is at least one argument: if not, return an error
if (length(args)==0) {
  stop("At least one argument must be supplied (input file).n", call.=FALSE)
} else if (length(args)==1) {
  # default output file
  args[2] = "megalodon_freq-perCG.tsv"
}

df <- read.table(args[1], header = FALSE, sep = "\t")
# Remove unnecessary columns
df <- df  %>% select(1, 3, 6, 11, 10)
colnames(df) <- c("Chr", "Pos", "Strand", "Methyl_freq", "Cov")
# Convert %methylation into frequency 
df[,"Methyl_freq"] <- df[,"Methyl_freq"]/100


# Accumulate CpG sites into the +'ve strand
df[df$Strand == "-","Pos"] <- df[df$Strand == "-","Pos"]-1

# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
df <- data.table(df)
#str(df)
df <- df[,list(Methyl_freq = mean(Methyl_freq), 
                Cov = sum(Cov)),
                list(Chr,Pos)]
df <- data.frame(df)
df$Pos <- format(df$Pos,scientific=FALSE)
write.table(df, file=args[2],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)
