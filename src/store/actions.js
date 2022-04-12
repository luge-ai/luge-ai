import {getTaskList, getDataSetList} from '../base/request';
export const actions = {
    getDataList: params => {
        return async dispatch => {
            try {
                const res = await getDataSetList(params);
                // console.log(res);
                dispatch({
                    type: 'datalist',
                    payload: {
                        cardsList: res.data
                    }
                });
                dispatch({
                    type: 'datalist',
                    payload: {
                        announcements: [
                            {
                                type: 'HOT',
                                desc: '2022语言与智能技术竞赛',
                                url: 'http://lic2022.cipsc.org.cn/'
                            },
                            {
                                type: 'HOT',
                                desc: 'NAACL2022 机器同传竞赛',
                                url: 'https://aistudio.baidu.com/aistudio/competition/detail/148/0/introduction'
                            },
                            {
                                type: '工具',
                                desc: '千言pip安装包发布',
                                url: 'https://github.com/luge-ai/luge-pip'
                            },
                            // {
                            //     type: '资讯',
                            //     desc: '“千言”计划发布',
                            //     url: 'https://mp.weixin.qq.com/s/oBMCHkUn4emTToT8014Mdg'
                            // },
                            {
                                type: '其它',
                                desc: '如何加入千言技术专家',
                                url: 'https://aistudio.baidu.com/paddle/forum/topic/show/992437'
                            },
                            {
                                type: '其它',
                                desc: '如何使用千言数据集',
                                url: 'https://aistudio.baidu.com/paddle/forum/topic/show/992438'
                            }
                        ],
                        gamesMessNormal: {
                            title: '常规赛-排行榜',
                            list: [
                                {
                                    url: require('../pages/home/assets/game_01.png'),
                                    title: '第二界数据集大赛挑战赛-阅读理解分场比赛',
                                    status: '进行中'
                                },
                                {
                                    url: require('../pages/home/assets/game_02.png'),
                                    title: '开放域对话挑战赛',
                                    status: '进行中'
                                },
                                {
                                    url: require('../pages/home/assets/game_03.png'),
                                    title: '合作赛：第一届千言',
                                    status: '待开始：2021.06.19'
                                }
                            ]
                        },
                        taskDetail: {
                            title: '开放域对话',
                            desc: '针对多种场景的对话任务：包括网络日常对话，情感对话，知识对话和有目标的开放域对话等任务'
                        }
                    }
                });
                // console.log(res.data);
            } catch (err) {
                throw err;
            }
        };
    },
    getTaskList: params => {
        return async dispatch => {
            let res = await getTaskList(params);
            localStorage.setItem('TaskType', JSON.stringify(res.data));
            res.data.unshift({
                description: '',
                marker: '0',
                name: '全部任务',
                taskId: ''
            });
            dispatch({
                type: 'datalist',
                payload: {
                    taskList: res.data || []
                }
            });
        };
    },
    getGameList: () => {
        return {
            currentPage: 1,
            pageCount: 20,
            result: [
                {
                    url: require('../pages/game/assets/game_card_01.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_02.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_01.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_02.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_01.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_02.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_01.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                },
                {
                    url: require('../pages/game/assets/game_card_02.png'),
                    title: '情感分析数据集大赛',
                    time: '2021.07.01~2021.09.01',
                    num: 1234
                }
            ]
        };
    },
    getTaskDetail: () => {
        return {
            title: '信息抽取',
            desc: '机器阅读理解 (Machine Reading Comprehension) 是指让机器阅读文本，然后回答和阅读内容相关的问题。机器阅读理解是自然语言处理和人工智能领域的重要前沿课题，对于提升机器的智能水平、使机器具有持续知识获取的能力等具有重要价值，近年来受到学术界和工业界的广泛关注。',
            cardsList: {
                result: [
                    {
                        sign: '情感分析',
                        title: '腾讯检索辅助生成对话一个非常长的数据集',
                        num: 21963,
                        logo: '',
                        name: '用户名',
                        school: '清华大学'
                    },
                    {
                        sign: '情感分析',
                        title: '腾讯检索辅助生成对话一个非常长的数据集',
                        num: 21963,
                        logo: '',
                        name: '用户名',
                        school: '清华大学'
                    },
                    {
                        sign: '情感分析',
                        title: '腾讯检索辅助生成对话一个非常长的数据集',
                        num: 21963,
                        logo: '',
                        name: '用户名',
                        school: '清华大学'
                    },
                    {
                        sign: '情感分析',
                        title: '腾讯检索辅助生成对话一个非常长的数据集',
                        num: 21963,
                        logo: '',
                        name: '用户名',
                        school: '清华大学'
                    }
                ]
            }
        };
    }
};