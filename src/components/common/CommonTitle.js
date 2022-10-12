import React from 'react';
import task_bg_line from '@/pages/task/assets/task_bg_line.png';
const CommonTitle = props => {
    const { title, word, enterWeb, applyEnter, desc } = props;
    return (
        <div className='taskItemContainer'>
            <img src={task_bg_line} alt='' />
            <div className='taskItem_about'>
                <strong>{title}</strong>
                <p {...{
                    dangerouslySetInnerHTML: {
                        __html: desc || word
                    }
                }}>
                </p>
            </div>
            {enterWeb && enterWeb({ applyEnter })}
        </div>
    );
}

export default React.memo(CommonTitle);
