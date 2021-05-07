&nbsp;
## 多模态（语言、视觉）

### 视频分类

#### 1. MTSVPRC Dataset
- <strong>数据集简介：</strong>

    该数据集来自美图公司联合中国模式识别与计算机视觉学术会议共同举办的PRCV2018“美图短视频实时分类挑战赛”。数据集一共有10万，以短视频为主，长度约为5-15s。包含50个分类，舞蹈、唱歌、手工、健身等热门短视频类型，除了包含与人相关的一些行为类别，还有一些风景，宠物等类别。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | MTSVRC数据集 | 10万视频数据 | 2018年 | N/A | 美图 | N/A | [链接](https://github.com/MTCloudVision/MTSVRC)| [美图短视频实时分类挑战赛](https://challenge.ai.meitu.com/mtsvrc2018/introduction.html) |

- <strong>基于该数据集发表的相关方案：</strong>
    - 第一名：https://chuangke.aliyun.com/info/detail/673631?scm=20140722.184.2.173
    - baseline：https://github.com/MTCloudVision/MTSVRC

[回到首页](/dataset.md)

### 视频内容识别

#### 1. VideoNet 2019
- <strong>数据集简介：</strong>

    该数据集来自视频内容识别挑战赛。为推动物体、场景多维度视频内容识别的应用，极链科技联合复旦大学推出多维度标注视频数据集VideoNet。包含300类视频，200类场景和200类物体的9万段视频，总时长4000小时。对视频进行事件分类标注，并针对每个镜头的关键帧进行了场景和物体两个维度的标注，充分体现了多维度内容之间的语义联系。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | VideoNet | 近9万视频 | 2019年 | N/A | 极链科技&复旦大学 | N/A | [链接](http://challenge.ai.videojj.com/#/lookback2019summer/ds)| [视频内容识别挑战赛](http://challenge.ai.videojj.com/#/lookback2019summer/intro) |

- <strong>基于该数据集发表的相关方案：</strong>
    - baseline：https://github.com/xxbbml/VideoNet_Baseline
    - 第一名：http://www.ia.cas.cn/xwzx/kydt/201909/t20190905_5377262.html

[回到首页](/dataset.md)


### 视频人物识别

#### 1. IQIYI-VID-Dataset
- <strong>数据集简介：</strong>

    该数据集来自爱奇艺多模态视频人物识别挑战赛。爱奇艺联合中国模式识别与计算机视觉大会（PRCV2018）举办“多模态视频人物识别挑战赛”。该数据集为明星视频数据集，包含5000位明星艺人，总时长1000小时、50万条视频片段。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | IQIYI-VID-Dataset | 50万条视频，5000名人物 | 2018年 | N/A | 爱奇艺 | [链接](https://arxiv.org/pdf/1811.07548.pdf) | [链接](http://challenge.ai.iqiyi.com/detail?raceId=5afc36639689443e8f815f9e)| [爱奇艺多模态视频人物识别挑战赛](http://challenge.ai.iqiyi.com/detail?raceId=5afc36639689443e8f815f9e) |

- <strong>基于该数据集发表的相关方案&论文：</strong>
    - 第三名方案：https://github.com/LegenDong/IQIYI_VID_FACE_2019
    - Jiankang D., Jia Guo. 2019. ArcFace: Additive Angular Margin Loss for Deep Face Recognition. CVPR. http://openaccess.thecvf.com/content_CVPR_2019/papers/Deng_ArcFace_Additive_Angular_Margin_Loss_for_Deep_Face_Recognition_CVPR_2019_paper.pdf
    - Jianrong C., Li Yang., et al. 2019. A Novel Deep Multi-Modal Feature Fusion Method for Celebrity Video Identification. MM '19: Proceedings of the 27th ACM International Conference on Multimedia. https://dl.acm.org/doi/abs/10.1145/3343031.3356067
    - Xi Fang., Ying Zou., 2019. Make the Best of Face Clues in iQIYI Celebrity VideoIdentification Challenge 2019. MM '19: Proceedings of the 27th ACM International Conference on Multimedia. https://dl.acm.org/doi/abs/10.1145/3343031.3356056

[回到首页](/dataset.md)


### 视频增强和超分

#### 1. Youku-VESR Dataset
- <strong>数据集简介：</strong>

    该数据集来自阿里巴巴优酷视频增强和超分辨率挑战赛。数据的每个样本由低分辨率和高分辨率的视频对组成。低分辨率视频为输入，高分辨率视频为增强和超分后的真值。每个视频的时间长度为5秒左右。大部分高清数据的分辨率是1080P，大概300M。由于是4倍超分，低质视频分辨率为270P，大概19M。 少量高清数据的分辨率是2048×1152，低质视频分辨率为512×288。视频数据为无压缩的y4m格式。比赛公开1000个视频，总量超过300GB。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | 优酷视频增强和超分数据集 | 1000视频数据 | 2019年 | N/A | 优酷 | N/A | [链接](https://tianchi.aliyun.com/dataset/dataDetail?spm=5176.12281978.0.0.4bd14adaHjku69&dataId=39568)| [阿里巴巴优酷视频增强和超分辨率挑战赛](https://tianchi.aliyun.com/competition/entrance/231711/introduction) |

- <strong>基于该数据集发表的相关方案&论文：</strong>
    - Jiale Chen., Xu Tan., et al. 2020. VESR-Net: The Winning Solution to Youku Video Enhancement and Super-Resolution Challenge. 

[回到首页](/dataset.md)



### 多模内容生成
#### 1. Flickr8K-CN、Flickr30K-CN、COCO-CN
- <strong>数据集简介：</strong>

    - 针对图像描述任务（Image Captioning)，将英文公开数据集Flickr8K（8千图像、4万英文描述）、Flickr30K（3万图像、15万英文描述）中的英文描述使用机器翻译将翻译为中文描述，其中，测试集通过人工翻译成中文描述，构建了Flickr8K-CN、和Flickr30k-CN图像描述数据集；
    - 针对英文公开数据集MS-COCO的图像，增加中文描述的句子，图像约2万，人工标注的中文描述约2.7万，结合机器翻译得到的中文描述10万，构建了COCO-CN数据集

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | Flickr8K-CN | 8k/45k(images/captions) | 2016年 | Xirong,Li | 人大 | [链接](https://doi.org/10.1145/2911996.2912049) | [链接](https://github.com/li-xirong/cross-lingual-cap)| - |
    | Flickr30K-CN | 31k/150k(images/captions) | 2017年 | Xirong,Li | 人大 | [链接](https://dl.acm.org/doi/10.1145/3123266.3123366) | [链接](https://github.com/li-xirong/cross-lingual-cap)| - |    
    | COCO-CN | 20k/22k(images/captions) | 2019年 | Xirong,Li | 人大 | [链接](https://arxiv.org/pdf/1805.08661.pdf) | [链接](https://github.com/li-xirong/cross-lingual-cap)| - |    
- <strong>基于该数据集发表的相关论文：</strong>
    - Xirong Li, Chaoxi Xu, Xiaoxu Wang, Weiyu Lan, Zhengxiong Jia, Gang Yang, Jieping Xu, COCO-CN for Cross-Lingual Image Tagging, Captioning and Retrieval, IEEE Transactions on Multimedia, Volume 21, Number 9, pages 2347-2360, 2019
    - Weiyu Lan, Xirong Li, Jianfeng Dong, Fluency-Guided Cross-Lingual Image Captioning, ACM MM 2017

#### 2. AIC-ICC
- <strong>数据集简介：</strong>

    AIC-ICC(Image Chinese Captioning from AI Challenge)包含21万图像和105万图像的中文描述，涵盖日常生活常见的200多个场景，如足球场、草地等场景，唱歌、跑步等动作，是目前图像描述领域最大的中文数据集。

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | AIC-ICC | 240k/1.2M(images/captions) | 2017年 | - | - | [链接](https://arxiv.org/abs/1711.06475) | [链接]()| - |
 
- <strong>基于该数据集发表的相关论文：</strong>
    - Xirong Li, Chaoxi Xu, Xiaoxu Wang, Weiyu Lan, Zhengxiong Jia, Gang Yang, Jieping Xu, COCO-CN for Cross-Lingual Image Tagging, Captioning and Retrieval, IEEE Transactions on Multimedia, Volume 21, Number 9, pages 2347-2360, 2019
    - Song, Y., Chen, S., Zhao, Y., & Jin, Q. (2019, October). Unpaired Cross-lingual Image Caption Generation with Self-Supervised Rewards. In Proceedings of the 27th ACM International Conference on Multimedia (pp. 784-792).


#### 3. VaTEX
- <strong>数据集简介：</strong>

    VaTEX数据集对4.1万个视频进行了视频描述标注，每个视频标注了 10 个英文描述和 10 个中文描述，对比之前的MSR-VTT数据集，VaTEX更加丰富的多语言描述，基于该数据集可以进行多语言的视频描述、基于视频的翻译等任务

- <strong>数据集详情：</strong>

    |  名称 | 规模 | 创建日期 | 作者 | 单位 | 论文 | 下载 | 评测 |
    | :---: | :---:| :---: | :---: | :---: | :---: | :---: | :---: |
    | VaTEX | 41k/412k(videos/captions) | 2019年 | Xin Wang | University of California, Santa Barbara | [链接](https://arxiv.org/abs/1904.03493) | [链接](https://vatex.org/main/index.html)| - |
 
- <strong>基于该数据集发表的相关论文：</strong>
    - Wang, X., Wu, J., Chen, J., Li, L., Wang, Y. F., & Wang, W. Y. (2019). VATEX: A large-scale, high-quality multilingual dataset for video-and-language research. In Proceedings of the IEEE International Conference on Computer Vision (pp. 4581-4591).


[回到首页](/dataset.md)

