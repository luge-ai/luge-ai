
#coding=utf8
from qianyan.dataset import load_dataset_qianyan
from qianyan.evaluate import evaluation_qianyan

import random
import json

# DuReader Robust load dataset
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_robust", splits=["train", "dev", "test"])
print(train_list[:10]) #print the 1-10 samples
predicts={}

for data in dev_list:
    context=data['context']
    answers=data['answers']
    sample_id=data['id']
    seed=random.randint(0,1)
    if seed==1:
        predict_answer=answers[0]
    else:
        start=0
        end=len(answers)
        predict_answer=context[start:end]
    # if isinstance(predict_answer, str):
    #     predict_answer=[predict_answer]
    predicts[sample_id]=predict_answer

print(predicts)
json.dump(predicts, open('preds.json','w'), indent=4, ensure_ascii=False)

print(evaluation_qianyan(task="mrc", dataset="dureader_robust", labels=dev_list, predicts=predicts))


