import { combineReducers } from 'redux';

function createReducers(initialValue = {}) {
    return (state = initialValue, { type, payload } = {}) => {
        switch (type) {
            case type:
                return { ...state, ...payload };
            default:
                return state;
        }
    };
}

const initDataList = {
    taskId: '',
    cardsList: {
        total: 0,
        list: []
    },
    announcements: [],
    gamesMessNormal: {},
    taskDetail: {},
    taskList: [],
    bannerList: [],
    advertise: {},
    hotMatch: {},
    HomeRecommend: []
};

const combineReducersObj = {
    dataList: createReducers('dataList', initDataList)
};

export const reducers = combineReducers(combineReducersObj);
