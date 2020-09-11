&nbsp;
## 关系抽取
### 1. DuIE
-  <strong> 数据集简介： </strong>

    DuIE是由百度构建的目前业界规模最大的中文关系抽取数据集，其任务目标是给定关系类型集合，从自然语言文本中抽取出符合schema约束的SPO三元组知识，其中包含5种复杂关系类型。
-  <strong> 数据集详情：</strong>

    | 名称       | 规模  |  文本来源  | 评测  |下载  |论文  |
    | :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
    | DuIE   | 48种关系类型、21万句子，40wSPO实例 |   百度百科+百度贴吧+通用网页   |[LIC2020](https://aistudio.baidu.com/aistudio/competition/detail/31)  |[链接](https://aistudio.baidu.com/aistudio/competition/detail/31) |[链接](http://tcci.ccf.org.cn/conference/2019/papers/EV10.pdf)


 - <strong>基于该数据集发表的相关论文：</strong>

    - Shuangjie Li, Wei He, Yabing Shi, Wenbin Jiang, Haijin Liang, Ye Jiang, Yang Zhang, Yajuan Lyu, Yong Zhu. DuIE: A Large-Scale Chinese Dataset for Information Extraction[C]//CCF International Conference on Natural Language Processing and Chinese Computing. Springer, Cham, 2019: 791-800.


### 2. ACE 2005 Multilingual Training Corpus
- <strong>数据集简介： </strong>

    ACE 2005 Multilingual Training Corpus包含完整的英文、阿拉伯文和中文训练数据，用于2005年自动内容提取(ACE)技术评估。其中，中文语料库提供了丰富的标注信息，包含了6种关系类型，18种子关系类型，633篇文章，主要目标是实体识别及句子中的实体间的关系分类任务。
-  <strong> 数据集详情：</strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| ACE 2005 Multilingual Training Corpus  | 新闻+博客 |   6种关系类型，18种子关系类型，633篇文章   |[ACE 2005](https://catalog.ldc.upenn.edu/LDC2006T06)   |[链接](https://catalog.ldc.upenn.edu/LDC2006T06) | [链接](https://pdfs.semanticscholar.org/3a9b/136ca1ab91592df36f148ef16095f74d009e.pdf)|


### 3. TAC KBP Chinese Regular Slot Filling
- <strong>数据集简介： </strong>

    2009年起，ACE并入TAC (Text Analysis Conference)会议，其中关系抽取任务并入到 KBP（knowledgeBase Population）领域的槽填充（Slot Filling）。其目标是给定命名实体及预定义的属性集合，从给定语料中抽取填充相应属性值信息。

-  <strong> 数据集详情：</strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
|TAC KBP Chinese Regular Slot Filling  | 论坛 & 新闻网页 |   2个实体类别（PER的25中属性和ORG的16中属性）  |[TAC2019](https://catalog.ldc.upenn.edu/LDC2019T08) |[链接](https://www.ldc.upenn.edu/language-resources/data/obtaining) | - |



### 4. Chinese-Literature-NER-RE-Dataset
- <strong>数据集简介：</strong>

    Chinese-Literature-NER-RE-Dataset是由北大构建的，基于中文文学作品文本的命名实体识别和关系提取数据集。

- <strong>数据集详情： </strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| Chinese-Literature-NER-RE-Dataset  | 通用网页 |   7实体类型，9关系类型，726文章，2.9万句子   | N/A   |[链接](https://github.com/lancopku/Chinese-Literature-NER-RE-Dataset) |[链接](https://arxiv.org/pdf/1711.07010.pdf)|


 - <strong>基于该数据集发表的相关论文：</strong>
 
    - Jingjing Xu, Ji Wen, Xu Sun, Qi Su. A discourse-level named entity recognition and relation extraction dataset for chinese literature text[J]. Computation and Language:1711.07010, 2017.

[回到首页](/dataset.md)
