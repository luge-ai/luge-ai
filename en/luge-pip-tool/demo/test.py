#coding=utf8
from qianyan.dataset import load_dataset_qianyan
from qianyan.evaluate import evaluation_qianyan

# Dureader Robust load dataset
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_robust", splits=["train", "dev", "test"])

# Dureader Robust evaluation
robust_preds={}
for item in train_list:
    robust_preds[item['id']]=item['answers'][0]
print(evaluation_qianyan(task="mrc", dataset="dureader_robust", labels=train_list, predicts=robust_preds))


# Dureader yes/no load dataset
train_list, dev_list, test_list=load_dataset_qianyan("mrc", "dureader_yesno", splits=["train", "dev", "test"])
print(dev_list[:10])

# Dureader yes/no evaluation
a=[{'id':1, 'labels':0}, {'id':2, 'labels':1}, {'id':3, 'labels':2}]
b={1:1, 2:0, 3:2}
print(evaluation_qianyan(task="mrc", dataset="dureader_yesno", labels=a, predicts=b))



