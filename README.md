# METEORE
MEthylation deTEction with nanopORE sequencing

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
