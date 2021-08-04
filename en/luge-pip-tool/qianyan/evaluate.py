#coding=utf8

from .evaluate_dureader_robust import dureader_robust_evaluate
from .evaluate_dureader_yesno import dureader_yesno_evaluate


evaluation_dict={
    'mrc':{
        'dureader_yesno':dureader_yesno_evaluate,
        'dureader_robust': dureader_robust_evaluate
    }
}

def evaluation_qianyan(task, dataset, labels, predicts, **params):
    # assert len(labels)==len(predicts), "labels and predictions should have the same length."
    assert task in evaluation_dict.keys(), "{} task not in qianyan dataset.".format(task)
    assert dataset in evaluation_dict[task], "{} dataset not in {} task.".format(dataset, task)
    metric=evaluation_dict[task][dataset]
    return metric(labels, predicts, **params)



