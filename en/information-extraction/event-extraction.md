&nbsp;
## 事件抽取
### 1. DuEE
-  <strong> 数据集简介： </strong>

    DuEE是由百度构建的目前业界规模最大的中文事件抽取数据集，其任务目标是通过给定目标事件类型和角色类型集合及句子，识别句子中所有目标事件类型的事件，并根据论元角色集合抽取事件所对应的论元。
-  <strong> 数据集详情：</strong>

    | 名称       | 规模  |  文本来源  | 评测  |下载  |论文  |
    | :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
    | DuEE   | 65种事件类型、1.7万句子，2万事件 |   新闻   |[LIC2020](https://aistudio.baidu.com/aistudio/competition/detail/32)  |[链接](https://aistudio.baidu.com/aistudio/competition/detail/32) | - |


### 2. ACE 2005 Multilingual Training Corpus
- <strong>数据集简介： </strong>

    ACE 2005 Multilingual Training Corpus是2005年自动内容提取(Automatic content extraction, ACE)技术评测中所使用的数据。数据包含英文、中文、阿拉伯文3种语言，文中的实体、数值、时间、关系、事件5种数据均被标注，是事件抽取研究中最常用的数据集之一。其中的中文部分包括633篇文档，8种事件类型，33种子事件类型，2521个事件。
-  <strong> 数据集详情：</strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| ACE 2005| 新闻,博客等 |  中文部分包括633篇文档，2521个事件   |[ACE 2005](https://catalog.ldc.upenn.edu/LDC2006T06)   |[链接](https://catalog.ldc.upenn.edu/LDC2006T06) | [链接](https://pdfs.semanticscholar.org/3a9b/136ca1ab91592df36f148ef16095f74d009e.pdf)|

 - <strong>基于该数据集发表的相关论文：</strong>
 
    - Heng Ji and Ralph Grishman. 2008. Refining event extraction through cross-document inference. In ACL.
    - Qi Li, Heng Ji, and Liang Huang. 2013. Joint event extraction via structured prediction with global features. In ACL.
    - Yubo Chen, Liheng Xu, Kang Liu, Daojian Zeng, and Jun Zhao. 2015. Event extraction via dynamic multi-pooling convolutional neural networks. In ACLIJCNLP.


### 3. TAC KBP Event Track -- Argument Task(2016-2017)
- <strong>数据集简介： </strong>

    TAC KBP Event Track是TAC会议知识库方向(Knowledge Base Population, KBP)的一个关注事件抽取的子方向，其目标是抽取事件的结构化信息，使之能够成为知识库构建的一种合适输入。其中的事件论元抽取任务(Argument Task)的目标则是抽取事件中的论元及其在事件中扮演的角色。 该任务总共举办了4次，其中，2014-2015年的数据集仅包含英语，2016-2017年则包含英语、中文、西班牙语3种语言。

-  <strong> 数据集详情：</strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| TAC KBP Event Track 2016  | 论坛 & 新闻网页 |   18类事件类型, 500篇文档  |[TAC2016](https://tac.nist.gov/2016/KBP/Event/index.html) |[仅对参赛者提供](https://tac.nist.gov/2016/KBP/data.html) | [链接](https://tac.nist.gov/2016/KBP/guidelines/summary_rich_ere_v4.2.pdf) |
| TAC KBP Event Track 2017  | 论坛 & 新闻网页 |   18类事件类型, 500篇文档  |[TAC2017](https://tac.nist.gov/2017/KBP/Event/index.html) |[仅对参赛者提供](https://tac.nist.gov/2017/KBP/data.html) | [链接](https://tac.nist.gov/2016/KBP/guidelines/summary_rich_ere_v4.2.pdf) |

 - <strong>基于该数据集发表的相关论文：</strong>
 
    - Sammons M, Song Y, Wang R, et al. Overview of UI-CCG systems for event argument extraction, entity discovery and linking, and slot filler validation[J]. Urbana, 2014, 51(2014): 61801.


### 4. 中文突发事件语料库(Chinese Emergency Corpus, CEC)
- <strong>数据集简介：</strong>

    中文突发事件语料库是由上海大学（语义智能实验室）所构建。根据国务院颁布的《国家突发公共事件总体应急预案》的分类体系，从互联网上收集了5类（地震、火灾、交通事故、恐怖袭击和食物中毒）突发事件的新闻报道作为生语料，然后再对生语料进行文本预处理、文本分析、事件标注以及一致性检查等处理，最后将标注结果保存到语料库中，合计332篇文档。

- <strong>数据集详情： </strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| 中文突发事件语料库  | 新闻 |   5类突发事件, 332篇文档   |  -   |[链接](https://github.com/shijiebei2009/CEC-Corpus) |[链接](http://jcip.cipsc.org.cn/CN/article/downloadArticleFile.do?attachType=PDF&id=2360)| - |


 - <strong>基于该数据集发表的相关论文：</strong>
 
    - Fang Zhu, Zongtian Liu, Juanli Yang, Ping Zhu. Chinese event place phrase recognition of emergency event using Maximum Entropy[C]. Cloud Computing and Intelligence Systems (CCIS), 2011 IEEE International Conference on: 614-618.


### 5. 面向金融领域的事件主体抽取
- <strong>数据集简介：</strong>

    面向金融领域的事件主体抽取是CCKS 2019发布的一份评测数据集，其中包含金融事件短句及其金融主体数据约2万条。数据均来自互联网新闻, 事件类型包括: 产品出现问题、高管减持、违法违规等。

- <strong>数据集详情： </strong>

| 名称       | 文本来源  |  规模 | 评测  |下载  |论文  |
| :-----:  | :-----:  | :----:  |:----:  |:----:  |:----:  |
| CCKS 2019 面向金融领域的事件主体抽取  | 新闻 |   近2万个事件   |  [链接](https://biendata.com/competition/ccks_2019_4/) | [链接](https://biendata.com/competition/ccks_2019_4/data/)| - |


 - <strong>基于该数据集发表的相关论文：</strong>
 
    - Kunxun Qi, Jianfeng Du, Jinglan Zhong, ZhenJie Chen, Hanying Lai, and Langlun Chen. An Event-oriented Model with Focal Loss for Financial Event Subject Extraction. 



[回到首页](/dataset.md)
