import React, {memo, useMemo, useState, useEffect} from 'react';
import Nav from '../../components/Layout/nav';
import DetailTitle from './components/detailTitle';
import DataIntro from './components/dataIntro';
import DataFooter from './components/dataFooter';
import Footer from '../../components/Layout/footer';
import './assets/css/index.less';
import {getDateSetDetail} from '../../base/request';
import {parseUrl} from '../../utils/index';

const Detail = memo(() => {
    // getDateSetDetail
    const params = parseUrl(window.location.hash);
    // console.log(params);
    const [dataDetail, setDataDetail] = useState({});
    useMemo(async () => {
        let dataSetDetail = await getDateSetDetail({id: params.id});
        setDataDetail(dataSetDetail.data);
    }, [params.id]);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '数据集详情']);
        document.documentElement.scrollTop = 0;
    }, [params.id]);
    // console.log(dataDetail);
    return (
        <div className='detailCardContainer' key={window.location.hash}>
            <Nav/>
            <div className='detail_content'>
                <DetailTitle dataDetail={dataDetail} taskName={params.taskName} />
                <DataIntro dataDetail={dataDetail} />
                {dataDetail.taskId && <DataFooter dataDetail={dataDetail} />}
            </div>
            <Footer />
        </div>
    );
});

export default memo(Detail);