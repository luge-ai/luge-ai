#coding=utf8
from paddlenlp.metrics.squad import squad_evaluate, compute_prediction
from paddlenlp.datasets import load_dataset
def squad_evaluate_qianyan(task, dataset, examples, predictions):
    print(squad_evaluate(test_ds, test_ds))
train_ds, dev_ds, test_ds = load_dataset("chnsenticorp", splits=["train", "dev", "test"])
squad_evaluate_qianyan("","",test_ds, test_ds)

