import React, { useState } from 'react';
import { actions } from '../../store/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './index.less';

function Types(props) {
    let { type, tabType } = props;
    const [checked, setChecked] = useState(1);
    const dispatch = useDispatch();
    const {
        taskId
    } = useSelector(
        ({
            dataList: { taskId }
        }) => ({ taskId }),
        shallowEqual
    );
    const checkTab = (index, taskNewId) => {
        setChecked(index);
        if (taskNewId === taskId) {
            return;
        }
        dispatch({
            type: 'datalist',
            payload: {
                taskId: taskNewId
            }
        });
        if (!props.rankStatus) {
            dispatch(actions.getDataList({ taskId: taskNewId, type: tabType }));
            window._hmt.push(['_trackEvent', '千言', '点击任务类型查询数据集']);
            return;
        }
        // dealChange();
        window._hmt.push(['_trackEvent', '千言', '点击任务类型查询排行']);
    };
    const typesList = useSelector(item => item.dataList.taskList, shallowEqual);
    return (
        <>
            {typesList && typesList.map((item, index) => {
                return (
                    ((type === 'selected' && item.name !== '全部任务') || type !== 'selected') &&
                    <span
                        key={index}
                        className={
                            [
                                'spanItem',
                                checked === index ? 'checked' : '',
                            ].join(' ')
                        }
                        onClick={() => {
                            checkTab(index, item.taskId);
                        }}
                    >
                        <span className='spanWord'>
                            {item.name}
                        </span>
                    </span>
                )

            })
            }
        </>
    );
}

export default React.memo(Types);
