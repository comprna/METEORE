#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on June 2020

# This script is to:
# -combine the CpG methylation calls from both strands (from two indiviual files) into a single strand for a CpG site (one file)
    
library(dplyr)
library(data.table)

args = commandArgs(trailingOnly=TRUE)

# test if there is at least one argument: if not, return an error
if (length(args)==0 | length(args)==1) {
  stop("At least two arguments must be supplied (2 input .bed files for +'ve and -'ve strand from DeepMod).n", call.=FALSE)
} else if (length(args)==2) {
  # default output file
  args[3] = "deepmod_freq-perCG.txt"
}

dm.plus <- read.table(args[1], header = FALSE)
#str(dm.plus)
dm.plus <- 
  dm.plus  %>% select(1, 3, 10, 12)
colnames(dm.plus) <- c("Chr", "Pos", "Cov", "Methyl.cov")
dm.plus$Freq <- dm.plus$Methyl.cov/dm.plus$Cov
dm.plus <- select(dm.plus, -Methyl.cov)

dm.min <- read.table(args[2], header = FALSE)
#str(dm.min)
dm.min <- 
  dm.min  %>% select(1, 3, 10, 12)
colnames(dm.min) <- c("Chr", "Pos","Cov", "Methyl.cov")
dm.min$Freq <- dm.min$Methyl.cov/dm.min$Cov
dm.min <- select(dm.min, -Methyl.cov)
dm.min$Pos <- dm.min$Pos-1


dm <- bind_rows(dm.plus, dm.min)
dm <- dm[order(dm$Pos),]

# Use data.table to compute the mean of duplicated position while keeping non-duplicated sites
dm <- data.table(dm)
#str(dm)
dm <- dm[,list(Methyl_freq=mean(Freq), 
               Cov=sum(Cov)),
               list(Chr,Pos)]

dm <- data.frame(dm)
write.table(dm, file=args[3],  quote = FALSE, sep = "\t", col.names = TRUE, row.names = FALSE)
