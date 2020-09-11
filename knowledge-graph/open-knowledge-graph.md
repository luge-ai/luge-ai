&nbsp;
## 开放的中文知识图谱
### 1. CN-Probase
- <strong> 图谱简介： </strong>
    
    CN-Probase是由复旦大学知识工场实验室研发并维护的大规模中文概念图谱,包含约1700万实体、27万概念和3300万isa关系。isa关系的准确率在95%以上，是目前规模最大的开放领域中文概念图谱和概念分类体系。
- <strong> 数据集详情：</strong>

    |  图谱数据集名称 | 单位 | 数据来源 | 规模 | 开放方式 | 参考资料 |
    | :---: | :---:| :---: | :---: | :---: | :---: |
    | CN-Probase | 复旦大学 | 百度百科、互动百科及中文维基 | 约1700万实体、27万概念和3300万isa关系 | [API访问](http://kw.fudan.edu.cn/apis/cnprobase/) | [官网](http://kw.fudan.edu.cn/cnprobase/intro/)|

 - <strong> 基于该数据集发表的相关论文：</strong>
 
    - Chen J, Wang A, Chen J, et al. CN-Probase: a data-driven approach for large-scale Chinese taxonomy construction[C]//2019 IEEE 35th International Conference on Data Engineering (ICDE). IEEE, 2019: 1706-1709.

### 2. CN-Dbpedia
- <strong> 图谱简介： </strong>

    CN-DBpedia是由复旦大学知识工场实验室研发并维护的大规模通用领域结构化百科，其前身是复旦GDM中文知识图谱。CN-DBpedia主要从中文百科类网站（如百度百科、互动百科、中文维基百科等）的纯文本页面中提取信息，经过滤、融合、推断等操作后，最终形成高质量的结构化数据，涵盖了数千万实体和数亿级关系。
CN-DBpedia目前提供Dump数据下载。包含900万+的百科实体以及6700万+的三元组关系。其中mention2entity信息110万+，摘要信息400万+，标签信息1980万+，infobox信息4100万+。
- <strong> 数据集详情：</strong>

    |  图谱数据集名称 | 单位 | 数据来源 | 规模 | 开放方式 | 参考资料 |
    | :---: | :---:| :---: | :---: | :---: | :---: |
    | CN-Dbpedia   | 复旦大学 |   中文百科类网站   | 千万级实体和亿级关系（持续更新中）|[部分数据dump](http://kw.fudan.edu.cn/cndbpedia/download/) & [API访问](http://kw.fudan.edu.cn/apis/cndbpedia/) |[官网](http://kw.fudan.edu.cn/cndbpedia/intro/)|

 - <strong> 基于该数据集发表的相关论文：</strong>
 
    - Bo Xu, Yong Xu, Jiaqing Liang, Chenhao Xie, Bin Liang, Wanyun Cui, and Yanghua Xiao. CN-DBpedia: A Never-Ending Chinese Knowledge Extraction System. In International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, pp. 428-438. Springer, Cham, 2017.

### 3. PKU-PIE 
- <strong> 图谱简介： </strong>

    PKU-PIE知识库是由北京大学构建，从维基百科、DBpedia、百度百科等多个来源自动收集知识形成的知识库，有自己的类别体系和谓词体系，并且和DBpedia等常见的数据库进行关联。PKU-PIE知识库涵盖了全领域实体的优质三元组数据集，规模超过5000万条。
- <strong> 数据集详情：</strong>

    |  图谱数据集名称 | 单位 | 数据来源 | 规模 | 开放方式 | 参考资料 |
    | :---: | :---:| :---: | :---: | :---: | :---: |
    | PKU-PIE   | 北京大学 |   从维基百科, DBpedia, 百度百科等多个来源自动收集 |超过5000万条三元组|[数据dump](http://openkg.cn/dataset/pku-pie) |[链接](http://openkg.cn/dataset/pku-pie)|

### 4. XLORE 
- <strong> 图谱简介： </strong>

    XLORE知识库是由清华大学构建，融合了中英文维基、法语维基和百度百科，对百科知识进行结构化和跨语言链接构建的多语言知识图谱，是中英文知识规模较平衡的大规模多语言知识图谱 。XLore包含2,466,956个概念，446,236个关系和16,284,901实体。
- <strong> 数据集详情：</strong>
    
    |  图谱数据集名称 | 单位 | 数据来源 | 规模 | 开放方式 | 参考资料 |
    | :---: | :---:| :---: | :---: | :---: | :---: |
    | XLORE | 清华大学 |  各类百科网站 |2,466,956个概念，446,236个关系和16,284,901实体| [部分数据dump](https://xlore.org/download.html) & [API访问](https://xloreapi.docs.apiary.io/#) |[官网](http://xlore.org)|

 - <strong> 基于该数据集发表的相关论文：</strong>
 
    - Wang Z, Li J, Wang Z, et al. Xlore: A large-scale english-chinese bilingual knowledge graph[C]. Proceedings of the 12th International Semantic Web Conference (Posters & Demonstrations Track)-Volume 1035. CEUR-WS. org, 2013: 121-124.


### 5. 七律-7Lore
- <strong> 图谱简介： </strong>

    七律-7Lore，是狗尾草科技精心打造的百科知识图谱，是人类世界海量知识的集合，七律知识图谱包含了事物、事实、概念、规则等信息，目前涵盖超过2亿个实体和超过30亿条关系，并且每天保持稳定地增量学习和增长。

- <strong> 数据集详情：</strong>

     |  图谱数据集名称 | 单位 | 数据来源 | 规模 | 开放方式 | 参考资料 |
    | :---: | :---:| :---: | :---: | :---: | :---: |
    | 七律-7Lore| 狗尾草科技有限公司 |   N/A |2亿个实体及超过30亿条关系 |[部分数据dump](http://www.openkg.cn/dataset/7lore) |[官网](https://ai.gowild.cn/kg)|


[回到首页](/dataset.md)

