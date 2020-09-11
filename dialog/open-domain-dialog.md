&nbsp;
## 闲聊类对话技术

### 1. DuConv
- <strong>数据集简介：</strong>

    DuConv是百度发布的基于知识图谱的主动聊天任务数据集，让机器根据构建的知识图谱进行主动聊天，使机器具备模拟人类用语言进行信息传递的能力。数据集的创新性是：强调了bot的主动性，并且在闲聊对话中引入了明确的对话目标，即将对话引导到特定实体上。数据中的知识信息来源于电影和娱乐人物领域有聊天价值的知识信息，如票房、导演、评价等，以三元组SPO的形式组织，对话目标中的话题为电影或娱乐人物实体。数据集中共有3万session，约12万轮对话，其中10万训练集，1万开发集，1万测试集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuConv | 3万session <br> 约12万轮对话 | 2019年 | Wu et al. | 百度 | [链接](https://www.aclweb.org/anthology/P19-1369/) | [链接](https://ai.baidu.com/broad/download)| [2019 Language and Intelligence Challenge on Dialog](http://lic2019.ccf.org.cn/) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Wenquan Wu, Zhen Guo, Xiangyang Zhou, Hua Wu, Xiyuan Zhang, Rongzhong Lian, and Haifeng Wang. 2019. Proactive human-machine conversation with explicit conversation goal. In ACL.


### 2. DuRecDial
- <strong>数据集简介：</strong>

    面向推荐的对话(Conversational Recommendation)是指集成对话系统和推荐系统的人机交互系统，该系统先通过问答或闲聊收集用户兴趣和偏好，然后主动给用户推荐其感兴趣的内容，比如餐厅、美食、电影、新闻等。真实世界的人机交互同时涉及到多种类型的对话，比如问答、闲聊、任务型对话等。当前业界一般把多种类型的对话分开研究，这其实不符合真实的人机交互。如何自然的融合多类型对话是一个重要的挑战，为了应对这个挑战，我们提出了一个新的任务—多类型对话中的面向推荐的对话，期望系统能够主动且自然地将对话从非推荐对话（比如『问答』）引导到推荐对话，然后基于收集到的用户兴趣及用户实时反馈通过多次交互完成最终的推荐目标。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | DuRecDial | 1万session <br> 16万句 | 2020年 | Liu et al. | 百度 | [链接](https://arxiv.org/pdf/2005.03954) | (待公开) | [2020 Language and Intelligence Challenge on Dialog](http://lic2020.cipsc.org.cn/) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Zeming Liu, Haifeng Wang, Zheng-Yu Niu, Hua Wu, Wanxiang Che, Ting Liu. 2020. Towards Conversational Recommendation over Multi-Type Dialogs. In ACL.
    
    
### 3. 豆瓣多轮对话
- <strong>数据集简介：</strong>

    豆瓣多轮对话数据集是北航／微软联合发布的用于评估闲聊对话技术的标准数据集。数据主要来源是豆瓣社交网站上的聊天数据。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 豆瓣多轮对话 | 100万session | 2017年 | Wu et al. | 北航／微软 | [链接](https://www.aclweb.org/anthology/P17-1046/) | [链接](https://github.com/MarkWuNLP/MultiTurnResponseSelection) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Yu Wu, Wei Wu, Chen Xing, Ming Zhou, Zhoujun Li. 2017. Sequential Matching Network: A New Archtechture for Multi-turn Response Selection in Retrieval-based Chatbots. In ACL. 

### 4. 豆瓣知识对话
- <strong>数据集简介：</strong>

    豆瓣知识对话数据集是首个支持知识对话技术的中文标准数据集。数据主要来源是豆瓣社交网站上的问答以及知识相关的聊天数据。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 豆瓣知识对话 | 2万session | 2018年 | Liu et al.  | 计算所／京东 | [链接](https://www.aclweb.org/anthology/P18-1138/) | [链接](https://github.com/liushuman/neural-knowledge-diffusion) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Shuman Liu, Hongshen Chen, Zhaochun Ren, Yang Feng, Qun Liu, Dawei Yin. 2018. Knowledge Diffusion for Neural Dialogue Generation. In ACL.

### 5. 微博对话
- <strong>数据集简介：</strong>

    微博对话数据集是 "第一个" 支持闲聊对话技术建模的中文标准数据集。数据主要来源是微博社交网站上的对话。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 微博对话 | 400万单轮对话句对 | 2015年 | Shang et al.  | 华为 | [链接](https://www.aclweb.org/anthology/P15-1152/) | [链接](https://gist.github.com/AndrewShang/8a14e78f5eb03a0fb91248540041cc7d) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Lifeng Shang, Zhengdong Lu, Hang Li. 2015. Neural Responding Machine for Short-Text Conversation. In ACL.

### 6. 京东对话数据
- <strong>数据集简介：</strong>

    京东对话数据集是京东发布的用于评估基于知识的特定领域对话技术的标准数据集。数据主要来源是京东客服的对话,数据特点在于数据规模较大，并且客服领域有很好的应用价值。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 京东对话数据 | 100万session | 2019年 | Chen et al.  | 京东 | [链接](https://arxiv.org/abs/1911.09969) | [链接](https://jddc.jd.com) | [链接](https://jddc.jd.com) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Meng Chen, Ruixue Liu, Lei Shen, Shaozu Yuan, Jingyan Zhou, Youzheng Wu, Xiaodong He, Bowen Zhou. 2019. The JDDC Corpus: A Large-Scale Multi-Turn Chinese Dialogue Dataset for E-commerce Customer Service. arXiv:1911.09969.

### 7. 情感对话数据(Emotional Conversation Dataset (Chinese))
- <strong>数据集简介：</strong>

    情感对话数据集是清华发布的首个支持情感对话建模的中文标准数据集。数据主要来源是前述微博对话数据，通过模型自动地对每条回复句进行情感分类，从而在对话数据中添加了情感标签。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 情感对话数据 | 100万句对 | 2017年 | Zhou et al. | 清华 | [链接](https://arxiv.org/abs/1704.01074) | [链接](http://coai.cs.tsinghua.edu.cn/hml/challenge2017/) | NLPCC 2017 [链接](http://coai.cs.tsinghua.edu.cn/hml/challenge2017/) |

- <strong>基于该数据集发表的相关论文：</strong>
    - Hao Zhou, Minlie Huang, Tianyang Zhang, Xiaoyan Zhu, Bing Liu. 2019. Emotional Chatting Machine: Emotional Conversation Generation with Internal and External Memory. In AAAI.
    
 ### 8. 基于句式的中文对话数据集 (Chinese Dialogue Dataset with Sentence Function )
- <strong>数据集简介：</strong>

    基于句式的中文对话数据集是清华发布的首个支持基于句式功能的对话生成建模的中文标准数据集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 基于句式的中文对话数据集 | 200万句对 | 2018年 | Ke et al. | 清华 | [链接](https://www.aclweb.org/anthology/P18-1139/) | [链接](http://coai.cs.tsinghua.edu.cn/hml/dataset/) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Pei Ke, Jian Guan, Minlie Huang, Xiaoyan Zhu. 2018. Generating Informative Responses with Controlled Sentence Function. In ACL. 

### 9. 对话问题生成数据集 (Dialogue Question Generation Dataset (Chinese) )
- <strong>数据集简介：</strong>

    对话问题生成数据集是清华发布的首个支持问题生成技术建模的中文标准数据集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 对话问题生成数据集  | 50万句对 | 2018年 | Wang et al. | 清华 | [链接](https://www.aclweb.org/anthology/P18-1204/) | [链接](http://coai.cs.tsinghua.edu.cn/hml/dataset/) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Yansen Wang, Chenyi Liu, Minlie Huang, Liqiang Nie.2018. Learning to Ask Questions in Open-domain Conversational Systems with Typed Decoders. In ACL. 

### 10. 个性对话数据集 (Personality Assignment Dataset (Chinese) )
- <strong>数据集简介：</strong>

    个性对话数据集是清华发布的首个基于明文个性信息的对话生成技术建模的中文标准数据集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 个性对话数据集 | 1000万微博句对 | 2018年 | Qian et al. | 清华 | [链接](https://arxiv.org/abs/1706.02861) | [链接](http://coai.cs.tsinghua.edu.cn/hml/dataset/) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Qiao Qian, Minlie Huang, Haizhou Zhao, Jingfang Xu, Xiaoyan Zhu. 2018. Assigning personality/identity to a chatting machine for coherent conversation generation. In IJCAI-ECAI.
    
### 11. 中文知识对话数据集 kdConv
- <strong>数据集简介：</strong>

    为了进一步推动多领域的知识驱动的多轮对话研究并且弥补中文语料的缺乏，清华对话组提出了一个中文的多领域的知识驱动的对话数据集KdConv (Knowledge-driven Conversation)，其使用知识图谱为多轮对话中使用的知识进行标注。该数据集包含了来自三个领域（电影、音乐和旅游）的4.5K个对话，86K个句子，平均轮数为19.0。这些对话包含了相关话题的深度讨论，以及多个话题之间的自然过渡。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 个性对话数据集 | 4.5k多轮对话session | 2020年 | Zhou et al. | 清华 | [链接](https://arxiv.org/abs/2004.04100) | [链接](https://github.com/thu-coai/KdConv) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Hao Zhou, Chujie Zheng, Kaili Huang, Minlie Huang, Xiaoyan Zhu. 2020. KdConv: A Chinese Multi-domain Dialogue Dataset Towards Multi-turn Knowledge-driven Conversation. In ACL.

### 12.  检索辅助生成对话数据集 
- <strong>数据集简介：</strong>

    腾讯发布的单轮对话数据，其中每个句对带有通过检索系统得到的top 10回复，用于辅助训练生成模型。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 检索辅助生成对话数据集 | 550万单轮对话 | 2019年 | Cai et al. | 腾讯 | [链接](https://ai.tencent.com/ailab/nlp/dialogue/papers/EMNLP2019_cd.pdf) | [链接](https://github.com/jcyk/seqgen) | 无 |

- <strong>基于该数据集发表的相关论文：</strong>
    - Deng Cai, Yan Wang, Wei Bi, Zhaopeng Tu, Xiaojiang Liu, Shuming Shi. 2019. Retrieval-guided Dialogue Response Generation via a Matching-to-Generation Framework. In EMNLP.



[回到首页](/dataset.md)
