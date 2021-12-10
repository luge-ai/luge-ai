import React, {useRef, useMemo, useState} from 'react';
import {Pagination} from 'antd';
import { useDispatch } from 'react-redux';
import RankCardItem from './rankCardItem';
import Types from '../../../components/common/Types';
import {getRankList} from '../../../base/request';
import {actions} from '../../../store/actions';

function RankCard() {
    const taskType = useRef({
        taskId: ''
    });
    const [rankData, setRankData] = useState({});
    const dispatch = useDispatch();
    const dealChange = async params => {
        const paramsObj = taskType.current.taskId ? {taskId: taskType.current.taskId} : {};
        const res = await getRankList({...paramsObj, ...params});
        setRankData(res.data);
    };
    useMemo(async () => {
        dispatch(actions.getTaskList());
        dealChange();
    }, [dispatch]);
    const changePage = async page => {
        const params = {page};
        if (taskType.current.taskId) {
            params.taskId = taskType.current.taskId;
        }
        const res = await getRankList(params);
        setRankData(res.data);
        document.documentElement.scrollTop = 0;
        window._hmt.push(['_trackEvent', '排行页', `分页`]);
    };
    return (
        <div className='rankCardContainer'>
            <div className='tasksTop rankTop'>
                <Types
                    taskType={taskType}
                    rankStatus={true}
                    dealChange={dealChange}
                />
            </div>
            <div className='rank_cards'>
                <div className='rank_cards_content'>
                    {rankData.list && rankData.list.map((gamesMessNormalItem, index) => (
                        <RankCardItem
                            gamesMessNormalItem={gamesMessNormalItem}
                            key={index}/>
                    ))}
                    {rankData.total > 9 && <div className='rank_page'>
                        <Pagination
                            total={rankData.total}
                            defaultCurrent={1}
                            onChange={changePage}
                        />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default React.memo(RankCard);
