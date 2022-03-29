import React, {useEffect, memo, useState, useMemo} from 'react';
import {yearCurrent, yearData, gamesShowList} from './config';
import './index.less';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
import {ArrowRightOutlined} from '@ant-design/icons';

const HistoryMatch =  memo(() => {
    const [currentIndex, setCurrentIndex] = useState(2021);
    const [gameNum, setGameNum] = useState(0);
    const activeData = useMemo(() => {
        return yearCurrent(currentIndex);
    }, [currentIndex]);
    const [gameItem, setGameItem] = useState(activeData[0].lists[0]);
    const setActive = (gameItem, gameNum) => {
        setGameNum(gameNum);
        setGameItem(gameItem);
    }
    return (
        <div className='history_container'>
            <div className='history_container_content'>
                <strong>往届赛事</strong>
                <div className='history_match_lists'>
                    <div className='history_match_left'>
                        {
                            yearData.map(item => (
                                <span
                                    key={item}
                                    onClick={() => {
                                        setCurrentIndex(item);
                                        setGameNum(0);
                                        setGameItem(yearCurrent(item)[0].lists[0]);
                                    }}
                                    className={currentIndex === item ? 'active' : ''}>LIC{item}<i>{item}</i></span>
                            ))
                        }
                    </div>
                    <div className='history_match_right'>
                        <div className='match_card_desc'>
                            <div className='match_card'>
                                <strong>{gameItem.name}</strong>
                                <span>{gameItem.desc}</span>
                            </div>
                            <div className='mcard_list'>
                                {
                                    gameItem.rankList.map(item => (
                                        <div className='card_rank'>
                                            <span className={['card_rank_icon', item.cls].join(' ')}></span>
                                            <div className='card_rank_dt'>
                                                <strong>{item.name}</strong>
                                                <span>{item.team}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {activeData.map(item => (
                            <ul className='history_match_card_lists'>
                                {item.lists.map((subItem, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setActive(subItem, index)
                                        }}
                                        className={gameNum === index ? 'active' : ''}
                                    >
                                        <div className='match_card'>
                                            <span>{subItem.name}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    {activeData[0].link && <div className='match_web'>
                        <a href={activeData[0].link} target='_blank' rel="noreferrer" >
                            <span className='match_web_link'>{currentIndex}年赛事官网<i></i></span>
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    );
})

const MatchDetails = memo(() => {
    const [checkIndex, setCheckIndex] = useState(0);
    return (
        <div className='match-detail-content'>
            <div className='match-content-top'>
                <span className='match_detail_title'>
                    <strong>2022<i className='match_status'>正在进行中</i></strong>
                    语言与智能技术竞赛
                </span>
                <span className='match_detail_award'>
                    <span className='match_award'>
                        <span className='num-award-title'>总奖池</span>
                        <span className='num-award'>¥220,000</span>
                    </span>
                    <a href='http://lic2022.cipsc.org.cn/' className='match_btn' target="_blank"><span className='match_btn_inner'>立即查看<ArrowRightOutlined /></span></a>
                </span>
            </div>
            <ul className='match_detail_ul'>
                {
                    gamesShowList.map((item, index) => 
                        <li
                            onMouseEnter={() => {
                                setCheckIndex(index);
                            }}
                            className='match__detail_item'
                            key={index}>
                                <div className='img-detail'>
                                    <img src={item.imgUrl} alt=''/>
                                </div>
                                <span className='match_detail_title'>{item.title}</span>
                                <span className='match_desc'>{item.desc}</span>
                                {/* <span>{item.time}</span> */}
                        </li>
                    )
                }
            </ul>
            <div className='bg-right-small'></div>
        </div>
    )
});

const MatchCom = () => {
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '聚合页']);
    }, []);
    return (
        <div className='taskCardContainer match-content'>
            <div className='banner-display'></div>
            <Nav game={true} />
            <div className='match_container'>
                {/* <MatchBanner /> */}
                <MatchDetails />
                <HistoryMatch />
            </div>
            <Footer />
        </div>
    );
}

export default memo(MatchCom);