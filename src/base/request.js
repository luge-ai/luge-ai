// import queryString from 'query-string';
import { getRequest } from './axios';

export const getTaskList = async params => {
    return await getRequest('/luge/api/tasklist', params);
};

export const getDateSetDetail = async params => {
    return await getRequest('/luge/api/dataset', params);
};

export const getRankList = async params => {
    return await getRequest('/luge/api/matchranklist', params);
};

export const getDataSetList = async params => {
    return await getRequest('/luge/api/datasetlist', params);
};

export const getGameList = async params => {
    return await getRequest('/luge/api/matchlist', params);
};

// /luge/api/matchdetail?matchId=45&roundId=141
export const getRankDetail = async params => {
    return await getRequest('/luge/api/matchdetail', params);
};

export const getUserDetail = async params => {
    return await getRequest('/luge/api/author', params);
};

export const getRelateGame = async params => {
    return await getRequest('/luge/api/matchlast', params);
};