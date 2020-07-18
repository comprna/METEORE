# METEORE
MEthylation deTEction with nanopORE sequencing                                         :stars:

# Usage
To make the predictions from combination model (deepsignal and nanopolish) format the input file (TSV) as below:
```
ID	                                  Pos	 Strand	   Score
2f43696e-70f0-42dd-b23e-d9e0ea954d4f	2687804	   -	   29.64
7ee0a989-c750-4dde-9114-354b97996dae	3104781	   -	   -4.47
dc9dcb55-703c-4251-a916-4214abd67991	1173719	   +	    5.34
2bea7f2a-f76c-491a-b5ee-b22c6f4a8539	1864274	   -	    5.33

```
**Command to run**

```
python combination_model_prediction.py  -a [fullpath_of_deepsignal_input_file] -b [fullpath_of_nanopolish_input_file] -m [model to use] -o [output_path]

```
Example for the testcase file provided in the package: 

cd inside the directory downloaded package directory METEORE then run
```
python combination_model_prediction.py 	-a test_case/deepsignal_test.tsv -b test_case/nanopolish_test.tsv -m deepsignal_nanopolish -o [output_path] 

```

**Output**

The ouput after running combination_model_prediction.py script will contain predictions for the reads common to both deepsignal and nanopolish method. The
format is as below:
```
ID	                                  Pos	    Prediction  Prob_methylation
2f43696e-70f0-42dd-b23e-d9e0ea954d4f	2687804	   	  0      0.02
dc9dcb55-703c-4251-a916-4214abd67991	1173719	   	  1      0.90
2bea7f2a-f76c-491a-b5ee-b22c6f4a8539	1864274	  	  0      0.45

```

# Methylation detection workflow examples


## Nanopolish (snakemake pipeline)
The first step is to create the environment from the nanopolish.yml file:
```
conda env create -f nanopolish.yml
```

Then activate the Conda environment:
```
conda activate nanopolish_cpg_snakemake
```

A Snakefile named `Nanopolish` contains all rules in the Snakemake workflow. Run the snakemake:
```
snakemake -s Nanopolish nanopolish_results/example_nanopolish-freq-perCG.tsv
```
This will produce the `nanopolish_results` output directory containing all output files. `example_nanopolish-log.tsv` is the raw output after running `nanopolish call-methylation`. `example_nanopolish-log-perCG.tsv` contains per-read per-site data, which splits up the CpG group containing multiple nearby sites into its constituent CpG sites. `example_nanopolish-freq-perCG.tsv` stores the per-site including the position of the CpG site on the reference genome, methylation frequency and coverage.

## DeepSignal (snakemake pipeline)

Please download DeepSignal's trained model `model.CpG.R9.4_1D.human_hx1.bn17.sn360.v0.1.7+.tar.gz` [here](https://drive.google.com/drive/folders/1zkK8Q1gyfviWWnXUBMcIwEDw3SocJg7P)

A Snakefile named `Deepsignal` contains all rules in the Snakemake workflow. Run the snakemake:
```
snakemake -s Deepsignal deepsignal_results/example_deepsignal-freq-perCG-comb.tsv
```

## Guppy

Guppy basecaller is available to Oxford Nanopore Technologies' customers via the community site. For download and installation instructions, please check out [here](https://community.nanoporetech.com/downloads)

Once you have installed Guppy, you can perform modified basecalling from the signal data using the `dna_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.cfg` guppy config.
```
<path_to_ont-guppy-cpu/bin/guppy_basecaller --config dna_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.cfg --fast5_out --input_path data/example/ --save_path guppy_results/example_guppyHacModbase/ --cpu_threads_per_caller 10
```
