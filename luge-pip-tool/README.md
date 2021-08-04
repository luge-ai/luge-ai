# Introduction

[Qianyan](https://www.luge.ai/) is a collection of datasets from various NLP tasks such as machine reading comprehension, dialogue, sentiment analysis, etc. In this repository, we present a python package named `qianyan` to help developers start using the Qianyan datasets quickly. The functionality of this package includes

* Automatic dataset downloading
* Loading the dataset with only one line of python code.
* Evaluating model predictions for each dataset.   



# Installation

### Dependency

* python>=3.6

* paddlepaddle>=2.1.0

* paddlenlp >=2.0.4

For the installation of [paddlepaddle](https://www.paddlepaddle.org.cn/) and [paddlenlp](https://github.com/PaddlePaddle/PaddleNLP), plesae refer to their official websites.

### Install with pip

```
pip install qianyan -i https://pypi.python.org/pypi
```


# Usage
### Dataset loading

The dataset `dureader_robust ` will be automatically downloaded (only for the first time) and cached. The samples from differen splits of the dataset will be loaded into separate python list (i..e `train_list`, `dev_list` and `test_list`, respectively). 

Please run the following code to load the dataset:

```python
from qianyan.dataset import load_dataset_qianyan
train_list, dev_list, test_list=load_dataset_qianyan(task="mrc", dataset="dureader_robust", splits=["train", "dev", "test"])    
```


You can run the following demo code to download the dataset:

```python
python demo/load_dataset_demo.py
```

**NOTE**: The following table shows the available tasks and datasets in the current version of package:

| Task | Dataset         | Splits                   |
| ---- | --------------- | ------------------------ |
| mrc  | dureader_robust | ["train", "dev", "test"] |
| mrc  | dureader_yesno  | ["train", "dev", "test"] |



### Result evaluation

The following code shows how to evaluate the result of the model using this package:

```python
from qianyan.evaluate import evaluation_qianyan
evaluation_qianyan(task="mrc", dataset="dureader_robust", labels=dev_list, predicts=model_preds)
```

The `labels` refers to the loaded dataset (i.e. the python list above), which contains the reference labels. The `predicts` is a dictionary contatining the model prediction. The key of the dictionary is sample_id and the value is predicted answer. The format is:

```python
{
'94cedddea18d080ae592f038dddc3411': 'answer1',
'2b33ce81273afe4dfc58ef92bed21537': 'answer2'，
'0efaf1900cb4980ee494a802c89c365f': 'answer3'
...
}
```

The demo code for evaluation can be run by:

```python
python demo/result_evaluation_demo.py demo/preds.json
```

The evaluation result is shown below:

```
{"f1_score": 51.78251006699673, "em_score": 49.32956951305575, "total_count:": 1417, "skip_count": 0}
```

**NOTE**: most testsets in qianyan do not include reference label. One can submit the results to the [official leaderboard](https://www.luge.ai/) for online evalution.





