import React from 'react';
function Banner() {
    return (
        <div className='taskItemContainer'>
            <strong>排行</strong>
            <p>目前，千言平台已经针对10个任务，汇集了来自14所高校和企业的36个开源数据集。</p>
        </div>
    );
}

export default React.memo(Banner);
