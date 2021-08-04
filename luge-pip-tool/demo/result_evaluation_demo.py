#coding=utf8
import sys
import json
from qianyan.dataset import load_dataset_qianyan
from qianyan.evaluate import evaluation_qianyan

# Dureader Robust load dataset
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_robust", splits=["train", "dev", "test"])
dev_prediction = json.load(open(sys.argv[1], 'r'))

# Dureader Robust evaluation
print(evaluation_qianyan(task="mrc", dataset="dureader_robust", labels=dev_list, predicts=dev_prediction))



    

