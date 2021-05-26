&nbsp;
## 对话理解

### 1. Medical DS
- <strong>数据集简介：</strong>
Medical DS是复旦大学发布的基于百度拇指医生上真实对话数据的，面向任务型对话的中文医疗诊断数据集。数据集涵盖了四种疾病，分别是上呼吸道感染、小儿功能性消化不良、小儿腹泻和小儿支气管炎。数据来源于百度拇指医生的儿科频道，每个会话数据包含病人的自我陈述（比如症状描述）以及病人与医生之间的问诊对话。病人的自我陈述以及问诊对话中的所有的症状都是由人工标注的（被标识清楚患者是否患有该症状），并且标注经过了两位标注者的一致性校验，且如果两位标注者的标注结果不一致会由第三位标注者进一步判断。所有的症状由医疗专家与[SNOMED CT](https://www.snomed.org/snomed-ct)标准对齐，同时去除了出现频率过低的症状，总共67种症状被保留。


- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: |
    | Medical DS | 710个对话 <br> 67种症状 <br> 4种疾病 | 2018年 | Liu et al. | 复旦大学 | [链接](http://www.sdspeople.fudan.edu.cn/zywei/paper/liu-acl2018.pdf) | [链接](http://www.sdspeople.fudan.edu.cn/zywei/data/acl2018-mds.zip)|


### 2. CATSLU
- <strong>数据集简介：</strong>
CATSLU是第一个开源的包含包含语音和文本的真实世界对话场景的对话理解数据集，覆盖4个对话领域：地图导航、音乐搜索、天气预报、视频查找（电影或电视）。
所有的问题均是收集自真实世界中人机交互产生的对话，由上千位不同用户产生。为了模拟数据的稀疏性问题，天气预报场景和视频查找场景的训练集比较小。相对与之前的一些研究性数据集，这个数据集的数据来源更真实，同时包含更多的词槽，词槽值的选择空间更大（比如歌名词槽包括上千种可能值），并且涵盖了音频数据。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | CATSLU | 1.6万问题 <br> 94槽位 | 2019年 | Zhu et al. | 同济大学 | [链接](https://dl.acm.org/doi/pdf/10.1145/3340555.3356098) | [训练开发集](https://drive.google.com/file/d/1Wpzfq_qbUJm2ddjUO9oNYBAG83MJZxf2/view) <br> [测试集](https://drive.google.com/file/d/1DO2lYYXk7lEMoFQeY2XdK1irZHDhiDEA/view) | [The 1st Chinese Audio-Textual Spoken Language Understanding Challeng](https://sites.google.com/view/CATSLU/home) |

### 3. NLPCC2018 Shared Task 4 
- <strong>数据集简介：</strong>
NLPCC2018 Shared Task 4的数据集，数据来源于真实商用车载语音任务型对话系统的对话日志，所有数据均为中文。整个数据集涵盖三个领域：音乐、导航、打电话，对于不属于这三个领域的数据，统一被标为其他。
为了简化任务，该数据集仅仅保留高频的意图和词槽。整个数据集按照对话的时间间隔，被划分成了5800多会话，先经过现有对话理解系统的标注，又由人工校验产生，会话中问题的标注充分考虑了会话的上下文。整个数据集按照4：1的比例，随机拆分成训练集和测试集。为了降低ASR错误带来的影响，该数据集为每个词槽值可枚举的词槽提供了候选词典。
最终共有16个队伍参加这个比赛，总共提交了40次结果。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | NLPCC2018 Shared Task 4 | 5800对话 <br> 2.6万问题 | 2018年 | zhao et al. | 腾讯 | [链接](http://tcci.ccf.org.cn/conference/2018/papers/EV33.pdf) | [训练开发集](http://tcci.ccf.org.cn/conference/2018/dldoc/trainingdata04.zip) <br> [测试集](http://tcci.ccf.org.cn/conference/2018/dldoc/tasktestdata04.zip) | [NLPCC 2018 Spoken Language Understanding in Task-oriented Dialog Systems](http://tcci.ccf.org.cn/conference/2018/taskdata.php) |



[回到首页](/dataset.md)
