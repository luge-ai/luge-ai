import React, { memo } from 'react';
import Types from '../../../components/common/Types';

const TaskTypes = props => {
    const { typesRef, leftRef, rightRef, taskType, changeTab } = props;
    const scrollContent = sign => {
        if (sign === 'right') {
            window._hmt.push(['_trackEvent', '任务类型', `点击右边箭头`]);
            typesRef.current.style = 'transform: translateX(-240px)';
            rightRef.current.style.display = 'none';
            leftRef.current.style.display = 'flex';
        } else {
            window._hmt.push(['_trackEvent', '任务类型', `点击左边箭头`]);
            typesRef.current.style = 'transform: translateX(0px)';
            leftRef.current.style.display = 'none';
            rightRef.current.style.display = 'flex';
        }
        // console.log(sign);translateX(-88px)
    };
    return (
        <div className='taskTotal'>
            <div className='tasksTopContainer'>
                <span className='tk_icon left_icon'
                    onClick={() => {
                        scrollContent('left');
                    }} ref={leftRef}><i></i></span>
                <div className="tasksTop" ref={typesRef}>
                    <Types taskType={taskType} changeTab={changeTab} />
                </div>
                <span className='tk_icon right_icon'
                    onClick={() => {
                        scrollContent('right');
                    }}
                    ref={rightRef}
                ><i></i></span>
            </div>
        </div>
    );
};

export default memo(TaskTypes);
