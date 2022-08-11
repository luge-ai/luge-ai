import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
// import Back from '@/components/common/back';
import AboutItem from './components/aboutItem';
import LugeDatas from './components/lugeDatas';
import LugeAuthor from './components/lugeAuthor';
import Expert from './components/expert';
import Vision from './components/vision';
import QuickLearn from './components/quickLearn';
import './index.less';
import { getJoinList } from '../../base/request';

function AboutLuge() {
    const dispatch = useDispatch();
    const [committeeList, setcommitteeList] = useState({});
    const [applyEnter, setapplyEnter] = useState({});
    const [quickList, setquickList] = useState({});
    const [lugeBudaoList, setlugeBudaoList] = useState({});
    const getInitData = async () => {
        const { result: { pageData: { committeeList, applyEnter, quickList, lugeBudaoList } } } = await getJoinList();
        setcommitteeList(committeeList);
        setapplyEnter(applyEnter);
        setquickList(quickList);
        setlugeBudaoList(lugeBudaoList);
    }
    useMemo(() => {
        getInitData();
    }, [dispatch]);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '关于千言']);
    }, []);
    return (
        <div className='taskCardContainer'>
            <Nav />
            {/* <Back /> */}
            <AboutItem applyEnter={applyEnter} />
            <LugeDatas />
            <LugeAuthor committeeList={committeeList} lugeBudaoList={lugeBudaoList} />
            <Expert />
            <QuickLearn quickList={quickList} />
            <Vision />
            <Footer />
        </div>
    );
}

export default React.memo(AboutLuge);
