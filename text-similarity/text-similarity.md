## 文本相似度

### 1. LCQMC
- <strong>数据集简介：</strong>

    百度知道领域的中文问题匹配数据集，目的是为了解决在中文领域大规模问题匹配数据集的缺失。该数据集从百度知道不同领域的用户问题中抽取构建出260068对数据，其中238766对作为训练集、8802对作为验证集以及12500对作为测试集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | LCQMC | 26万文本数据 | 2018年 | Xin Liu et al. | 哈工大 | [链接](https://www.aclweb.org/anthology/C18-1166.pdf) | [链接](http://icrc.hitsz.edu.cn/Article/show/171.html)| N/A |

- <strong>基于该数据集发表的相关论文：</strong>
    - Xin Liu, Qingcai Chen, Chong Deng et al. 2018, Aug. LCQMC:A Large-scale Chinese Question Matching Corpus. In Proceedings of the 27th International Conference on Computational Linguistics.
    

### 2. BQ Corpus
- <strong>数据集简介：</strong>

   银行金融领域的问题匹配数据，包括了从一年的线上银行系统日志里抽取的12万问题pair对，是目前最大的银行领域问题匹配数据。
    
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | BQ Corpus | 12万文本数据 | 2018年 | Jing Chen et al. | 哈工大 & WeBank | [链接](https://www.aclweb.org/anthology/D18-1536.pdf) | [链接](http://icrc.hitsz.edu.cn/Article/show/175.html)| N/A |

- <strong>基于该数据集发表的相关论文：</strong> 
    - Jing Chen, Qingcai Chen, Xin Liu et al. 2018, Oct. The BQ Corpus: A Large-scale Domain-specific Chinese Corpus For Sentence Semantic Equivalence Identification. In Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing.

### 3. PAWS-X
- <strong>数据集简介：</strong>

   谷歌发布的包含 7 种语言释义对的数据集，即：PAWS（英语） 与 PAWS-X（多语），其中中文训练集49401对，开发集2000对，测试集2000对。数据集里包含了释义对和非释义对，即识别一对句子是否具有相同的释义（含义），特点是具有高度重叠词汇，对于进一步提升模型对于强负例的判断很有帮助。
   
- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | PAWS-X（中文） | 5.33万文本数据 | 2019年 | Yinfei Yang et al. | Google Research | [链接](https://arxiv.org/pdf/1908.11828.pdf) | [链接](https://github.com/google-research-datasets/paws)| N/A |
    
- <strong>基于该数据集发表的相关论文：</strong> 
    - Yinfei Yang, Yuan Zhang, Chris Tar and Jason Baldridge, 2019, Aug. PAWS-X: A Cross-lingual Adversarial Dataset for Paraphrase Identification. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing.

[回到首页](/README.md)
