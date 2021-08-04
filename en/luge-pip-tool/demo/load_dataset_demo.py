#coding=utf8
from qianyan.dataset import load_dataset_qianyan

# DuReader Robust load dataset
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_robust", splits=["train", "dev", "test"])
print(train_list[:10]) #print the 1-10 samples

# DuReader Yes/No load dataset
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_yesno", splits=["train", "dev", "test"])
print(train_list[:10])




