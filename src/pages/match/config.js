// import duanLuoSrc from './assets/duan-luo-01.jpg';
// import zhiShiSrc from './assets/zhi-shi-02.jpg';
// import qiangGanSrc from './assets/qing-gan-03.jpg';
import shiPinSrc from './assets/shi-pin-04.jpg';
import tongyihuida from './assets/tongyihuida.png';
export const yearsList = [
    {
        current: 2022,
        lists: [
            {
                name: '段落检索',
                desc: '提供大规模的段落检索评测集，挑战机器检索相关段落的能力。',
                rankList: [
                    {
                        name: 'younger的团队',
                        team: '中国科学技术大学',
                        cls: ''
                    },
                    {
                        name: 'Zhengyang Tang',
                        team: '腾讯',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'OPPO小布助手',
                        team: 'oppo-小布助手',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '知识对话',
                desc: '让系统具备利用搜索引擎知识进行开放域对话交互的能力，提升对话的丰富性与知识准确性。',
                rankList: [
                    {
                        name: '拿件T恤就溜',
                        team: '腾讯科技有限公司',
                        cls: ''
                    },
                    {
                        name: '小米NLP应用组',
                        team: '小米公司',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '北交阿凡提',
                        team: '北京交通大学&北方工业大学',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '情感可解释评测',
                desc: '从合理性、一致性、忠诚性等多个维度评测模型预测所依赖证据的可解释性。',
                rankList: [
                    {
                        name: 'Ali_农民工',
                        team: '阿里巴巴&苏州大学',
                        cls: ''
                    },
                    {
                        name: '去哪吃',
                        team: '哈尔滨工业大学（深圳）',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'HIKNLU_G',
                        team: '杭州海康威视数字科技技术有限公司等',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '视频语义理解',
                desc: '融合知识、语言、视觉、语音等多模信息，为视频生成语义标签。',
                rankList: [
                    {
                        name: '商汤NLP×LaVi的团队',
                        team: '商汤科技&香港中文大学',
                        cls: ''
                    },
                    {
                        name: 'NetEase_AI',
                        team: '网易(杭州)网络有限公司',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'IDEA x DataStory',
                        team: '粤港澳大湾区数字经济研究院 (福田)&数说故事',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
        ],
        rank: [[1, 2, 3, 4, 5], []],
        link: 'http://lic2022.cipsc.org.cn/'
    },
    {
        current: 2021,
        lists: [
            {
                name: '机器阅读理解',
                desc: '提供细粒度的机器翻译阅读理解数据集，从多个维度挑战机器理解语言的能力',
                rankList: [
                    {
                        name: 'msi冠军是fpx',
                        team: '平安壹账通',
                        cls: ''
                    },
                    {
                        name: 'AI Speech',
                        team: '思必驰',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'Jordan2020的团队',
                        team: '华中科技大学',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '多技能对话',
                desc: '提供业界最大的中文多技能对话数据集，挑战模型有效融合多个技能的能力',
                rankList: [
                    {
                        name: 'bd__zz的团队',
                        team: '蚂蚁集团',
                        cls: ''
                    },
                    {
                        name: '风暴之灵',
                        team: '北京红棉小冰科技',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'Jason245023的团队',
                        team: '中国人民大学等',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '多形态信息抽取',
                desc: '提供业界最大的中文多形态信息抽取数据集，挑战从海量多粒度非结构化文本信息中自动抽取多形态结构化知识的能力',
                rankList: [
                    {
                        name: '观的团队',
                        team: '开发者',
                        cls: ''
                    },
                    {
                        name: 'davidie的团队',
                        team: '小米',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '不取名字好不好',
                        team: ' 中国矿业大学等',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
        ],
        rank: [[1, 2, 3, 4, 5], []],
        link: 'http://lic2021.ccf.org.cn/'
    },
    {
        current: 2020,
        lists: [
            {
                name: '机器阅读理解',
                desc: '提供评测机器阅读理解模型鲁棒性的数据集，从多角度挑战模型在真实应用场景中的健壮性',
                rankList: [
                    {
                        name: 'YZS',
                        team: '云知声智能',
                        cls: ''
                    },
                    {
                        name: 'Aim High ',
                        team: '华中科技大学等',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'NEUKG',
                        team: '东北大学',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '面向推荐的对话',
                desc: '融合人机对话的个性化推荐，定义新一代智能推荐技术，开放有丰富标注信息的大规模对话数据集',
                rankList: [
                    {
                        name: 'AIStudio80188的团队',
                        team: '深思考',
                        cls: ''
                    },
                    {
                        name: '强行跳大',
                        team: '开发者',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'ecnu_nlper',
                        team: '华东师范大学',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '语义解析',
                desc: '提供首个基于开放领域的复杂的中文Text-to-SQL数据集，让机器具备自动生成数据库查询语言的能力',
                rankList: [
                    {
                        name: 'xy（训练时长2个半）',
                        team: '国防科技大学',
                        cls: ''
                    },
                    {
                        name: 'Again',
                        team: '浙江大学',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '小手一撑、与世无争',
                        team: '开发者',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '关系抽取',
                desc: '提供业界最大规模中文关系抽取升级版数据集，让机器具备从海量自然语言文本中自动获取知识的能力',
                rankList: [
                    {
                        name: 'Godzilla',
                        team: '追一科技',
                        cls: ''
                    },
                    {
                        name: '观的团队',
                        team: '开发者',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '牧鱼',
                        team: '同济大学',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '事件抽取',
                desc: '提供业界规模最大的中文事件抽取数据集，让机器具备从海量非结构化文本中自动抽取结构化事件知识的能力',
                rankList: [
                    {
                        name: 'uloveqi的团队',
                        team: '京东方',
                        cls: ''
                    },
                    {
                        name: 'Remember Me',
                        team: '招商银行 AILab',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '观的团队',
                        team: '开发者',
                        cls: 'card_rank_icon_three'
                    }
                ]
            }
        ],
        link: 'http://lic2020.cipsc.org.cn/'
    },
    {
        current: 2019,
        lists: [
            {
                name: '机器阅读理解',
                desc: '挑战当前优秀的阅读理解系统尚不能正确回答的问题，全面评测机器进行深度语言理解以回答复杂问题的能力',
                rankList: [
                    {
                        name: 'iDeepWise',
                        team: '深思考',
                        cls: ''
                    },
                    {
                        name: 'lucky boys',
                        team: '北京邮电大学',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: '万有引力',
                        team: '金山软件',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '知识驱动对话',
                desc: '探索机器模拟人类基于知识主动聊天的能力，开放12万轮中文对话数据',
                rankList: [
                    {
                        name: 'bangda',
                        team: '开发者',
                        cls: ''
                    },
                    {
                        name: 'sys1874',
                        team: '大连理工大学等',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'fxnlp',
                        team: '网易',
                        cls: 'card_rank_icon_three'
                    }
                ]
            },
            {
                name: '信息抽取',
                desc: '提供业界最大规模的中文信息抽取数据集，让机器具备从海量自然语言文本中自动获取知识的能力',
                rankList: [
                    {
                        name: 'gdm',
                        team: '复旦大学',
                        cls: ''
                    },
                    {
                        name: 'littlebert',
                        team: '开发者',
                        cls: 'card_rank_icon_two'
                    },
                    {
                        name: 'Kill_Thread ',
                        team: 'Ecole X',
                        cls: 'card_rank_icon_three'
                    }
                ]
            }
        ]
    }
];

export const yearData = yearsList.map(item => item.current);

export function yearCurrent(year) {
    const newArr = yearsList.filter(item => item.current === +year);
    return newArr;
}

export const gamesShowList = [
    // {
    //     title: '段落检索',
    //     desc: '提供大规模的段落检索评测集，挑战机器检索相关段落的能力。',
    //     imgUrl: duanLuoSrc,
    // },
    // {
    //     title: '知识对话',
    //     desc: '让系统具备利用搜索引擎知识进行开放域对话交互的能力，提升对话的丰富性与知识准确性。',
    //     imgUrl: zhiShiSrc,
    // },
    // {
    //     title: '情感可解释评测',
    //     desc: '从合理性、一致性、忠诚性等多个维度评测模型预测所依赖证据的可解释性。',
    //     imgUrl: qiangGanSrc,
    // },
    {
        title: '大语言模型评估',
        desc: '从通用人工智能发展与应用的角度，对大语言模型进行系统性、可量化的评估体系建设。',
        imgUrl: tongyihuida,
    },
    {
        title: '视频语义理解',
        desc: '融合知识、语言、视觉、语音等多模信息，为视频生成语义标签。',
        imgUrl: shiPinSrc,
    }
]