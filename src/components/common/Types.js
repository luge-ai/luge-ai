import React, { useState } from 'react';
import {actions} from '../../store/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './index.less';

function Types(props) {
    let { taskType, dealChange, changeTab } = props;
    const [checked, setChecked] = useState(0);
    const dispatch = useDispatch();
    const checkTab = (index, taskId) => {
        setChecked(index);
        if (changeTab) {
            changeTab();
        }
        if (taskType.current.taskId === taskId) {
            return;
        }
        if (taskType) {
            taskType.current.taskId = taskId;
        }
        if (!props.rankStatus) {
            dispatch(actions.getDataList({taskId}));
            window._hmt.push(['_trackEvent', '千言', '点击任务类型查询数据集']);
            return;
        }
        dealChange();
        window._hmt.push(['_trackEvent', '千言', '点击任务类型查询排行']);
    };
    const typesList = useSelector(item => item.dataList.taskList, shallowEqual);
    return (
        <>
            {typesList && typesList.map((item, index) => (
                <span
                    key={index}
                    className={[
                        'spanItem',
                        checked === index ? 'checked' : '',
                    ].join(' ')}
                    onClick={() => {
                        checkTab(index, item.taskId);
                    }}
                >
                    <span className='spanWord'>
                        {item.name}
                    </span>
                </span>
            ))}
        </>
    );
}

export default React.memo(Types);
