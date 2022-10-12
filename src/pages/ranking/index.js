import React, { useEffect, useState, useMemo } from 'react';
import './index.less';
import CommonTitle from '../../components/common/CommonTitle';
import RankCard from './components/rankCard';
import { getJoinList } from '../../base/request';

function Ranking() {
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '比赛排行']);
    }, []);
    const [topCard, setTopCard] = useState({});
    const getInitData = async () => {
        const { result: { pageData: { topCard } } } = await getJoinList();
        setTopCard(topCard);
    }
    useMemo(() => {
        getInitData();
    }, []);
    return (
        <div className='taskCardContainer'>
            <CommonTitle {...{ ...topCard.rank }} />
            <RankCard />
        </div>
    );
}

export default React.memo(Ranking);