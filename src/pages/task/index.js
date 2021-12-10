import React, {memo, useMemo, useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './index.less';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
import {actions} from '../../store/actions';

const TaskItem = memo(() => {
    return (
        <div className='taskItemContainer'>
            <strong>任务</strong>
            <p>
                目前，千言平台已经针对10个任务，汇集了来自14所高校和企业的36个开源数据集。
            </p>
        </div>
    );
});

const TaskCard = memo(() => {
    const taskCards = useSelector(item => item.dataList.taskList, shallowEqual);
    const handleToDetail = item => {
        window._hmt.push(['_trackEvent', '任务', `点击具体任务：${item.name}`]);
        window.location.href = `/luge/task/taskDetail?taskId=${item.taskId}`;
    };
    return (
        <div className='taskCard'>
            <ul className='cardLists'>
                {taskCards && taskCards.map(item =>
                    (item.taskId &&
                        <li key={item.taskId}
                            onClick={() => {
                                handleToDetail(item);
                            }}
                        >
                        <div className='initItem'>
                            <img src={item.logo} alt='' />
                            <div className='cardContent'>
                                <strong>{item.name}</strong>
                                <span>
                                    {item.datasetCnt}
                                    <i className='data_icon'></i>
                                </span>
                            </div>
                        </div>
                        <div className='hoverItemShow'>
                            <div className='hoverItemShowContent'>
                                <strong className='hoverTitle'>{item.name}</strong>
                                <span className='hoverNum'>
                                    {item.datasetCnt}
                                    <i className='data_icon'></i>
                                </span>
                                <div className='hoverDesc'>{item.description}</div>
                            </div>
                        </div>
                    </li>)
                )}
                <li className='moreTask'>
                    <div className='moreTaskItem'>
                        <div className='moreTop'>
                            <div className='taskBtn'></div>
                        </div>
                        <a
                            onClick={
                                () => {
                                    window._hmt.push(['_trackEvent', '更多拓展任务', `点击联系我们`]);
                                }
                            }
                            className='moreBottom'
                            href="mailto:luge_ai@126.com">
                            <span>联系我们</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
});

function TaskIndex() {
    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(actions.getTaskList({isDetail: 1}));
    }, [dispatch]);
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '任务']);
    }, []);
    return (
        <div className='taskCardContainer'>
            <Nav />
            {/* <Back /> */}
            <TaskItem />
            <TaskCard />
            <Footer />
        </div>
    );
}

export default React.memo(TaskIndex);
