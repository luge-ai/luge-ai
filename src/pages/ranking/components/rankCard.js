import React, {useRef, useMemo, useState, memo} from 'react';
import { Link } from 'react-router-dom';
import {Pagination} from 'antd';
import { useDispatch } from 'react-redux';
import { ArrowRightOutlined } from '@ant-design/icons';
import Types from '../../../components/common/Types';
import {getRankList} from '../../../base/request';
import {actions} from '../../../store/actions';
import game_01 from '../../home/assets/game_01.png';
import game_02 from '../../home/assets/game_02.png';
import game_03 from '../../home/assets/game_03.png';


const RankCardItem = memo(props => {
    let {gamesMessNormalItem} = props;
    const imgs = [
        game_01,
        game_02,
        game_03
    ];
    const pushData = gamesMessNormalItem => {
        window._hmt.push(['_trackEvent', '排行榜', `${gamesMessNormalItem.matchName}-查看全部`]);
    };
    return (
        <div className='rank_cards_item'>
            <div className='rank_cards_head'>
                <strong>
                    <span className='rank_game_name'
                        title={gamesMessNormalItem.matchName}
                    >{gamesMessNormalItem.matchName}</span>
                    <i
                        className={
                            gamesMessNormalItem.gameType === '5'
                                ? 'game_nomal'
                                : 'game_theme'
                        }
                    >
                        {gamesMessNormalItem.type === '5'
                            ? '常规赛'
                            : '主题赛'}
                    </i>
                </strong>
                {/* <span>
                    更新时间：{gamesMessNormalItem.update}
                </span> */}
            </div>
            {gamesMessNormalItem.top.length > 0 &&
                <>
                    <ul className='ranks-list'>
                        {gamesMessNormalItem.top.map((item, index) => (
                            <li key={index}>
                                <img src={imgs[index]} alt='' />
                                {/* <img src={item.personUrl} className='game_person'/> */}
                                <div className='games_content'>
                                    <span className='rank_name'>
                                        {item.teamName || '团队名称更新中...'}
                                    </span>
                                    <span className='rank_score'>Score: {item.score}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {gamesMessNormalItem.matchId !== '62' &&
                        <Link
                            onClick={
                                () => {
                                    pushData(gamesMessNormalItem);
                                }
                            }
                            className='icon_total'
                            to={`/luge/ranking/rankDetail?matchId=${gamesMessNormalItem.matchId}&&roundId=${gamesMessNormalItem.round}`}>全部<ArrowRightOutlined />
                        </Link>
                    }
                    {gamesMessNormalItem.matchId === '62' &&
                        <a
                            className='icon_total'
                            onClick={
                                () => {
                                    pushData(gamesMessNormalItem);
                                }
                            }
                            href='https://aistudio.baidu.com/aistudio/competition/detail/62/0/acl-leaderboard'>全部<ArrowRightOutlined />
                        </a>
                    }
                </>
            }
            {
                gamesMessNormalItem.top.length === 0 &&
                <>
                    <div className='rank_no_data'>
                        <span class="spanItem checked">
                            <span class="spanWord">期待您来打榜</span>
                        </span>
                    </div>
                    <a
                        onClick={
                            () => {
                                window._hmt.push(['_trackEvent', '排行榜', `${gamesMessNormalItem.matchName}-去报名`]);
                            }
                        }
                        href={gamesMessNormalItem.url}
                        rel="noopener noreferrer" target='_blank'
                        className='icon_total'>去报名<ArrowRightOutlined /></a>
                </>
            }
        </div>
    );
});


function RankCard() {
    const taskType = useRef({
        taskId: ''
    });
    const [rankData, setRankData] = useState({});
    const dispatch = useDispatch();
    const dealChange = async params => {
        const paramsObj = taskType.current.taskId ? {taskId: taskType.current.taskId} : {};
        const res = await getRankList({...paramsObj, ...params});
        setRankData(res.data);
    };
    useMemo(async () => {
        dispatch(actions.getTaskList());
        dealChange();
    }, [dispatch]);
    const changePage = async page => {
        const params = {page};
        if (taskType.current.taskId) {
            params.taskId = taskType.current.taskId;
        }
        const res = await getRankList(params);
        setRankData(res.data);
        document.documentElement.scrollTop = 0;
        window._hmt.push(['_trackEvent', '排行页', `分页`]);
    };
    return (
        <div className='rankCardContainer'>
            <div className='tasksTop rankTop'>
                <Types
                    taskType={taskType}
                    rankStatus={true}
                    dealChange={dealChange}
                />
            </div>
            <div className='rank_cards'>
                <div className='rank_cards_content'>
                    {rankData.list && rankData.list.map((gamesMessNormalItem, index) => (
                        <RankCardItem
                            gamesMessNormalItem={gamesMessNormalItem}
                            key={index}/>
                    ))}
                    {rankData.total > 9 && <div className='rank_page'>
                        <Pagination
                            total={rankData.total}
                            defaultCurrent={1}
                            onChange={changePage}
                        />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default React.memo(RankCard);
