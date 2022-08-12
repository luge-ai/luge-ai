import { getTaskList, getDataSetList, getBannerList } from '../base/request';
export const actions = {
    getDataList: params => {
        return async dispatch => {
            try {
                const res = await getDataSetList(params);
                dispatch({
                    type: 'datalist',
                    payload: {
                        cardsList: res.data
                    }
                });
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
    },
    getLugeList: params => {
        return async dispatch => {
            const { result: {
                pageData: {
                    qianyanBanner: { bannerList },
                    advertise,
                    announcements: { lists },
                    hotMatch,
                    HomeRecommend
                }
            } } = await getBannerList();
            dispatch({
                type: 'datalist',
                payload: {
                    bannerList,
                    advertise,
                    announcements: lists,
                    hotMatch,
                    HomeRecommend: HomeRecommend.lists
                }
            });
        };
    },
};