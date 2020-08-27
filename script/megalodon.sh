#!/bin/bash


printf "Filename: $1\n\n"

printf "************** Writing the methylation frequency output file from Megalodon's modified base file...**************\n"
Rscript script/run_megalodon.R megalodon_results/modified_bases.5mC.bed  megalodon_results/$1_megalodon-freq-perCG.tsv
TIME=$(date +"%Y-%m-%d %T")
printf "\n[$TIME] $1_megalodon-freq-perCG.tsv is created.\n\n"

printf "************** Writing the per-read prediction output that can be used in METEORE for downstream consensus prediction...**************\n"
Rscript script/format_megalodon.R megalodon_results/per_read_modified_base_calls.txt megalodon_results/$1_megalodon-perRead-score.tsv
TIME=$(date +"%Y-%m-%d %T")
printf "\n[$TIME] $1_megalodon-perRead-score.tsv is created.\n"

