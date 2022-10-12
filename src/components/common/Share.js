import React, { memo } from 'react';
// import { BackTop } from 'antd';
import './index.less';

const Share = props => {
    const { backTop } = props;
    return (
        <div className='share_right'>
            {/* <div className='share_right_top'>
                <span><i className='icon_help'></i></span>
                <span><i className='icon_pencil'></i></span>
                <span><i className='icon_phone'></i></span>
            </div> */}
            <div
                className='share_right_bottom'
                onClick={backTop}>
                <span className='icon_top'></span>
            </div>
        </div>
    );
};

export default memo(Share);