![Analysis pipeline](https://github.com/comprna/METEORE/blob/master/figure/meteore_logo_white.png)
# METEORE: MEthylation deTEction with nanopORE sequencing                                         :stars:

**About METEORE**

METEORE provides snakemake pipelines for various tools to detect DNA methylation from Nanopore sequencing reads. Additionally, it provides 
a new predictive model that combines the outputs from two of the tools to produce a consensus prediction with higher accuracy than the individual tools.

----------------------------
# Table of Contents
----------------------------

   * [Pipeline](#pipeline)
   * [Installation](#installation)
   * [Tutorial on an example dataset](#tutorial-on-an-example-dataset)
      * [Nanopolish snakemake pipeline](#nanopolish-snakemake-pipeline)
      * [DeepSignal snakemake pipeline](#deepsignal-snakemake-pipeline)
      * [Tombo snakemake pipeline](#tombo-snakemake-pipeline)
      * [Guppy snakemake pipeline](#guppy-snakemake-pipeline)
   * [Combined model usage](#combined-model-usage)
      * [Input file](#input-file)
      * [Command](#command)
      * [Per site predictions](#per-site-predictions)


----------------------------
# Pipeline
----------------------------

![Analysis pipeline](https://github.com/comprna/METEORE/blob/master/figure/pipeline.png)
**Fig 1. Pipeline for CpG methylation detection form nanopore sequencing data**


----------------------------
# Installation
----------------------------
We recommand to install software dependencies via `Conda` on Linux. You can find Miniconda installation instructions for Linux [here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html).
Make sure you install the [Miniconda Python3 distribution](https://docs.conda.io/en/latest/miniconda.html#linux-installers).
```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
``` 
Accept the license terms during installation.

Once you have installed Conda, you can download the Snakemake pipelines and example datasets.
```
git clone https://github.com/comprna/METEORE.git
```
------------------------------------------
# Tutorial on an example dataset
------------------------------------------

We provide an example dataset `data/example` for you to try with. The example contains 50 single-read fast5 files from the positive control dataset for E.coli generated by Simpson et al. (2017).

You can run the pipeline with you own dataset by replacing `example` folder in the `data` directory with your folder containing the fast5 files. You will use the folder name to specify the input in the Snakemake pipeline. Simply replace *example* with your folder name in the command line below.  

## Nanopolish snakemake pipeline
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
This will produce the `nanopolish_results` output directory containing all output files. 
* `example_nanopolish-log.tsv` is the raw output after running `nanopolish call-methylation`. 
* `example_nanopolish-log-perCG.tsv` contains per-read per-site data, which splits up the CpG group containing multiple nearby sites into its constituent CpG sites. 
* `example_nanopolish-freq-perCG.tsv` stores the per-site data including the position of the CpG site on the reference genome, methylation frequency and coverage.

For your convenience, there is a rule in Snakemake to create the input file for making the predictions from the model:
```
snakemake -s Nanopolish nanopolish_results/example_nanopolish-score.tsv
```

## DeepSignal snakemake pipeline
The first step is to create the environment from the nanopolish.yml file:
```
conda env create -f deepsignal.yml
```

Then activate the Conda environment:
```
conda activate deepsignal_cpg_snakemake
```

Please download DeepSignal's trained model `model.CpG.R9.4_1D.human_hx1.bn17.sn360.v0.1.7+.tar.gz` [here](https://drive.google.com/drive/folders/1zkK8Q1gyfviWWnXUBMcIwEDw3SocJg7P). 
To extract a `model.CpG.R9.4_1D.human_hx1.bn17.sn360.v0.1.7+.tar.gz`to the `METEORE/data` directory:
```
tar xvzf model.CpG.R9.4_1D.human_hx1.bn17.sn360.v0.1.7+.tar.gz -C <path_to_METEORE/data_diectory>
```

A Snakefile named `Deepsignal` contains all rules in the Snakemake workflow. Run the snakemake:
```
snakemake -s Deepsignal deepsignal_results/example_deepsignal-freq-perCG-comb.tsv
```
This will produce the `deepsignal_results` output directory containing all output files. 
* `example_deepsignal-prob.tsv` contains the per-read results including the position of the CpG site, read ID, strand, methylated probability, unmethylated probability etc. 
* `example_deepsignal-freq-perCG.tsv` contains the per-site results using a Python script provided by `DeepSignal`. 
* `example_deepsignal-freq-perCG-comb.tsv` also contains the per-site results but we combine the methylation calls from both strands into a single strand. 

For your convenience, there is a rule in Snakemake to create the input file for making the predictions from the model:  
```
snakemake -s Deepsignal deepsignal_results/example_deepsignal-score.tsv
``` 

## Tombo snakemake pipeline

The first step is to create the environment from the nanopolish.yml file:
```
conda env create -f tombo.yml
```

Then activate the Conda environment:
```
conda activate tombo_cpg_snakemake
```

A Snakefile named `Tombo` contains all rules in the Snakemake workflow. Run the snakemake:
```
snakemake -s Tombo example_tombo-mods-freqNcov-perCG.tsv
```
`example_tombo-mods-freqNcov-perCG.tsv` contains the per-site results including the position of the CpG site, methylation frequency and coverage.

If you also want the per-read results from Tombo, you can run the following:
```
snakemake -s Tombo example_tombo_mods-scores-perRead.tsv
```
Note that this can only extract per-read data for a region of interest. You may need to go to `script/extract_tombo_per_read_results.py` to specify your region of interest (chromosome, start position and end position) in the script and rerun the results.

## Guppy Snakemake pipeline

You need to basecall with the standalone Guppy basecaller before running the Snakemake pipeline. The pipeline was only designed to process and analyse the Guppy's fast5 output using the open-source custom scripts available from https://github.com/kpalin/gcf52ref
Guppy basecaller is only available to Oxford Nanopore Technologies' customers via the community site. For download and installation instructions, please check their [website](https://community.nanoporetech.com/downloads)

Once you have installed Guppy, you can perform modified basecalling from the signal data using the `dna_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.cfg` guppy config.
```
./<path_to_ont-guppy-cpu>/bin/guppy_basecaller --config dna_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.cfg --fast5_out --input_path data/example/ --save_path guppy_results/ --cpu_threads_per_caller 10
```
Once you have done modified basecalling with Guppy, the output files will be saved to the `guppy_results` directory where you will find the logs, basecalled fastq file(s) and a folder named `workspace` which contains basecalled fast5 files with modified base information.


Before running the Snakmake pipeline, you need to prepare the following files:
* If you have more than 1 fastq files generated, please concatenate these files first
```
cat *.fastq > example.fq
```
* If only one fastq file, rename that file
```
mv [original_fastq_file_with_long_filename] example.fq
```
* Go to `guppy_results` directory and download the scripts that convert CpG methylation from fast5s to reference anchored calls
```
git clone https://github.com/kpalin/gcf52ref.git
```

Then you can create the environment from the `guppy.yml` file:
```
conda env create -f guppy.yml
```
Then activate the Conda environment:
```
conda activate guppy_cpg_snakemake
```
A Snakefile named Guppy contains all rules in the Snakemake workflow. Run the snakemake:
```
snakemake -s Guppy guppy_results/example_guppy-freq-perCG.tsv
```

## Megalodon

We did not develop a snakemake pipeline for Megalodon as it can be run with a single command. 

Please check out [Megalodon GitHub Page](https://github.com/nanoporetech/megalodon) for more details. Note that the new release of Megalodon requires Guppy basecaller to be installed to run Megalodon.
```
megalodon data/example/ --outputs mods --reference data/ecoli_k12_mg1655.fasta --mod-motif Z CG 0 --write-mods-text --processes 10 --guppy-server-path ./<path_to_ont-guppy-cpu>/bin/guppy_basecall_server --guppy-params "--num_callers 10" --guppy-timeout 240 --overwrite
```
This will produce the `megalodon_results` directory which contains logs, per-read modified base output `per_read_modified_base_calls.txt`, per-site modified base output `modified_bases.5mC.bed`.

 
You can obtain a methylation frequency file by running the script `script/run_megalodon.R` with Megalodon's per-site modified base output `modified_bases.5mC.bed`. This script combines the sites from both strands by averaging out methylation frequencies nad adding up the coverage.
```
Rscript script/run_megalodon.R megalodon_results/modified_bases.5mC.bed  megalodon_results/example_megalodon_freq-perCG.tsv
```

## DeepMod

We did not develop a snakemake pipeline for DeepMod as it can be run with a single command. 

Please check out [DeepMod GitHub Page](https://github.com/WGLab/DeepMod) for installation instructions and usage.

```
# Set the working directory where you install DeepMod
python bin/DeepMod.py detect --wrkBase <path_to_data_folder>/example/ --Ref <path_to_data_folder>/ecoli_k12_mg1655.fasta --outFolder <your_save_path>/deepmod_results --Base C --modfile train_mod/rnn_conmodC_P100wd21_f7ne1u0_4/mod_train_conmodC_P100wd21_f3ne1u0 --FileID example_deepmod --threads 10
```

Note that DeepMod does not produce per-read predictions, so we could not produce an output file in the same format as those described above (.tsv) to be later combined to build a consensus.

--------------------------------------
# Combined model usage
--------------------------------------

We have trained Random Forest models that combine the outputs from two of the methods above
to produce consensus predictions with improved accuracy. 

First of all, please make sure you install the required libraries in the conda env

```
pip install -r requirements.txt

```


## Input file
To make the predictions from combination model (e.g. deepsignal and nanopolish) the input (.tsv) file from each method must be formatted as below:
```
ID                                        Pos    Strand    Score
2f43696e-70f0-42dd-b23e-d9e0ea954d4f    2687804    -       29.64
7ee0a989-c750-4dde-9114-354b97996dae    3104781    -       -4.47
dc9dcb55-703c-4251-a916-4214abd67991    1173719    +        5.34
2bea7f2a-f76c-491a-b5ee-b22c6f4a8539    1864274    -        5.33

```
where the score is the significance score given by each method. In our snakemake pipelines, this score is generated as described above. Nanopolish 
and Guppy provide a log-likelihood ratio value per site and per read. Similarly, Tombo produces a significance value per site and per read. On the other hand, for DeepSignal we give the log-ratio of the probabilities for a site to be methylated over the probablity of being unmethylated for each read. Similarly, for Megalodon we give the difference of the log-probabilities to obtain a log-ratio. 

## Command

```
python combination_model_prediction.py  -i [path of tsv file containing methods name and path] -m [model_to_use (default or optimized)] -o [output_file]

```
Example for the testcase file provided in the package:

cd inside the directory downloaded package directory METEORE then run
```
python combination_model_prediction.py  -i samples.tsv -m optimized -o [output_file]

```
**Note**: The order of method name in the samples.tsv file should be same as the order of saved model name. For example the saved model name is *'rf_model_default_**deepsignal_nanopolish**.model'* so the order in the *samples.tsv* file is **deepsignal and then nanopolish** and not the other way round.

This command produces the a directory called `combined_model_results` containing the output file. New results from subsequent runs will be saved into the same output directory.


The ouput after running combination_model_prediction.py script will contain predictions for the reads common to both deepsignal and nanopolish method. The
format is as below:
```
ID                                        Pos       Prediction  Prob_methylation
2f43696e-70f0-42dd-b23e-d9e0ea954d4f    2687804           0      0.02
dc9dcb55-703c-4251-a916-4214abd67991    1173719           1      0.90
2bea7f2a-f76c-491a-b5ee-b22c6f4a8539    1864274           0      0.45

```
Note that the prediction (0 refers to unmethylated and 1 refers to methylated) is made by using a threshold of 0.5. That is, if the P(methylation) is <= 0.5, it is predicted as unmethylated (0), otherwise as methylated (1).


## Per-site predictions

We also provide a Python script to convert the per-site predictions for each individual read (methylated / unmethylated) into per-site predictions at genome level (% methylation) by summarising the predictions on individual reads from the model:

```
python prediction_to_mod_frequency.py combined_per_site_per_read_results combined_per_site_results
```
Where the file `combined_per_site_per_read_results` is the output file from the previous step, and `combined_per_site_results` is the new output with the percentage methylation per genomic position. 

Example output of this command:

## train your own model

We provide the script to train a combined model from the per-read and per-site output from any number of methods (from 2 to 5). For instance, the command to train a model with 5 methods would be:

```
python combination_model_train.py  -d [path of deepsignal file] -n [path of nanopolish file] -g [path of guppy file] -m [path of megalodon file] -t [path of tombo file] -c [number of methods to combine together for training (range from 2-5)] -o [output_path_to_save_model]
```

The command to train a model with Nanopolish and Megalodon would be:

```
python combination_model_train.py  -n [path of nanopolish file] -m [path of megalodon file] -c 2 -o [output_path_to_save_model]
```


