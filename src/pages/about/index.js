import React, { useEffect, useMemo, useState, memo } from 'react';
import AboutItem from './components/aboutItem';
import './index.less';
import { getJoinList } from '../../base/request';

const pageCLick = ({ pageUrl, eventName }) => {
    if (pageUrl) {
        window.open(pageUrl);
        window._hmt.push(['_trackEvent', '千言', eventName]);
    }
}

const ContentCom = memo(({ title, pageUrl, desc, classAdd, btnName }) => {
    return (
        <div className={['contentCom', classAdd].join(' ')}>
            <strong className='contentComTitle'>{title}</strong>
            <div className='contentComDesc' {...{
                dangerouslySetInnerHTML: {
                    __html: desc
                }
            }}></div>
            <span className='contentComRdm' onClick={
                () => {
                    pageCLick({ pageUrl, eventName: `关于千言推荐【${title}】` })
                }
            }>{btnName}</span>
        </div >
    );
});

const Question = memo(({ questionList: { lists } }) => {
    return (
        <div className='questionContainer'>
            <strong className='questionTitle'>常见问题</strong>
            <div className='questionContent'>
                {
                    lists && lists.map(({ title, desc, pageUrl }, index) => (
                        <div className={'questionItem'} key={index} onClick={() => {
                            pageCLick({
                                pageUrl,
                                eventName: '点击【常见问题】'
                            })
                        }}>
                            <strong>{title}</strong>
                            <div classname='questionDesc'>{desc}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
});

const LotsMatch = memo(({ matchOrShares }) => {
    return (
        <div className='lotsMatch'>
            <div className='lotsContent'>
                {
                    matchOrShares && matchOrShares.map((item, index) => (
                        <div className='lotsContentItem' key={index} onClick={
                            () => {
                                pageCLick({ pageUrl: item.url, eventName: `点击${item.title}】` })
                            }
                        }>
                            <img src={item.icon} alt="" className='lotsIconData' />
                            <strong className='lotsName'>{item.title}</strong>
                            <div className='lotsItemDesc'  {...{
                                dangerouslySetInnerHTML: {
                                    __html: item.desc
                                }
                            }}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
});


const AboutLuge = memo(() => {
    const [applyEnter, setapplyEnter] = useState({});
    const [questionList, setQuestionList] = useState({});
    const [lugeRecommends, setLugeRecommends] = useState([]);
    const [matchOrShares, setMatchOrShares] = useState([]);
    const [topCard, setTopCard] = useState({});
    const getInitData = async () => {
        const { result: { pageData: { applyEnter, questionList, lugeRecommends, matchOrShares, topCard } } } = await getJoinList();
        setapplyEnter(applyEnter);
        setQuestionList(questionList);
        setLugeRecommends(lugeRecommends.lists);
        setMatchOrShares(matchOrShares.lists);
        setTopCard(topCard);
    }
    useMemo(() => {
        getInitData();
    }, []);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '关于千言']);
    }, []);
    return (
        <div className='taskCardContainer'>
            <AboutItem {...{ applyEnter, topCard }} />
            {
                lugeRecommends && lugeRecommends.map((item, index) => (
                    <ContentCom {...item} key={index} />
                ))
            }
            <LotsMatch {...{ matchOrShares }} />
            <Question {...{ questionList }} />
        </div>
    );
});

export default AboutLuge;