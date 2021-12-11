import React, { memo, useState, useMemo, useEffect } from 'react';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
import { getGameList } from '../../base/request';
import {formatDate} from '../../utils/index';
import { Pagination } from 'antd';
import './index.less';
import CommonTitle from '../../components/common/CommonTitle';

const tabs = [
    {
        name: '全部比赛',
        type: ''
    },
    {
        name: '主题赛',
        type: 10
    },
    {
        name: '常规赛',
        type: 5
    }
];

const GameCard = memo(() => {
    const [gameList, setGameList] = useState({});
    useMemo(async () => {
        const res = await getGameList({});
        setGameList(res.data);
    }, []);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '比赛页']);
    }, []);
    const [tabStatus, setTabStatus] = useState('');
    const changTab = async type => {
        setTabStatus(type);
        const res = await getGameList(type ? { type } : {});
        setGameList(res.data);
        window._hmt.push(['_trackEvent', '比赛', `切换主题`]);
    };
    const changePage = async page => {
        const params = { page };
        if (tabStatus) {
            params.type = tabStatus;
        }
        const res = await getGameList(params);
        setGameList(res.data);
        document.documentElement.scrollTop = 0;
        window._hmt.push(['_trackEvent', '比赛', `分页`]);
    };
    return (
        <div className='gameCardContainer'>
            <div className='tasksTop gameTabs'>
                {tabs.map((item, index) => (
                    <span
                        key={index}
                        className={[
                            'spanItem',
                            tabStatus === item.type ? 'checked' : ''
                        ].join(' ')}
                        onClick={() => {
                            changTab(item.type);
                        }}
                    >
                        <span className='spanWord'>{item.name}</span>
                    </span>
                ))}
            </div>
            <ul className='gameCards'>
                {gameList.list &&
                    gameList.list.map((item, index) => (
                        <li key={index}>
                            {new Date().getTime() > item.endTime * 1000 && <span className='isEndStatus'>已结束</span>}
                            <a href={item.url}
                                target='_blank'
                                rel="noopener noreferrer"
                                onClick={() => {
                                    window._hmt.push(['_trackEvent', '比赛', `点击具体比赛：${item.name}`]);
                                }}>
                                <div className='gameCardItem'>
                                    <img src={item.logo} alt=''/>
                                    <div>
                                        <span className='title' title={item.name}>
                                            {item.name}
                                        </span>
                                        <span className='timer'>{`${formatDate(item.beginTime * 1000)}-${formatDate(item.endTime * 1000)}`}</span>
                                        <span className='gameBottom'>
                                            <span className='gameNum'>
                                                {item.count}人已参与
                                            </span>
                                            {item.type === '5' && (
                                                <span className='gameTheme normalColor'>
                                                    常规赛
                                                </span>
                                            )}
                                            {item.type === '10' && (
                                                <span className='gameTheme themeColor'>
                                                    主题赛
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
            </ul>
            {gameList.total > 9 && (
                <div className='game_page'>
                    <Pagination
                        total={gameList.total}
                        onChange={changePage}
                        defaultCurrent={1}
                    />
                </div>
            )}
        </div>
    );
});

const GameIndex = () => {
    return (
        <div className='taskCardContainer'>
            <Nav />
            {/* <Back /> */}
            <CommonTitle title='比赛'/>
            <GameCard />
            <Footer />
        </div>
    );
};

export default React.memo(GameIndex);
