&nbsp;
## 分词
### 1. SIGHAN 2005数据集
- **数据集简介：**

    SIGHAN 2005数据集国际中文自动分词评测（简称SIGHAN评测）整合多个机构的分词数据集构成。该数据集由中国微软研究所、北京大学、香港城市大学、台湾中央研究院联合发布，用以进行中文分词模型的训练与评测。其中 AS 和 CityU 为繁体中文数据集，PKU 和 MSR 为简体中文数据集。

- **数据集详情：**

    | 名称  | 规模      | 创建日期           | 单位           | 论文 | 下载                                                     | 评测                                                         |
    | ----- | -------------------- | ---- | -------------- | ---- | -------------------------------------------------------- | ------------------------------------------------------------ |
    | MSR   | 2368391词，4050469字 | 2005年 | 微软亚洲研究院 | [链接](https://www.aclweb.org/anthology/I05-3017.pdf)  | [SIGHAN2005](http://sighan.cs.uchicago.edu/bakeoff2005/) | [icwb2 result summary](http://sighan.cs.uchicago.edu/bakeoff2005/data/results.php.htm) |
    | PKU   | 1109947词，1826448字  | 2005年  | 北京大学       | [链接](https://www.aclweb.org/anthology/I05-3017.pdf)  | [SIGHAN2005](http://sighan.cs.uchicago.edu/bakeoff2005/) | [icwb2 result summary](http://sighan.cs.uchicago.edu/bakeoff2005/data/results.php.htm) |
    | AS    | 5449698词，8368050字  | 2005年  | 台湾中央研究院 | [链接](https://www.aclweb.org/anthology/I05-3017.pdf)  | [SIGHAN2005](http://sighan.cs.uchicago.edu/bakeoff2005/) | [icwb2 result summary](http://sighan.cs.uchicago.edu/bakeoff2005/data/results.php.htm) |
    | CityU | 1455629词，2403355字 | 2005年  | 香港城市大学   | [链接](https://www.aclweb.org/anthology/I05-3017.pdf)  | [SIGHAN2005](http://sighan.cs.uchicago.edu/bakeoff2005/) | [icwb2 result summary](http://sighan.cs.uchicago.edu/bakeoff2005/data/results.php.htm) |
- **基于该数据集发表的论文**：
    - Chen X , Xipeng Qiu∗,  Zhu C , et al. Long Short-Term Memory Neural Networks for Chinese Word Segmentation[C]// Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing. 2015.
    Cai D ,  Zhao H . Neural Word Segmentation Learning for Chinese[J].  2016.
    - Chen X ,  Shi Z ,  Qiu X , et al. Adversarial Multi-Criteria Learning for Chinese Word Segmentation[J].  2017.
    - Jie Yang, Yue Zhang, Fei Dong. Neural Word Segmentation with Rich Pretraining[C]// The 55th Annual Meeting of the Association for Computational Linguistics (ACL). 2017.
    - Yang, Jie, Yue Zhang, and Shuailong Liang. "Subword encoding in lattice lstm for chinese word segmentation." *arXiv preprint arXiv:1810.12594* (2018).
    - Ma J ,  Ganchev K ,  Weiss D . State-of-the-art Chinese Word Segmentation with Bi-LSTMs[J].  2018.
    - Huang W ,  Cheng X ,  Chen K , et al. Toward Fast and Accurate Neural Chinese Word Segmentation with Multi-Criteria Learning[J].  2019.

### 2. 微博分词数据集
- **数据集简介：**

    微博分词数据集为NLPCC2016使用的数据集，该数据集是复旦大学根据新浪微博的数据标注生成。相对于其他开源数据集，该数据集的语料更为口语化，同时覆盖经济，运动，环境等多种主题的语料。除了训练数据以外，该数据集还提供了相关的未标注语料，以供结合无监督方法的模型使用。

- **数据集详情：**

    | 名称  | 规模                             | 创建日期 | 作者       | 论文                                                         | 下载                                                    | 评测 |
    | ----- | -------------------------------- | -------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------- | ---- |
    | Weibo | 30779个句子，652740词，1077854字 | 2016年   | Xipeng Qiu | [链接](https://link.springer.com/chapter/10.1007/978-3-319-50496-4_84) | [链接](https://github.com/FudanNLP/NLPCC-WordSeg-Weibo) | N/A  |
    
- **基于该数据集发表的论文**：

    - Xia, Qingrong, et al. "Word segmentation on micro-blog texts with external lexicon and heterogeneous data." *Natural Language Understanding and Intelligent Applications*. Springer, Cham, 2016. 711-721.
    - Jie Yang, Yue Zhang, Fei Dong. Neural Word Segmentation with Rich Pretraining[C]// The 55th Annual Meeting of the Association for Computational Linguistics (ACL). 2017.
    - Yang, Jie, Yue Zhang, and Shuailong Liang. "Subword encoding in lattice lstm for chinese word segmentation." *arXiv preprint arXiv:1810.12594* (2018).
    - Xing, Junjie, Kenny Zhu, and Shaodian Zhang. "Adaptive multi-task transfer learning for Chinese word segmentation in medical text." *Proceedings of the 27th International Conference on Computational Linguistics*. 2018.
    - Luo, Ruixuan, et al. "PKUSEG: A Toolkit for Multi-Domain Chinese Word Segmentation." arXiv preprint arXiv:1906.11455 (2019).

### 3. Chinese Treebank X.0 (CTBX)
- **数据集简介：**

    由LDC构建的中文树库。CTBX中X表示版本，随着版本数据规模扩大，以及部分标准修正。CTB1标注数据来自新华日报；CTB2对CTB1进行部分纠正以及进行发布；CTB4标注数据来自新华日报、香港政府新闻处发布的新闻、以及台湾Sinorama magazine；CTB5标注数据来源同CTB4，对规模进行扩大；CTB6增加了来自广播节目的标注数据；CTB7增加了广播新闻、微博数据、以及广播电视谈话类节目数据；CTB8标注数据来源新闻数据、新闻杂志、广播新闻、广播谈话节目、微博、以及网页数据；CTB9标注数据来自新闻数据、新闻杂志、广播新闻、广播谈话节目、微博、论坛、聊天对话、电话数据。

- **数据集详情：**

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CTB1 | 100000个词，325篇文章 | 2000年 | -- | LDC | [链接](https://pdfs.semanticscholar.org/2c72/257ae7a4a32dc60569f4e1fe4504b2678112.pdf) | 未发布 | N/A |
    | CTB2 | 100000个词，325篇文章 | 2001年 | Martha Palmer, et al. | LDC | [链接](https://arxiv.org/abs/cs/0204007) |[会员下载](https://catalog.ldc.upenn.edu/LDC2001T11) | N/A |
    | CTB4 | 404156词，664663个汉字，15162个句子，838个文件 | 2004年 | Martha Palmer, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2004T05) | N/A |
    | CTB5 | 507222词，824983个汉字，18782个句子，890个文件 | 2005年 | Martha Palmer, et al. | LDC | [链接](https://www.ldc.upenn.edu/sites/www.ldc.upenn.edu/files/acl2005-parallel-entity-treebank-annotation.pdf) |[会员下载](https://www.ldc.upenn.edu/language-resources/data/obtaining) |N/A |
    | CTB6 | 781351词，1285149个汉字，28295个句子，2036个文件 | 2007年 | Martha Palmer, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2007T36) | N/A |
    | CTB7 | 1196329词，1931381个汉字，51447个句子，2448个文件 | 2010年 | Nianwen Xue, et al. | LDC | [链接](https://www.ldc.upenn.edu/sites/www.ldc.upenn.edu/files/tlt9-parallel-aligned-treebank-corpora-at-ldc.pdf) |[会员下载](https://catalog.ldc.upenn.edu/LDC2010T07) | N/A |
    | CTB8 | 1620561词，2589848个汉字，71369个句子，3007个文件 | 2013年 | Nianwen Xue, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2013T21) | N/A |
    | CTB9 | 2084387词，3247331个汉字，132076个句子，3726个文件 | 2016年 | Nianwen Xue, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2016T13) | N/A |

- **基于该数据集发表的相关论文：**

    - Jie Yang, Yue Zhang, Fei Dong. Neural Word Segmentation with Rich Pretraining[C]// The 55th Annual Meeting of the Association for Computational Linguistics (ACL). 2017.
    - Yang, Jie, Yue Zhang, and Shuailong Liang. "Subword encoding in lattice lstm for chinese word segmentation." *arXiv preprint arXiv:1810.12594* (2018).
    - Xing, Junjie, Kenny Zhu, and Shaodian Zhang. "Adaptive multi-task transfer learning for Chinese word segmentation in medical text." *Proceedings of the 27th International Conference on Computational Linguistics*. 2018.
    - Ma J ,  Ganchev K ,  Weiss D . State-of-the-art Chinese Word Segmentation with Bi-LSTMs[J].  2018.
    - Huang W ,  Cheng X ,  Chen K , et al. Toward Fast and Accurate Neural Chinese Word Segmentation with Multi-Criteria Learning[J].  2019.
    - Diao, Shizhe, et al. "ZEN: Pre-training Chinese Text Encoder Enhanced by N-gram Representations." arXiv preprint arXiv:1911.00720 (2019).
    
    
    
[回到首页](/dataset.md)
