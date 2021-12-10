import React, {useEffect} from 'react';
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

function AboutLuge() {
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '关于千言']);
    }, []);
    return (
        <div className='taskCardContainer'>
            <Nav />
            {/* <Back /> */}
            <AboutItem />
            <LugeDatas />
            <LugeAuthor />
            <Expert />
            <QuickLearn />
            <Vision />
            <Footer />
        </div>
    );
}

export default React.memo(AboutLuge);
