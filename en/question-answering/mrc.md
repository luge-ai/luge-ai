&nbsp;
## 阅读理解

### 1. DuReader
- <strong>数据集简介：</strong>

    DuReader是百度发布的面向真实应用的、开放域的、最大规模的中文问答阅读理解数据集。与以前的阅读理解数据集相比，DuReader的优势是（1）数据来源真实：DuReader的问题是百度搜索中用户提出的真实问题，文档来自于百度搜索和百度知道，并且答案都是人工标注的。（2）问题类型丰富：DuReader提供了更加丰富的问题类型标注，每个问题的类型标注属于两个维度：第一个维度包括了实体类、描述类和是非类，第二个维度包括了事实类和观点类。（3）数据规模大：DuReader包含了30万问题，72万答案和150万文档，它是迄今为止最大的中文阅读理解数据集。基于DuReader的2018机器阅读理解技术竞赛获得了学术界和工业界的高度关注，共有1062个队伍报名，累计提交结果1489次。评测期间，最好系统的性能大幅提高，Rouge-L值从35.92提高至63.62，推动了中文阅读理解技术的整体发展。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuReader | 30万问题<br>140万文档<br>66万答案 | 2017年 | He et al. | 百度 | [链接](https://www.aclweb.org/anthology/W18-2605.pdf) | [链接](https://ai.baidu.com/broad/introduction?dataset=dureader)| [2018 NLP Challenge on MRC](http://mrc2018.cipsc.org.cn/)<br> [2019 Language and Intelligence Challenge on MRC](http://lic2019.ccf.org.cn/) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Yan, M., Xia, J., Wu, C., Bi, B., Zhao, Z., Zhang, J., Si, L., Wang, R., Wang, W. and Chen, H., 2019, July. A deep cascade model for multi-document reading comprehension. In Proceedings of the AAAI Conference on Artificial Intelligence (Vol. 33, pp. 7354-7361).
    - Wang, Y., Liu, K., Liu, J., He, W., Lyu, Y., Wu, H., Li, S. and Wang, H., 2018, July. Multi-Passage Machine Reading Comprehension with Cross-Passage Answer Verification. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) (pp. 1918-1927).


### 2. DuReader<sub>robust</sub>
- <strong>数据集简介：</strong>

    随着技术的进步，当前的一些模型已经能够在一些阅读理解测试集上取得较好的性能。但在实际应用中，这些模型所表现出的鲁棒性仍然较差。因此，百度发布了DuReader<sub>robust</sub>数据集，该数据集重点关注阅读理解模型在真实应用场景中的鲁棒性，挑战模型的过敏感性、过稳定性以及泛化能力等。该数据集共包含约21K问题，其中包括15K训练集，约1.4K领域内开发集和5K测试集。测试集包含了领域内测试集和鲁棒性测试集，其中鲁棒性测试集包括了过敏感测试集、过稳定测试集以及泛化能力测试集。基于DuReader<sub>robust</sub>数据集的2020语言与智能技术竞赛机器阅读理解任务的评测，已经吸引了超过1000支队伍的报名。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuReader<sub>robust</sub> | 2.2万问题 | 2020年 | Tang et al. | 百度 | N/A | [链接](https://github.com/PaddlePaddle/Research/tree/master/NLP/DuReader-Robust-BASELINE)| [2020 Language and Intelligence Challenge on MRC](http://lic2020.cipsc.org.cn/) |


### 3. CMRC 2018
- <strong>数据集简介：</strong>

    CMRC 2018数据集是哈工大讯飞联合实验室发布的中文机器阅读理解数据。该数据集聚焦于『篇章片段抽取型阅读理解』（Span-Extraction Reading Comprehension）。根据给定的一个段落和一个问题，机器需要从该段落中抽取出问题的答案。其中答案是段落中的某个连续片段，即预测答案在篇章中的起始位置和终止位置，并把对应的文本抽取出来。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CMRC 2018 | 2万问题 | 2018年 | Cui et al. | 哈工大讯飞联合实验室 | [链接](https://www.aclweb.org/anthology/D19-1600.pdf) | [链接](https://github.com/ymcui/cmrc2018)| [第二届“讯飞杯”中文机器阅读理解评测](https://hfl-rc.github.io/cmrc2018/) |


### 4. DRCD
- <strong>数据集简介：</strong>

    DRCD（Delta Reading Comprehension Dataset）是由中国台湾台达研究院发布的面向通用领域的繁体中文机器阅读理解数据集。该数据集是基于繁体中文的抽取式阅读理解数据集，其形式与SQuAD相同。该数据集中的文档来自于维基百科，包括了从2,108篇维基词条中整理出的10,014个段落，并针对这些段落标注了30,000多个问题。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | 
    | DRCD | 3万问题<br>2千文档<br>1万段落 | 2018年 | Shao et al. | 中国台达研究院 | [链接](https://arxiv.org/pdf/1806.00920.pdf) | [链接](https://github.com/DRCKnowledgeTeam/DRCD)| 


### 5. CJRC
- <strong>数据集简介：</strong>

    CJRC数据集是哈工大讯飞联合实验室发布的面向司法领域的中文机器阅读理解数据。裁判文书中包含了丰富的案件信息，比如时间、地点、人物关系等等，通过机器智能化地阅读理解裁判文书，可以更快速、便捷地辅助法官、律师以及普通大众获取所需信息。该数据集是首个基于中文裁判文书的阅读理解数据集，属于篇章片段抽取型阅读理解比赛（Span-Extraction Machine Reading Comprehension）。为了增加问题的多样性，参考英文阅读理解比赛SQuAD和CoQA，该数据集增加了拒答以及是否类（YES/NO）问题。鉴于民事和刑事裁判文书在事实描述部分差异性较大，相应的问题类型也不尽相同，为了能同时兼顾这两种裁判文书，从而覆盖大多数裁判文书，该数据集同时包括了民事和刑事两类数据。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CJRC | 5万问题 | 2019年 | Duan et al. | 哈工大讯飞联合实验室 | [链接](https://arxiv.org/pdf/1912.09156.pdf) | [链接](https://github.com/china-ai-law-challenge/CAIL2019/tree/master/%E9%98%85%E8%AF%BB%E7%90%86%E8%A7%A3)| [“中国法研杯”中文法律阅读理解比赛](http://cail.cipsc.org.cn) |


[回到首页](/dataset.md)
