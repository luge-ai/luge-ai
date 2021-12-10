import React from 'react';

const content = [
    '千言希望有更多的数据集作者能够参与共建千言项目，共同推动中文信息处理技术的进步，',
    '建设世界范围的中文信息处理影响力。未来3年，千言希望面向20个任务，收集100个中文自然语言处理数据集。',
];
function vision() {
    return (
        <div className='visionContainer'>
            <h6>我们的愿景</h6>
            <p>{content}</p>
            <a
                onClick={() => {
                    window._hmt.push(['_trackEvent', '关于千言', `去看任务`]);
                }}
                href='/luge/task' className='to_task_list'>去看任务</a>
        </div>
    );
}

export default React.memo(vision);
