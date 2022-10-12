import React, { memo, useMemo, useState, useEffect } from 'react';
import DetailTitle from './components/detailTitle';
import DataIntro from './components/dataIntro';
import DataFooter from './components/dataFooter';
import './assets/css/index.less';
import { getDateSetDetail } from '../../base/request';
import { parseUrl } from '../../utils/index';

const Detail = memo(() => {
    const params = parseUrl(window.location.hash);
    const [dataDetail, setDataDetail] = useState({});
    useMemo(async () => {
        let dataSetDetail = await getDateSetDetail({ id: params.id });
        setDataDetail(dataSetDetail.data);
    }, [params.id]);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '数据集详情']);
        document.documentElement.scrollTop = 0;
    }, [params.id]);
    return (
        <div className='detailCardContainer' key={window.location.hash}>
            <div className='detail_content'>
                <DetailTitle {...{ dataDetail, taskName: params.taskName }} />
                <DataIntro {...{ dataDetail }} />
                {dataDetail.taskId && <DataFooter {...{ dataDetail }} />}
            </div>
        </div>
    );
});

export default memo(Detail);