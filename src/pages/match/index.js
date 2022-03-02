import React, {useEffect, memo, useState} from 'react';
import {ArrowRightOutlined} from '@ant-design/icons'
import {yearCurrent, yearData} from './config';
import './index.less';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';

const MatchBanner = memo(() => {
    return (
        <div className='match_banner_container'>
            <div className='match_left'>
                <span className='match_banner_desc'>简介</span>
                <strong className='match_banner_title'>语言与智能技术竞赛</strong>
                <div className='match_intoduce'>提供面向真实应用场景的数据集和复用挑战性的任务设定促进学术研究与交流，提升语言理解与人机交互智能水平，推动语言与智能领域技术发展和应用</div>
                <span className='match_banner_icon'></span>
            </div>
            <div className='match_right'>
                <div className='match_right_img'></div>
            </div>
        </div>
    );
});

const MetchDetail = memo(() => {
    return (
        <div className='match_detail'>
            <div className='match_detail_left'>
                <span className='match_detail_title'>
                    <strong>2022<i className='match_status'>正在进行中</i></strong>
                    语言与智能技术竞赛
                </span>
                <div className='match_time'>
                    <span>启动时间：2022.03.10</span>
                    <span>累计报名人数：1288人</span>
                </div>
                <span className='match_award'><span>总奖池</span>¥300,000</span>
                <a href='/nac' className='match_btn'>
                    <span className='match_btn_inner'>立即查看<ArrowRightOutlined /></span>
                </a>
            </div>
            <div className='match_detail_right'>
                <ul className='match_detail_ul'>
                    <li className='match__detail_item'>
                        <div className='match_detail_title'>机器阅读理解</div>
                        <div className='match_detail_show'>
                            <div className='match_detail_title'>机器阅读理解</div>
                            <div className='match_desc'>
                                提供面向真实应用场景的数据集和复用挑战性的任务设定
                                促进学术研究与交流，提升语言理解与人机交互智能水平，推动语言与智能领域
                            </div>
                            <span>2022.02.25-2022.03.25</span>
                        </div>
                    </li>
                    <li className='match__detail_item'>
                        <div className='match_detail_title'>多技能对话</div>
                        <div className='match_detail_show'>
                            <div className='match_detail_title'>多技能对话</div>
                            <div className='match_desc'>
                                提供面向真实应用场景的数据集和复用挑战性的任务设定
                                促进学术研究与交流，提升语言理解与人机交互智能水平，推动语言与智能领域
                            </div>
                            <span>2022.02.25-2022.03.25</span>
                        </div>
                    </li>
                    <li className='match__detail_item'>
                        <div className='match_detail_title'>多形态信息抽取</div>
                        <div className='match_detail_show'>
                            <div className='match_detail_title'>多形态信息抽取</div>
                            <div className='match_desc'>
                                提供面向真实应用场景的数据集和复用挑战性的任务设定
                                促进学术研究与交流，提升语言理解与人机交互智能水平，推动语言与智能领域
                            </div>
                            <span>2022.02.25-2022.03.25</span>
                        </div>
                    </li>
                    <li className='match__detail_item'>
                        <div className='match_detail_title'>机器阅读理解</div>
                        <div className='match_detail_show'>
                            <div className='match_detail_title'>机器阅读理解</div>
                            <div className='match_desc'>
                                提供面向真实应用场景的数据集和复用挑战性的任务设定
                                促进学术研究与交流，提升语言理解与人机交互智能水平，推动语言与智能领域
                            </div>
                            <span>2022.02.25-2022.03.25</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
});


const HistoryMatch =  memo(() => {
    const [currentIndex, setCurrentIndex] = useState(2020);
    
    return (
        <div className='history_container'>
            <strong>往届赛事</strong>
            <div className='history_match_lists'>
                <div className='history_match_left'>
                    {
                        yearData.map(item => (
                            <span
                                onClick={() => {
                                    setCurrentIndex(item);
                                }}
                                className={currentIndex === item ? 'active' : ''}>{item}</span>
                        ))
                    }
                </div>
                <div className='history_match_right'>
                   {yearCurrent(currentIndex).map(item => (
                    <>
                        <ul className='history_match_card_lists'>
                            {item.lists.map(subItem => (
                                <li className='active'>
                                    <div className='match_card'>
                                        <strong>{subItem.name}</strong>
                                        <span>{subItem.desc}</span>
                                    </div>
                                    <div className='mcard_list'>
                                        {
                                            subItem.rankList.map(rankItem => (
                                                <div className='card_rank'>
                                                    <span className='card_rank_icon'></span>
                                                    <div className='card_rank_dt'>
                                                        <strong>{rankItem.name}</strong>
                                                        <span>{rankItem.team}</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='match_web'>
                            <a href={item.link} target='_blank' rel="noreferrer" >
                                <span className='match_web_link'>{item.current}年官网<ArrowRightOutlined /></span>
                            </a>
                        </div>
                    </>
                   ))}
                </div>
            </div>
        </div>
    );
})

const MatchCom = () => {
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '聚合页']);
    }, []);
    return (
        <div className='taskCardContainer'>
            <Nav />
            <div className='match_container'>
                <MatchBanner />
                <div className='match_border' />
                <MetchDetail />
                <div className='match_border' />
                <HistoryMatch />
            </div>
            <Footer />
        </div>
    );
}

export default memo(MatchCom);