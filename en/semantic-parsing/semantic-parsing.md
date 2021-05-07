&nbsp;
## 语义解析（Text-to-SQL）

### 1. DuSQL
- <strong>数据集简介：</strong>

    DuSQL是百度公司建设的覆盖多领域、基于多表的中文Text-to-SQL数据集。该数据集包含覆盖160+领域的200个数据库，平均每个数据库包含4.1张表格，共2.4万<问题，SQL查询语句>对。为了提升数据集的实用价值，该数据集不仅覆盖了SQL常见关键词，还覆盖了更多实际应用中的问题类型，如排序、比较、计算等。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuSQL | 200个数据库，近2.4万问题 | 2020年 | Lijie Wang, et al. | 百度 | [链接](https://www.aclweb.org/anthology/2020.emnlp-main.562/) | [链接](https://aistudio.baidu.com/aistudio/competition/detail/47/?isFromLuge=1) |[2020 Language and Intelligence Challenge on Semantic Parsing](https://aistudio.baidu.com/aistudio/competition/detail/30)|

- <strong>基于该数据集发表的相关论文：</strong>
    -  无
    

### 2. CSpider
- <strong>数据集简介：</strong>

   CSpider数据集是从Spider数据集翻译过来的（仅翻译了问题，数据库相关信息都是英文的）。该数据集是覆盖多领域、基于多表的Text-to-SQL数据集。其包含166个数据库，平均每个数据库包含5.3张表格，共9K+问题。Spider数据集是全人工建设的数据集，覆盖了SQL中常见关键词（Select、Where、Group by、Order by等）和复杂句式（如嵌套、多子句）。CSpider翻译自Spider，其信息同Spider。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CSpider | 166个数据库，0.9万问题 | 2019年 | Qingkai Min, et al. | 西湖大学 | [链接](https://arxiv.org/abs/1909.13293) |[链接](https://taolusi.github.io/CSpider-explorer/)|[CSpider榜单](https://taolusi.github.io/CSpider-explorer)|

- <strong>基于该数据集发表的相关论文：</strong>
    - 无


### 3. NL2SQL
- <strong>数据集简介：</strong>

   NL2SQL是追一科技公司发布的第一个中文Text-to-SQL数据集。该数据覆盖金融、书籍、房产等领域，是基于单表的数据集，即每个数据库仅包含一张表格，SQL生成过程中不涉及到表的选择。该数据集包含2.6万张表格，以及8万多问题，问题涉及的SQL形式较为简单，仅包含Select和Where两个关键词。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | NL2SQL | 26521个数据库，8万+问题 | 2019年 | Ningyuan Sun, et al. | 追一科技 | [链接](https://arxiv.org/abs/2006.06434) |[链接](https://aistudio.baidu.com/aistudio/competition/detail/47/?isFromLuge=1)| [基于阿里天池的比赛](https://tianchi.aliyun.com/competition/entrance/231716/rankingList) |

- <strong>基于该数据集发表的相关论文：</strong>
    - 无

[回到首页](/dataset.md)
