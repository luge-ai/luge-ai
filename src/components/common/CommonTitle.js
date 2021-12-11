import React from 'react';
import task_bg_line from '@/pages/task/assets/task_bg_line.png';
const CommonTitle = props => {
    const {title} = props;
    return (
        <div className='taskItemContainer'>
            <img src={task_bg_line} alt='' />
            <div className='taskItem_about'>
                <strong>{title}</strong>
                <p>
                    目前，千言平台已经针对10个任务，汇集了来自14所高校和企业的36个开源数据集。
                </p>
            </div>
        </div>
    );
}

export default React.memo(CommonTitle);
