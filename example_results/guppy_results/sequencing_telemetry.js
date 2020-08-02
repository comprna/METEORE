[
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 7.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 6.98106575012207,
                "sum": 13.9621315002441
            },
            "read_len_events_sum_temp": 270331,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 83000.0
                },
                {
                    "count": 1,
                    "length": 187000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 88.2276611328125,
                "sum": 176.455322265625
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 10.6572027206421,
                "sum": 21.3144054412842
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 2830.09252929688,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 177,
                "count": 1
            },
            {
                "channel": 443,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "14f632bc-84f7-417d-83cb-eab4b038dcb9",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 7.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 7.4096565246582,
                "sum": 14.8193130493164
            },
            "read_len_events_sum_temp": 255345,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 118000.0
                },
                {
                    "count": 1,
                    "length": 137000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 93.9056854248047,
                "sum": 187.811370849609
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.43424510955811,
                "sum": 18.8684902191162
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 6831.6650390625,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 175,
                "count": 1
            },
            {
                "channel": 430,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 2,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "158dd723-d5aa-4467-b61a-b28f63eb8ee4",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5,
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 5.5
                },
                {
                    "count": 2,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                }
            ],
            "qscore_sum_temp": {
                "count": 8,
                "mean": 7.12275457382202,
                "sum": 56.9820365905762
            },
            "read_len_events_sum_temp": 970227,
            "seq_len_bases_dist_temp": [
                {
                    "count": 8,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 8,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 76000.0
                },
                {
                    "count": 1,
                    "length": 79000.0
                },
                {
                    "count": 1,
                    "length": 99000.0
                },
                {
                    "count": 1,
                    "length": 120000.0
                },
                {
                    "count": 1,
                    "length": 127000.0
                },
                {
                    "count": 1,
                    "length": 142000.0
                },
                {
                    "count": 1,
                    "length": 160000.0
                },
                {
                    "count": 1,
                    "length": 162000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 8,
                "mean": 90.455192565918,
                "sum": 723.641540527344
            },
            "strand_sd_pa": {
                "count": 8,
                "mean": 9.84917831420898,
                "sum": 78.7934265136719
            }
        },
        "channel_count": 8,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 10230.5078125,
        "levels_sums": {
            "count": 8,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 8,
        "reads_per_channel_dist": [
            {
                "channel": 118,
                "count": 1
            },
            {
                "channel": 142,
                "count": 1
            },
            {
                "channel": 158,
                "count": 1
            },
            {
                "channel": 159,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 294,
                "count": 1
            },
            {
                "channel": 324,
                "count": 1
            },
            {
                "channel": 434,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 3,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "b7b50262-1d9c-45b5-865d-59911a58fade",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 7.0351448059082,
                "sum": 14.0702896118164
            },
            "read_len_events_sum_temp": 253193,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 88000.0
                },
                {
                    "count": 1,
                    "length": 164000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 98.0986785888672,
                "sum": 196.197357177734
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.1721830368042,
                "sum": 18.3443660736084
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 15836.013671875,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 262,
                "count": 1
            },
            {
                "channel": 381,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 5,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "4cef3bdd-78cc-40c6-a59b-aa1d66811d16",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6,
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 5.5
                },
                {
                    "count": 2,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                }
            ],
            "qscore_sum_temp": {
                "count": 8,
                "mean": 6.64908456802368,
                "sum": 53.1926765441895
            },
            "read_len_events_sum_temp": 796535,
            "seq_len_bases_dist_temp": [
                {
                    "count": 8,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 8,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 65000.0
                },
                {
                    "count": 1,
                    "length": 67000.0
                },
                {
                    "count": 1,
                    "length": 99000.0
                },
                {
                    "count": 2,
                    "length": 102000.0
                },
                {
                    "count": 1,
                    "length": 115000.0
                },
                {
                    "count": 1,
                    "length": 119000.0
                },
                {
                    "count": 1,
                    "length": 124000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 8,
                "mean": 91.1540374755859,
                "sum": 729.232299804688
            },
            "strand_sd_pa": {
                "count": 8,
                "mean": 9.34689140319824,
                "sum": 74.7751312255859
            }
        },
        "channel_count": 8,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 21173.298828125,
        "levels_sums": {
            "count": 8,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 8,
        "reads_per_channel_dist": [
            {
                "channel": 138,
                "count": 1
            },
            {
                "channel": 162,
                "count": 1
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 230,
                "count": 1
            },
            {
                "channel": 311,
                "count": 1
            },
            {
                "channel": 324,
                "count": 1
            },
            {
                "channel": 433,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 6,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "f779fb1a-c340-46f7-8a0b-ef340c63161c",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 7.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 6.6847505569458,
                "sum": 13.3695011138916
            },
            "read_len_events_sum_temp": 293658,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 114000.0
                },
                {
                    "count": 1,
                    "length": 179000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 92.8574371337891,
                "sum": 185.714874267578
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.87101554870605,
                "sum": 19.7420310974121
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 22772.53515625,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 193,
                "count": 1
            },
            {
                "channel": 294,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 7,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "c5d5da61-333f-40a1-a4ce-de28ec51f3fc",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 7.50562858581543,
                "sum": 15.0112571716309
            },
            "read_len_events_sum_temp": 150755,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 69000.0
                },
                {
                    "count": 1,
                    "length": 81000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 97.1377868652344,
                "sum": 194.275573730469
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.52159976959229,
                "sum": 19.0431995391846
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 27632.8671875,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 418,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 8,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "fef1e496-58d4-46e4-8036-a778d626b2ce",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 6.87521266937256,
                "sum": 13.7504253387451
            },
            "read_len_events_sum_temp": 229721,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 105000.0
                },
                {
                    "count": 1,
                    "length": 124000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 98.3607406616211,
                "sum": 196.721481323242
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 8.99747467041016,
                "sum": 17.9949493408203
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 30431.447265625,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 228,
                "count": 1
            },
            {
                "channel": 258,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 9,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "ca6fe8eb-241d-482f-9150-051afb97a9b5",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 10.1580390930176,
                "sum": 10.1580390930176
            },
            "read_len_events_sum_temp": 92493,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 92000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 85.7817459106445,
                "sum": 85.7817459106445
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.08482933044434,
                "sum": 9.08482933044434
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 37335.375,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 118,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 11,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "a851968e-be3e-4986-b2a3-14efd2a5aec9",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 9.06728839874268,
                "sum": 9.06728839874268
            },
            "read_len_events_sum_temp": 141511,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 141000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 95.740119934082,
                "sum": 95.740119934082
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.73541259765625,
                "sum": 8.73541259765625
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 40488.859375,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 252,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 12,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "889b5a04-39ba-4503-9cc5-066660dc4257",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5,
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 6.0
                },
                {
                    "count": 2,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 7.0
                },
                {
                    "count": 2,
                    "mean_qscore": 7.5
                }
            ],
            "qscore_sum_temp": {
                "count": 9,
                "mean": 6.98359298706055,
                "sum": 62.8523368835449
            },
            "read_len_events_sum_temp": 1054510,
            "seq_len_bases_dist_temp": [
                {
                    "count": 9,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 9,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 82000.0
                },
                {
                    "count": 1,
                    "length": 102000.0
                },
                {
                    "count": 2,
                    "length": 114000.0
                },
                {
                    "count": 1,
                    "length": 115000.0
                },
                {
                    "count": 1,
                    "length": 124000.0
                },
                {
                    "count": 1,
                    "length": 131000.0
                },
                {
                    "count": 1,
                    "length": 134000.0
                },
                {
                    "count": 1,
                    "length": 135000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 9,
                "mean": 97.6425018310547,
                "sum": 878.782531738281
            },
            "strand_sd_pa": {
                "count": 9,
                "mean": 9.68660163879395,
                "sum": 87.1794128417969
            }
        },
        "channel_count": 9,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 46465.65234375,
        "levels_sums": {
            "count": 9,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 9,
        "reads_per_channel_dist": [
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 279,
                "count": 1
            },
            {
                "channel": 298,
                "count": 1
            },
            {
                "channel": 330,
                "count": 1
            },
            {
                "channel": 354,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 409,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            },
            {
                "channel": 431,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 13,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "757f6b8d-17d0-4f92-8391-61ea21a23529",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 5.88909673690796,
                "sum": 5.88909673690796
            },
            "read_len_events_sum_temp": 97152,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 97000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 89.6253280639648,
                "sum": 89.6253280639648
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.03657913208008,
                "sum": 8.03657913208008
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 47524.9921875,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 313,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 14,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "ea980fc5-b380-4c6e-8c80-c9e37cbd220d",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 6.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 6.13028621673584,
                "sum": 12.2605724334717
            },
            "read_len_events_sum_temp": 172015,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 77000.0
                },
                {
                    "count": 1,
                    "length": 94000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 85.5196838378906,
                "sum": 171.039367675781
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 9.25953674316406,
                "sum": 18.5190734863281
            }
        },
        "channel_count": 2,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 53696.890625,
        "levels_sums": {
            "count": 2,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 139,
                "count": 1
            },
            {
                "channel": 436,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 15,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "c0934185-428a-485d-ad52-400a21e29db2",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 5.19952917098999,
                "sum": 5.19952917098999
            },
            "read_len_events_sum_temp": 111111,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 111000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 108.668533325195,
                "sum": 108.668533325195
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.6572027206421,
                "sum": 10.6572027206421
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 56642.015625,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 114,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 16,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "72fc590d-2d79-485f-a060-95a1928c9bc5",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 5.35488748550415,
                "sum": 5.35488748550415
            },
            "read_len_events_sum_temp": 111013,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 111000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 107.445571899414,
                "sum": 107.445571899414
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.25953674316406,
                "sum": 9.25953674316406
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 63114.67578125,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 375,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 18,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "9d759edb-9091-459f-9908-185fae1f8b61",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 6.35081481933594,
                "sum": 6.35081481933594
            },
            "read_len_events_sum_temp": 68069,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 68000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 109.017944335938,
                "sum": 109.017944335938
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.08482933044434,
                "sum": 9.08482933044434
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 65519.3671875,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 375,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 19,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "95e1370c-12b0-4ee3-8bc2-0dd8f0b0cfae",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 6.84487199783325,
                "sum": 6.84487199783325
            },
            "read_len_events_sum_temp": 96735,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 96000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 108.49382019043,
                "sum": 108.49382019043
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 10.482494354248,
                "sum": 10.482494354248
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 89356.203125,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 412,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 25,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "46876899-0e52-4d72-8933-40926e42d784",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.5
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 7.59841108322144,
                "sum": 7.59841108322144
            },
            "read_len_events_sum_temp": 67609,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 67000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 89.6253280639648,
                "sum": 89.6253280639648
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 9.60895347595215,
                "sum": 9.60895347595215
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 98829.828125,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 241,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 28,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "a04a9f06-c2ea-48d1-85c6-de52471d6159",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 6.16250228881836,
                "sum": 6.16250228881836
            },
            "read_len_events_sum_temp": 87688,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 87000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 112.686820983887,
                "sum": 112.686820983887
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.38599586486816,
                "sum": 8.38599586486816
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 102236.78125,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 269,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 29,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "08ee24c9-5b68-4e8c-837d-0c3d77c15ff1",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 7.10720062255859,
                "sum": 7.10720062255859
            },
            "read_len_events_sum_temp": 83716,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 83000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 98.8848648071289,
                "sum": 98.8848648071289
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.38599586486816,
                "sum": 8.38599586486816
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 110350.703125,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 88,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 31,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "6496bc4a-ff27-450a-9b3c-c2e3bb5a8dca",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 8.34036064147949,
                "sum": 8.34036064147949
            },
            "read_len_events_sum_temp": 123298,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 123000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 87.7035369873047,
                "sum": 87.7035369873047
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.91012096405029,
                "sum": 8.91012096405029
            }
        },
        "channel_count": 1,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 144635.796875,
        "levels_sums": {
            "count": 1,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 291,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 60,
        "segment_number": 41,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "7b2466f7-678a-4a07-a11c-ca4b0bd4e461",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "597872b5-6d17-499f-9912-a0d6b2b9a166",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 29,
                "pass": 21
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 5.0
                },
                {
                    "count": 7,
                    "mean_qscore": 5.5
                },
                {
                    "count": 12,
                    "mean_qscore": 6.0
                },
                {
                    "count": 7,
                    "mean_qscore": 6.5
                },
                {
                    "count": 7,
                    "mean_qscore": 7.0
                },
                {
                    "count": 6,
                    "mean_qscore": 7.5
                },
                {
                    "count": 3,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 2,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 50,
                "mean": 6.96687030792236,
                "sum": 348.343505859375
            },
            "read_len_events_sum_temp": 5526685,
            "seq_len_bases_dist_temp": [
                {
                    "count": 50,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 50,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 65000.0
                },
                {
                    "count": 2,
                    "length": 67000.0
                },
                {
                    "count": 1,
                    "length": 68000.0
                },
                {
                    "count": 1,
                    "length": 69000.0
                },
                {
                    "count": 1,
                    "length": 76000.0
                },
                {
                    "count": 1,
                    "length": 77000.0
                },
                {
                    "count": 1,
                    "length": 79000.0
                },
                {
                    "count": 1,
                    "length": 81000.0
                },
                {
                    "count": 1,
                    "length": 82000.0
                },
                {
                    "count": 2,
                    "length": 83000.0
                },
                {
                    "count": 1,
                    "length": 87000.0
                },
                {
                    "count": 1,
                    "length": 88000.0
                },
                {
                    "count": 1,
                    "length": 92000.0
                },
                {
                    "count": 1,
                    "length": 94000.0
                },
                {
                    "count": 1,
                    "length": 96000.0
                },
                {
                    "count": 1,
                    "length": 97000.0
                },
                {
                    "count": 2,
                    "length": 99000.0
                },
                {
                    "count": 3,
                    "length": 102000.0
                },
                {
                    "count": 1,
                    "length": 105000.0
                },
                {
                    "count": 2,
                    "length": 111000.0
                },
                {
                    "count": 3,
                    "length": 114000.0
                },
                {
                    "count": 2,
                    "length": 115000.0
                },
                {
                    "count": 1,
                    "length": 118000.0
                },
                {
                    "count": 1,
                    "length": 119000.0
                },
                {
                    "count": 1,
                    "length": 120000.0
                },
                {
                    "count": 1,
                    "length": 123000.0
                },
                {
                    "count": 3,
                    "length": 124000.0
                },
                {
                    "count": 1,
                    "length": 127000.0
                },
                {
                    "count": 1,
                    "length": 131000.0
                },
                {
                    "count": 1,
                    "length": 134000.0
                },
                {
                    "count": 1,
                    "length": 135000.0
                },
                {
                    "count": 1,
                    "length": 137000.0
                },
                {
                    "count": 1,
                    "length": 141000.0
                },
                {
                    "count": 1,
                    "length": 142000.0
                },
                {
                    "count": 1,
                    "length": 160000.0
                },
                {
                    "count": 1,
                    "length": 162000.0
                },
                {
                    "count": 1,
                    "length": 164000.0
                },
                {
                    "count": 1,
                    "length": 179000.0
                },
                {
                    "count": 1,
                    "length": 187000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 50,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 50,
                "mean": 94.6709060668945,
                "sum": 4733.54541015625
            },
            "strand_sd_pa": {
                "count": 50,
                "mean": 9.50412940979004,
                "sum": 475.206451416016
            }
        },
        "channel_count": 46,
        "context_tags": {
            "experiment_kit": "genomic_dna",
            "filename": "kelvin_20160617_fn_mn17519_sequencing_run_sample_id_74930",
            "sample_frequency": "4000",
            "user_filename_input": "sample_id"
        },
        "latest_run_time": 144635.796875,
        "levels_sums": {
            "count": 50,
            "mean": 0.0,
            "open_pore_level_sum": 0.0
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "10",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_modbases_dam-dcm-cpg_hac.jsn",
            "nested_output_folder": "0",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.436400",
            "qscore_scale": "0.840900",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 50,
        "reads_per_channel_dist": [
            {
                "channel": 88,
                "count": 1
            },
            {
                "channel": 114,
                "count": 1
            },
            {
                "channel": 118,
                "count": 2
            },
            {
                "channel": 138,
                "count": 1
            },
            {
                "channel": 139,
                "count": 1
            },
            {
                "channel": 142,
                "count": 1
            },
            {
                "channel": 158,
                "count": 1
            },
            {
                "channel": 159,
                "count": 1
            },
            {
                "channel": 162,
                "count": 1
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 175,
                "count": 1
            },
            {
                "channel": 177,
                "count": 1
            },
            {
                "channel": 193,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 217,
                "count": 1
            },
            {
                "channel": 224,
                "count": 1
            },
            {
                "channel": 228,
                "count": 1
            },
            {
                "channel": 230,
                "count": 1
            },
            {
                "channel": 241,
                "count": 1
            },
            {
                "channel": 252,
                "count": 1
            },
            {
                "channel": 258,
                "count": 1
            },
            {
                "channel": 262,
                "count": 1
            },
            {
                "channel": 269,
                "count": 1
            },
            {
                "channel": 270,
                "count": 1
            },
            {
                "channel": 279,
                "count": 1
            },
            {
                "channel": 291,
                "count": 1
            },
            {
                "channel": 294,
                "count": 2
            },
            {
                "channel": 298,
                "count": 1
            },
            {
                "channel": 311,
                "count": 1
            },
            {
                "channel": 313,
                "count": 1
            },
            {
                "channel": 324,
                "count": 2
            },
            {
                "channel": 330,
                "count": 1
            },
            {
                "channel": 354,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 375,
                "count": 2
            },
            {
                "channel": 381,
                "count": 1
            },
            {
                "channel": 409,
                "count": 1
            },
            {
                "channel": 412,
                "count": 1
            },
            {
                "channel": 418,
                "count": 1
            },
            {
                "channel": 422,
                "count": 1
            },
            {
                "channel": 430,
                "count": 1
            },
            {
                "channel": 431,
                "count": 1
            },
            {
                "channel": 433,
                "count": 1
            },
            {
                "channel": 434,
                "count": 1
            },
            {
                "channel": 436,
                "count": 1
            },
            {
                "channel": 443,
                "count": 1
            }
        ],
        "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
        "segment_duration": 2460,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "3.6.0+98ff765"
        },
        "tracking_id": {
            "asic_id": "153816617",
            "asic_id_17": "69161",
            "asic_id_eeprom": "1867072",
            "asic_temp": "31.0771847",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "1",
            "device_id": "MN17519",
            "exp_script_hash": "a4e44ab9a2f835443be38062fe79e547271013be",
            "exp_script_name": "NC_48Hr_Sequencing_Run_FLO_MIN104.py",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "1466170880",
            "flow_cell_id": "",
            "heatsink_temp": "34.0273438",
            "hostname": "kelvin",
            "installation_type": "map",
            "msg_id": "a2470ef0-d536-4764-9621-85786ba826b9",
            "operating_system": "Windows 6.1",
            "protocol_run_id": "db0dbed2-2a48-4be5-b5bd-26c042ab3c74",
            "protocols_version_name": "0.51.3.40",
            "run_id": "87b136ffc8ea5a243bdcff637a644011b53b6120",
            "time_stamp": "2020-08-01T18:21:10Z",
            "version": "0.51.3.40 b201605171140",
            "version_name": "0.51.3.40 b201605171140"
        }
    }
]