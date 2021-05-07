&nbsp;
## 命名实体识别

### 1. 微软实体数据集
- **数据集简介：**

    MSRANER是由微软亚洲研究院标注的新闻领域的实体识别数据集，也是SIGNAN backoff 2006的实体识别任务的数据集之一。该数据集包含5 万多条中文实体识别标注数据，实体类别分为人物、地点、机构三类。
- **数据集详情：**

    | 名称      | 规模 | 创建日期 | 单位 | 论文 | 下载 | 评测 |
    | --------- | ---- |  --- | ---- | ---- | ---- | ---- |
    | MSRANER |  训练集46364个句子，验证集4365个句子  |   2006年   |微软亚洲研究院 |    [链接](https://www.aclweb.org/anthology/W06-0115.pdf)   |   [链接](https://github.com/InsaneLife/ChineseNLPCorpus/tree/master/NER/MSRA) | [链接](https://www.aclweb.org/anthology/W06-0115.pdf)|

- **基于该数据集发表的论文**：
    - Zhang, Yue , and  J. Yang . "Chinese NER Using Lattice LSTM." (2018).
    - Li, Xiaoya , et al. "Dice Loss for Data-imbalanced NLP Tasks." (2019).
    - Li, Xiaoya , et al. "A Unified MRC Framework for Named Entity Recognition." (2019).
    - Diao, Shizhe, et al. "ZEN: Pre-training Chinese Text Encoder Enhanced by N-gram Representations." arXiv preprint arXiv:1911.00720 (2019).
    - Yan, Hang , et al. "TENER: Adapting Transformer Encoder for Named Entity Recognition." (2019).


### 2. 微博实体数据集
- **数据集简介：**

    WeiboNER是根据新浪微博2013年11月至2014年12月间历史数据筛选过滤生成，包含1890条微博消息，基于[LDC2014的DEFT ERE的标注标准](https://tac.nist.gov/2016/KBP/guidelines/DEFT_ERE_Entities_IndividualGroup_Guidelines_V2.6.pdf)
    进行标注。该数据集实体类别分为人物，机构组织，地址和地缘政治实体4个类别，并且每个类别可细分为特指（NAM，如“张三”标签为“PER.NAM”）和泛指（NOM，如“男人”标签为“PER.NOM”）。

- **数据集详情：**

    | 名称      | 规模 | 创建日期| 作者 | 论文 | 下载 | 评测 |
    | --------- | ---- |  --- | ---- | ---- | ---- | ---- |
    | WeiboNER | 1890条微博消息 | 2015  |   Nanyun Peng | [original](https://www.aclweb.org/anthology/D15-1064.pdf)<br>[revised](https://arxiv.org/abs/1611.04234)    |     [链接](https://github.com/hltcoe/golden-horse)  |[链接](http://www.cs.jhu.edu/~npeng/papers/golden_horse_supplement.pdf) |
- **基于该数据集发表的论文**：
    - Peng, Nanyun, and Mark Dredze. "Named entity recognition for chinese social media with jointly trained embeddings." Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing. 2015.
    - He, Hangfeng, and Xu Sun. "F-score driven max margin neural network for named entity recognition in chinese social media." arXiv preprint arXiv:1611.04234 (2016).
    - Zhang, Yue , and  J. Yang . "Chinese NER Using Lattice LSTM." (2018).
    - Cao, Pengfei , et al. "Adversarial Transfer Learning for Chinese Named Entity Recognition with Self-Attention Mechanism." Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing 2018.
    - Yan, Hang , et al. "TENER: Adapting Transformer Encoder for  Named Entity Recognition." (2019).

### 3. 简历实体数据集
- **数据集简介：**

    Resume NER是根据新浪财经网关于上市公司的高级经理人的简历摘要数据，进行筛选过滤和人工标注生成的。该数据集包含1027份简历摘要，实体标注分为人名、国籍、籍贯、种族、专业、学位、机构、职称等8个类别。

- **数据集详情：**

    | 名称      | 规模 | 创建日期 | 作者 | 论文 | 下载 | 评测 |
    | --------- | ---- | --- | ---- | ---- | ---- | ---- |
    | Resume NER | 1027份简历  |  2018年 | Yue Zhang | [链接](https://arxiv.org/abs/1805.02023) | [链接](https://github.com/jiesutd/LatticeLSTM)  | N/A|

- **基于该数据集发表的论文**：
    - Zhang, Yue, and Jie Yang. "Chinese NER Using Lattice LSTM." Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). 2018.
    - Yan, Hang , et al. "TENER: Adapting Transformer Encoder for  Named Entity Recognition." (2019).

### 4. 细粒度实体数据集
- **数据集简介：**

    CLUENER2020是根据清华大学开源的文本分类数据集THUCNEWS，进行筛选过滤、实体标注生成的。该数据集包含组织、人名、地址、公司、政府、书籍、游戏、电影、职位、景点等10个实体类别，且实体类别分布较为均衡。
- **数据集详情：**

    | 名称      | 规模 | 创建日期 | 单位 | 论文 | 下载 | 评测 |
    | --------- | ---- | ---- | ---- | ---- | ---- | ---- |
    | CLUENER2020 | 训练集10748个句子，验证集1343个句子 | 2020年 | CLUEbenchmark  | [链接](https://arxiv.org/abs/2001.04351)  | [链接](https://www.cluebenchmarks.com/introduce.html)    |      [链接](https://github.com/CLUEbenchmark/CLUENER2020)|
    
    
    
[回到首页](/dataset.md)    
