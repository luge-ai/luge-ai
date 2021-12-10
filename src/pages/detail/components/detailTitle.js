import React, { memo, lazy, useState } from 'react';
import {message} from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {formatDate} from '../../..//utils/index';
import detail_icon1 from '../assets/img/detail_icon1.png';
import detail_icon2 from '../assets/img/detail_icon2.png';
import detail_icon3 from '../assets/img/detail_icon3.png';
import detail_icon4 from '../assets/img/detail_icon4.png';
import detail_icon5 from '../assets/img/detail_icon5.png';
import load_icon from '../assets/img/load_icon.png';
import share_icons from '../assets/img/share_icons.png';
// import share_load_icon from '../assets/img/share_load_icon.svg';
const BaiduRule = lazy(() => import('../../../components/common/BaiduRule'));

const DetailTitle = props => {
    const [visible, setVisible] = useState(false);
    const handleUserDetail = status => {
        window._hmt.push(['_trackEvent', '千言数据详情', '下载']);
        setVisible(status);
    };
    const {dataDetail} = props;
    const copyHandle = () => {
        window._hmt.push(['_trackEvent', '千言数据详情', '分享']);
        message.success('链接已复制，快去分享吧');
    };
    return (
        <div className='detail_title_container'>
            <div className='detail_top'>
               <div className='detail_top_left'>
                    <strong className='detail_title'>{dataDetail.name}</strong>
                    <span className='detail_desc'>{dataDetail.description}</span>
                    <span className='detail_time'>发布时间：{formatDate(dataDetail.publishDate * 1000, true)}</span>
               </div>
               <div className='detail_top_right'>
                    <CopyToClipboard
                        text={dataDetail.downUrl}
                        onCopy={copyHandle}>
                        <span className='to_share'><img src={share_icons} alt=''/>分享</span>
                    </CopyToClipboard>
                   <span className='to_load' onClick={() => {
                        handleUserDetail(true);
                    }}><img src={load_icon} alt=''/>下载</span>
               </div>
            </div>
            <ul className='detail_card'>
                <li className='detail_card_li'>
                    <img src={detail_icon1} alt='' />
                    <span className='d_card_item'>
                        <strong>{dataDetail.taskName}</strong>
                        <span>任务类型</span>
                    </span>
                </li>
                <li className='detail_card_li'>
                    <img src={detail_icon2} alt='' />
                    <span className='d_card_item'>
                        <strong>{dataDetail.downTimes}</strong>
                        <span>下载量</span>
                    </span>
                </li>
                <li className='detail_card_li'>
                    <img src={detail_icon3} alt='' />
                    <span className='d_card_item'>
                        <strong>{dataDetail.size}</strong>
                        <span>数据集大小</span>
                    </span>
                </li>
                <li className='detail_card_li'>
                    <img src={detail_icon4} alt=''/>
                    <span className='d_card_item'>
                        <strong>{dataDetail.license === '0' ? '学术' : '商业'}</strong>
                        <span>使用权限</span>
                    </span>
                </li>
                <li className='detail_card_li'>
                    <img src={detail_icon5} alt='' />
                    <span className='d_card_item'>
                        <strong>{dataDetail.feature}</strong>
                        <span>特点</span>
                    </span>
                </li>
            </ul>
            <BaiduRule
                visible={visible}
                downUrl={dataDetail.downUrl}
                handleUserDetail={handleUserDetail} />
        </div>
    );
};

export default memo(DetailTitle);