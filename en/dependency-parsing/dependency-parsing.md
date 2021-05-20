&nbsp;
## 句法分析

### 1. Chinese Treebank X.0 (CTBX)
- <strong>数据集简介：</strong>

    由LDC构建的中文树库。CTBX中X表示版本，随着版本数据规模扩大，以及部分标准修正。CTB1标注数据来自新华日报；CTB2对CTB1进行部分纠正以及进行发布；CTB4标注数据来自新华日报、香港政府新闻处发布的新闻、以及台湾Sinorama magazine；CTB5标注数据来源同CTB4，对规模进行扩大；CTB6增加了来自广播节目的标注数据；CTB7增加了广播新闻、微博数据、以及广播电视谈话类节目数据；CTB8标注数据来源新闻数据、新闻杂志、广播新闻、广播谈话节目、微博、以及网页数据；CTB9标注数据来自新闻数据、新闻杂志、广播新闻、广播谈话节目、微博、论坛、聊天对话、电话数据。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CTB1 | 100000个词，325篇文章 | 2000年 | -- | LDC | [链接](https://pdfs.semanticscholar.org/2c72/257ae7a4a32dc60569f4e1fe4504b2678112.pdf) | 未发布 | N/A |
    | CTB2 | 100000个词，325篇文章 | 2001年 | Martha Palmer, et al. | LDC | [链接](https://arxiv.org/abs/cs/0204007) |[会员下载](https://catalog.ldc.upenn.edu/LDC2001T11) | N/A |
    | CTB4 | 404156词，664663个汉字，15162个句子，838个文件 | 2004年 | Martha Palmer, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2004T05) | N/A |
    | CTB5 | 507222词，824983个汉字，18782个句子，890个文件 | 2005年 | Martha Palmer, et al. | LDC | [链接](https://www.ldc.upenn.edu/sites/www.ldc.upenn.edu/files/acl2005-parallel-entity-treebank-annotation.pdf) |[会员下载](https://www.ldc.upenn.edu/language-resources/data/obtaining) |[2009 Conll Shared Tasks](https://ufal.mff.cuni.cz/conll2009-st/) |
    | CTB6 | 781351词，1285149个汉字，28295个句子，2036个文件 | 2007年 | Martha Palmer, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2007T36) | N/A |
    | CTB7 | 1196329词，1931381个汉字，51447个句子，2448个文件 | 2010年 | Nianwen Xue, et al. | LDC | [链接](https://www.ldc.upenn.edu/sites/www.ldc.upenn.edu/files/tlt9-parallel-aligned-treebank-corpora-at-ldc.pdf) |[会员下载](https://catalog.ldc.upenn.edu/LDC2010T07) | N/A |
    | CTB8 | 1620561词，2589848个汉字，71369个句子，3007个文件 | 2013年 | Nianwen Xue, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2013T21) | N/A |
    | CTB9 | 2084387词，3247331个汉字，132076个句子，3726个文件 | 2016年 | Nianwen Xue, et al. | LDC | N/A |[会员下载](https://catalog.ldc.upenn.edu/LDC2016T13) | N/A |

- <strong>基于该数据集发表的相关论文：</strong>
    - Li, H., Zhang, Z., Ju, Y., & Zhao, H. (2018, April). Neural character-level dependency parsing for Chinese. In Thirty-Second AAAI Conference on Artificial Intelligence.
    - Bohnet, B., Nivre, J. (2012, July). A transition-based system for joint part-of-speech tagging and labeled non-projective dependency parsing. In Proceedings of the 2012 joint conference on empirical methods in natural language processing and computational natural language learning (pp. 1455-1465). Association for Computational Linguistics.
    - Hatori, J., Matsuzaki, T., Miyao, Y., Tsujii, J. I. (2011, November). Incremental joint POS tagging and dependency parsing in Chinese. In Proceedings of 5th international joint conference on natural language processing (pp. 1216-1224).
    - Li, Z., Zhang, M., Che, W., Liu, T., Chen, W., Li, H. (2011, July). Joint models for Chinese POS tagging and dependency parsing. In Proceedings of the Conference on Empirical Methods in Natural Language Processing (pp. 1180-1191). Association for Computational Linguistics.
    - Hatori, J., Matsuzaki, T., Miyao, Y., Tsujii, J. I. (2012, July). Incremental joint approach to word segmentation, POS tagging, and dependency parsing in Chinese. In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics: Long Papers-Volume 1 (pp. 1045-1053). Association for Computational Linguistics.
    - Guo, J., Che, W., Yarowsky, D., Wang, H., Liu, T. (2015, July). Cross-lingual dependency parsing based on distributed representations. In Proceedings of the 53rd Annual Meeting of the Association for Computational Linguistics and the 7th International Joint Conference on Natural Language Processing (Volume 1: Long Papers) (pp. 1234-1244).
    

### 2. HIT-CDT
- <strong>数据集简介：</strong>

   由哈尔滨工业大学发布的依存句法数据集，标注数据来自人民日报和小学语文课本。弧label集合含15个label，标注标准见http://www.ltp-cloud.com/intro#dp_how。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | HIT-CDT | 902191词, 49996个句子 | 2012年 | Wanxiang Che, et al. | 哈尔滨工业大学 | N/A | [会员下载](https://catalog.ldc.upenn.edu/LDC2012T05) | [NLPCC 2019 shared tasks](http://hlt.suda.edu.cn/index.php/Nlpcc-2019-shared-task) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Jiang, X., Li, Z., Zhang, B., Zhang, M., Li, S., Si, L. (2018, July). Supervised treebank conversion: Data and approaches. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) (pp. 2706-2716).

### 3. PKU-CDT
- <strong>数据集简介：</strong>

   由北京大学发布的依存句法数据集。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | PKU-CDT | 14463个句子 | 2014年 | Likun Qiu, et al. | 北京大学 | [链接](https://www.aclweb.org/anthology/C14-1026.pdf) | N/A | N/A |

- <strong>基于该数据集发表的相关论文：</strong>
    - Jiang, X., Li, Z., Zhang, B., Zhang, M., Li, S., Si, L. (2018, July). Supervised treebank conversion: Data and approaches. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) (pp. 2706-2716).

### 4. HLT-CDT
- <strong>数据集简介：</strong>

   由苏州大学和阿里巴巴共建的依存句法数据集，标注数据来自人民日报、小学语文课本、淘宝商品描述等。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | HLT-CDT | 30000个句子 | 2018年 | Lijuan Guo, et al. | 苏州大学 & 阿里巴巴 | [链接](http://jcip.cipsc.org.cn/CN/abstract/abstract2645.shtml) | [链接](http://hlt.suda.edu.cn/index.php/Nlpcc-2019-shared-task) | [NLPCC 2019 shared tasks](http://hlt.suda.edu.cn/index.php/Nlpcc-2019-shared-task) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Jiang, X., Li, Z., Zhang, B., Zhang, M., Li, S., Si, L. (2018, July). Supervised treebank conversion: Data and approaches. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) (pp. 2706-2716).
    - Li, Z., Peng, X., Zhang, M., Wang, R., Si, L. (2019, July). Semi-supervised domain adaptation for dependency parsing. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (pp. 2386-2395).



[回到首页](/dataset.md)
