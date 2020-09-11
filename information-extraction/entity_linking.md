&nbsp;
## 实体链指

### 1. DuEL Dataset
- <strong>数据集简介：</strong>

    DuEL Dataset是百度发布的中文短文本实体链指数据集。与以前的中文实体链指数据集相比，DuEL Dataset的优势是（1）数据集规模大：DuEL Dataset包含10w左右的中文短文本，DuEL Dataset知识库覆盖39w实体。（2）数据质量高：DuEL Dataset数据集由百度众包标注生成，知识库实体重复率约5%，实体尚未概念准确率95.27%，数据集标注准确率95.32%。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuEL Dataset |10w短文本，39w实体 | 2019年 |N/A | 百度 | [链接](https://arxiv.org/pdf/2003.03875.pdf) | [链接](https://ai.baidu.com/broad/download)| [CCKS 2019: 面向中文短文本的实体链指任务](https://biendata.com/competition/ccks_2019_el/)|

- <strong>基于该数据集发表的相关论文：</strong>
    - Han X, Wang Z, Zhang J, et al. Overview of the CCKS 2019 Knowledge Graph Evaluation Track: Entity, Relation, Event and QA[J]. arXiv preprint arXiv:2003.03875, 2020.


### 2. KBP 2017 EDL & KBP 2019 EDL
- <strong>数据集简介：</strong>

    KBP 2017 EDL数据集来源于TAC-KBP2017评测任务，任务目标是在英语、中文、西班牙三个语种上进行实体发现，并将它们链接到英文知识库（KB)。
数据源包含500人工标注的篇章数据和9w未标注篇章数据，使用freebase数据库。KBP 2017 EDL仅关注五种主要的粗粒度实体类型：人员（PER），地缘政治实体（GPE），位置（LOC），组织（ORG）和设施（FAC）。

    KBP 2019 EDL数据集来源于TAC-KBP2019评测任务，任务目标是在英文文本中进行实体发现，并预测mention类型。KBP 2019 EDL将类型的数量从五种扩展到数千种。数据源包含30w未标注篇章和500标注篇章。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: | 
    | KBP 2017 EDL | 500标注篇章，9w未标注篇章 | 2017年 | N/A | 美国国家标准与技术研究院 | [链接](http://nlp.cs.rpi.edu/paper/kbp2017.pdf) | [链接](http://nlp.cs.rpi.edu/kbp/2017/)| [KBP2017 Entity Discovery and Linking](http://nlp.cs.rpi.edu/kbp/2017/)
    | KBP 2019 EDL | 500标注篇章，30w未标注篇章 | 2019年 | N/A | 美国国家标准与技术研究院 | [链接](http://nlp.cs.rpi.edu/kbp/2019/EDL2019TaskSpec_V6.0.pdf) | [链接](http://nlp.cs.rpi.edu/kbp/2019/)| [KBP2019 Entity Discovery and Linking](http://nlp.cs.rpi.edu/kbp/2019/)

- <strong>基于该数据集发表的相关论文：</strong>
    - Rijhwani S, Xie J, Neubig G, et al. Zero-shot neural transfer for cross-lingual entity linking[C]//Proceedings of the AAAI Conference on Artificial Intelligence. 2019, 33: 6924-6931.
    - Kilias T, Löser A, Gers F A, et al. Idel: In-database entity linking with neural embeddings[J]. arXiv preprint arXiv:1803.04884, 2018.
    - Lin Y, Costello C, Zhang B, et al. Platforms for non-speakers annotating names in any language[C]//Proceedings of ACL 2018, System Demonstrations. 2018: 1-6.


### 3. 知识工厂数据集
- <strong>数据集简介：</strong>

    该数据集由1037条人工标注的中文短文本语料组成。其中大约70%来自新闻语料，包括新闻标题和内容，比如“英超-桑切斯4分钟内梅开二度阿森纳3-2五轮不败”；大约20%来自人工构建的基于歧义实体的语料，比如“红楼梦的演员有哪些”；大约10%来自问答语料中的简单问句，比如说“岳阳有哪些旅游景点”。

    数据标注的格式如下。每个样本的标注格式包括3个部分：语料，mention和实体，用制表符‘\t’分隔；其中mention为语料中指代实体的子段，多个用“|||”分隔；实体部分为各mention对应的实体，多个用“|||”分隔，数量应与mention一致。比如，“李娜拿过澳网冠军吗\t李娜|||澳网\t李娜（中国女子网球名将）|||澳大利亚网球公开赛”。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | 
    | 知识工厂数据集 | 1037条人工标注的短文本语料 | 2017年 | Bo Xu, Yong Xu, Jiaqing Liang, etc. | 知识工厂 | [链接](http://www.xumenger.com/download/20180820/CN-DBpedia-System.pdf) | [链接](https://github.com/clhisawolfman/chinese_entity_linking)| 

- <strong>基于该数据集发表的相关论文：</strong>
    - Bo Xu, Yong Xu, Jiaqing Liang, Chenhao Xie, Bin Liang, Wanyun Cui, and Yanghua Xiao. CN-DBpedia: A Never-Ending Chinese Knowledge Extraction System. In International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, pp. 428-438. Springer, Cham, 2017.


### 4. NLPCC 2015（注：无法下载）
- <strong>数据集简介：</strong>

    该数据集来自NLPCC 2015评测任务，任务目标是对短queries中的实体进行识别并链接到对应的中文知识库中。其中中文知识库来自于各类中文百科的信息框，包括中文维基百科和百度百科，知识库为每个实体提供了一个相对结构化的描述信息，并将每个实体页面的第一段作为该实体的摘要，不可避免地含有部分噪音数据，但是相对容易访问。有关该任务和数据集详细描述请见NLPCC 2015 Shared Task：http://tcci.ccf.org.cn/conference/2015/pages/page05_evadata.html
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: | 
    | 2015 entity linking in search query | N/A | 2015年 | Feng Y., Han Z., Zhang K.  | CCF | [链接](https://link.springer.com/chapter/10.1007/978-3-319-25207-0_51) | [链接](https://biendata.com/ccf_tcci2018/datasets/tcci_tag/2)| [NLPCC 2015](http://tcci.ccf.org.cn/conference/2015/pages/page05_evadata.html) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Feng Y., Han Z., Zhang K. (2015) Overview of the NLPCC 2015 Shared Task: Entity Recognition and Linking in Search Queries. In: Li J., Ji H., Zhao D., Feng Y. (eds) Natural Language Processing and Chinese Computing. Lecture Notes in Computer Science, vol 9362. Springer, Cham

[回到首页](/dataset.md)
