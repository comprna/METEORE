#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May 31 03:12:47 2020

@author: Zaka Yuen (JCSMR)

Go to the directory containing the fast5 file then
Run this script to fix the median_before error in the fast5 files.
"""

import os
import h5py

path = os.getcwd() 

for filename in os.listdir(path):
    if filename.endswith(".fast5"): 
         # print(os.path.join(directory, filename))
         #with h5py.File('/home/admin/Analysis/simpson2017/fast5/test3/bad_cp.fast5', 'r+') as handle:
         with h5py.File(filename, 'r+') as handle:
             top_groups = handle.keys()
             if 'Raw' in top_groups:
                reads = handle['Raw/Reads'].keys()
                for read in reads:
                    read_group_name = 'Raw/Reads/{}'.format(read)
                    print(read_group_name)
                    read_group = handle[read_group_name]
                    k = list(read_group.attrs.keys())
                    #print(k)
                    print('Original Duration value: ', read_group.attrs['duration'])
                    #duration_value = read_group.attrs['duration']
                    
                    signal_name = 'Raw/Reads/{}/Signal'.format(read)
                    print(signal_name)
                    signal= handle[signal_name]
                    print(signal)
                    print('Shape of dataset: \n', signal.shape[0])
                   #signal_value = signal.shape[0]
                    if  read_group.attrs['duration'] == signal.shape[0]:
                        print('duration is the same as signal data. No action needed.')
                    else:
                        print('duration is not same as signal data. Update duration value')
                        signal_value = signal.shape[0]
                        read_group.attrs['duration'] = signal_value
                        print('New duration value: ', read_group.attrs['duration'])
                        
                        
                    #v = list(read_attrs.values())
                    if 'median_before' not in read_group.attrs:
                        print('No median_before attribute in fast5. Make one')
                        read_group.attrs['median_before']=0
