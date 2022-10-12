import React, { memo } from 'react';
import { pageCLick } from '../../../utils/index';

const JoinYongerDom = memo(({ youthCommitteeList }) => {
    const { lists } = youthCommitteeList;
    return (
        <div className='lugeDataAuthContainer'>
            <h6 className='ab_title join_author_title'>青年学术委员<span>(按拼音排序)</span></h6>
            <ul className='luge_cards_list'>
                {lists && lists.map((item, index) => (
                    <li key={index} className='data_author'>
                        {item.url && <a
                            onClick={() => {
                                window._hmt.push(['_trackEvent', '千言学术委员会', `点击${item.name}`]);
                            }}
                            target='_blank'
                            rel="noopener noreferrer"
                            href={item.url}
                            className='data_author_a'>
                            <img src={item.icon} alt="" srcset="" />
                            <label>
                                {item.name}
                                {/* <i>等</i> */}
                            </label>
                            <span className='luge_word'>{item.source}</span>
                        </a>
                        }
                        {!item.url &&
                            <span className='data_author_a'>
                                <img src={item.icon} alt="" srcset="" />
                                <label>
                                    {item.name}
                                    {/* <i>等</i> */}
                                </label>
                                <span className='luge_word'>{item.source}</span>
                            </span>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
});

const LugeBuDaoShiDom = memo(({ lugeBudaoList }) => {
    const { lists } = lugeBudaoList;
    return (
        <div className='lugeDataAuthContainer'>
            <h6 className='ab_title'><i className='icon_about'></i>千言布道师</h6>
            <ul className='luge_cards_list'>
                {lists && lists.map((item, index) => (
                    <li key={index} className='data_author'>
                        {item.url && <a
                            onClick={() => {
                                window._hmt.push(['_trackEvent', '千言布道师', `点击${item.name}`]);
                            }}
                            target='_blank'
                            rel="noopener noreferrer"
                            href={item.url} className='data_author_a'>
                            <img src={item.icon} alt="" srcset="" />
                            <label>
                                {item.name}
                                {/* <i>等</i> */}
                            </label>
                            <span className='luge_word'>{item.source}</span>
                        </a>
                        }
                        {!item.url && <span className='data_author_a'>
                            <img src={item.icon} alt="" srcset="" />
                            <label>
                                {item.name}
                                {/* <i>等</i> */}
                            </label>
                            <span className='luge_word'>{item.source}</span>
                        </span>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
});


const XueshuList = memo(({ lists }) => {
    return (
        <div className='lugeDataAuthContainer'>
            <h6 className='ab_title'>
                <i className='icon_about'></i>千言学术委员会<span>(按拼音排序)</span></h6>
            <ul className='luge_cards_list'>
                {lists && lists.map((item, index) => (
                    <li key={index} className='data_author'>
                        {item.url && <a
                            onClick={() => {
                                window._hmt.push(['_trackEvent', '千言学术委员会', `点击${item.name}`]);
                            }}
                            target='_blank'
                            rel="noopener noreferrer"
                            href={item.url}
                            className='data_author_a'>
                            <img src={item.icon} alt="" srcset="" />
                            <label>
                                {item.name}
                                {/* <i>等</i> */}
                            </label>
                            <span className='luge_word'>{item.source}</span>
                        </a>
                        }
                        {!item.url &&
                            <span className='data_author_a'>
                                <img src={item.icon} alt="" srcset="" />
                                <label>
                                    {item.name}
                                    {/* <i>等</i> */}
                                </label>
                                <span className='luge_word'>{item.source}</span>
                            </span>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
});

const ExpertList = memo(({ expertList }) => {
    const { lists } = expertList;
    return (
        <div className='lugeDataAuthContainer'>
            <h6 className='ab_title'>
                <i className='icon_about'></i>千言技术专家
                <span>(按拼音排序)</span>
            </h6>
            <ul className='expertCardsList'>
                {
                    lists && lists.map((item, index) => (
                        <li className='expertCardItem' key={index}
                            onClick={
                                (e) => {
                                    pageCLick({
                                        pageUrl: item.url,
                                        eventName: '点击【文章】_千言技术专家'
                                    })
                                }
                            }
                        >
                            <div className='expertCardItemTop'>
                                <div className='expertPersonLF'>
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className='expertPersonRT'>
                                    <strong>{item.name}</strong>
                                    <span>{item.source}</span>
                                </div>
                            </div>
                            {((item.article && item.article.title) || (item.video && item.video.title)) &&
                                <div className='expertCardItemBottom'>
                                    {item.article && item.article.title &&
                                        <div className='expertCardArticle'
                                            onClick={
                                                (e) => {
                                                    e.stopPropagation();
                                                    pageCLick({
                                                        pageUrl: item.article.url,
                                                        eventName: '点击【文章】_千言技术专家'
                                                    })
                                                }
                                            }
                                        >
                                            <span className='articleTab'>文章</span>
                                            <span className='expertItemDesc'>{item.article.title}</span>
                                        </div>
                                    }
                                    {item.video && item.video.title &&
                                        <div className='expertCardVideo'
                                            onClick={
                                                (e) => {
                                                    e.stopPropagation();
                                                    pageCLick({
                                                        pageUrl: item.video.url,
                                                        eventName: '点击【文章】_千言技术专家'
                                                    })
                                                }
                                            }
                                        >
                                            <span className='videoTab'>视频</span>
                                            <span className='expertItemDesc'>{item.video.title}</span>
                                        </div>
                                    }
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
});

function lugeAuthor({ expertList, committeeList, youthCommitteeList, lugeBudaoList, type, hashStatus }) {
    const { lists } = committeeList;
    return (
        <>
            {hashStatus && <XueshuList {...{ lists }} />}
            {!hashStatus && <ExpertList {...{ expertList }} />}
            {type && hashStatus &&
                <JoinYongerDom {
                    ...{
                        youthCommitteeList,
                        hashStatus
                    }}
                />
            }
            {!type && <LugeBuDaoShiDom lugeBudaoList={lugeBudaoList} />}
        </>
    );
}

export default React.memo(lugeAuthor);
