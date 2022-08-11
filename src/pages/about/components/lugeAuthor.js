import React, { memo } from 'react';

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

function lugeAuthor({ committeeList, youthCommitteeList, lugeBudaoList, type }) {
    const { lists } = committeeList;
    return (
        <>
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
            {type && <JoinYongerDom youthCommitteeList={youthCommitteeList} />}
            {!type && <LugeBuDaoShiDom lugeBudaoList={lugeBudaoList} />}
        </>
    );
}

export default React.memo(lugeAuthor);
