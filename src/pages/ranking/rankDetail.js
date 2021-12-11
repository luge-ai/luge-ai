import React, {useMemo, useState, useEffect} from 'react';
import { Table } from 'antd';
import {getRankDetail} from '../../base/request';
import {parseUrl, formatDate} from '../../utils/index';
import './index.less';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
import game_01 from '../home/assets/game_01.png';
import game_02 from '../home/assets/game_02.png';
import game_03 from '../home/assets/game_03.png';
// import {ArrowDownOutlined} from '@ant-design/icons';
function RankDetail() {
    const params = useMemo(() => {
        return parseUrl(window.location.hash);
    }, []);
    const [rankDetailData, setRankDetailData] = useState([]);
    const [gameData, setGameData] = useState({});
    const [columns, setColumns] = useState([
        {
            title: '排行',
            dataIndex: 'rank',
            key: 'rank',
            // fixed: 'left',
            width: 70
        },
        {
            title: '参赛团队',
            dataIndex: 'teamName',
            key: 'teamName',
            // fixed: 'left',
            // width: 180
        }
        // {
        //     title: 'Score',
        //     dataIndex: 'score',
        //     key: 'score',
        //     // fixed: 'left',
        //     width: 80
        // }
    ]);
    useMemo(() => {
        getRankDetail(params).then(res => {
            const dataLists = [];
            const {list} = res.data;
            if (![65, 66, 67, 105].includes(+params.matchId)) {
                columns.push({
                    title: 'Score',
                    dataIndex: 'score',
                    key: 'score'
                });
            }
            for (let key in JSON.parse(list[0].result)) {
                if (key !== 'Score' && key !== 'score') {
                    columns.push({
                        title: key,
                        dataIndex: key,
                        key: key
                        // width: 130
                    });
                }
            }
            columns.push({
                title: '提交时间',
                dataIndex: 'submitTime',
                key: 'submitTime',
                // fixed: 'right',
                width: 110
            });
            setColumns(columns);
            for (let key in list) {
                const jsonRes = JSON.parse(list[key].result);
                dataLists[key] = {
                    rank: list[key].rank,
                    teamName: list[key].teamName,
                    submitTime: formatDate(list[key].submitTime * 1000),
                    score: list[key].score,
                    ...jsonRes
                };
            }
            if (dataLists[0]) {
                dataLists[0].rank = <img src={game_01} alt='' />;
            }
            if (dataLists[1]) {
                dataLists[1].rank = <img src={game_02} alt='' />;
            }
            if (dataLists[2]) {
                dataLists[2].rank = <img src={game_03} alt='' />;
            }
            setRankDetailData(dataLists);
            setGameData({
                name: res.data.name,
                description: res.data.description,
                url: res.data.url
            });
        });
    }, [columns, params]);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '排行榜详情']);
    }, []);
    return (
        <div className='taskCardContainer rankDetail_bg'>
            <div className='rankDetail_add_content'>
                <Nav />
                <div className='rank_detail_container'>
                    <div className='rank_detail_head'>
                        <h6>{gameData.name}</h6>
                        <span>
                            {gameData.description}
                        </span>
                        <a href={gameData.url}
                        rel="noopener noreferrer" target="_blank" >查看比赛</a>
                    </div>
                    <div className='rank_detail_body'>
                        <p className='rank_help'><i className='icon_rank_help'></i>根据参赛情况实时更新</p>
                        {rankDetailData.length > 0 &&
                            <Table
                                columns={columns}
                                dataSource={rankDetailData}
                                pagination={false}
                            />
                        }
                        {/* <div className='load_more_content'>
                            <Button className='rank_load_more'>
                                加载更多{' '}
                                <ArrowDownOutlined
                                    className='icon_right_dt'
                                    style={{
                                        fontSize: '8px',
                                        color: '#fff',
                                        marginLeft: '6px',
                                    }}
                                />
                            </Button>
                        </div> */}
                    </div>
                    {/* <div className='ranks_bottom'>
                        <span className='ranks_bottom_left'>
                            <ArrowLeftOutlined
                                className='ranks_default_icon'
                                style={{ marginRight: '9px' }}
                            />
                            阅读理解排行榜
                        </span>
                        <span className='ranks_bottom_right'>
                            语义理解排行榜
                            <ArrowRightOutlined
                                className='ranks_default_icon'
                                style={{ marginLeft: '9px' }}
                            />
                        </span>
                    </div> */}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default React.memo(RankDetail);
