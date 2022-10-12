import React, { memo } from 'react';
import Types from '../../../components/common/Types';

const TaskTypes = props => {
    const { taskType, tabType } = props;
    return (
        <div className='taskTotal'>
            <div className='tasksTopContainer'>
                <div className="tasksTop">
                    <Types taskType={taskType} tabType={tabType} />
                </div>
            </div>
        </div>
    );
};

export default memo(TaskTypes);
