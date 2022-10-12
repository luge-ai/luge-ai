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