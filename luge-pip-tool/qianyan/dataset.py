#coding=utf8
from paddlenlp.datasets import load_dataset
#should be in the config file
dataset_map={
        'mrc': {"chn": "chnsenticorp",
                "dureader_yesno":"dureader_yesno",
                "dureader_robust": "dureader_robust"}
        }
def load_dataset_qianyan(task, dataset, splits):
    assert task in dataset_map.keys(), "{} not in qianyan task".format(task)
    assert dataset in dataset_map[task], "{} dataset not in {} task".format(dataset, task)
    map_dataset=dataset_map[task][dataset]
    print(map_dataset)
    res = load_dataset(map_dataset, splits=splits)
    return res

if __name__ == '__main__':
    res=load_dataset_qianyan("mrc", "chn")
    print(res[0][0])

