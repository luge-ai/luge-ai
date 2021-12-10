import React from 'react';
import codeUrl from '../assets/code.png';

function Invitation() {
    return (
        <div className='invitation_container'>
            <div className='invitation'>
                <div className='invitation_left'>
                    <h6>就是现在</h6>
                    <div className='invitation_build'>
                        与我们一起共建千言，共同推动中文信息处理技术的进步，建设世界范围的中文信息处理影响力。
                    </div>
                    <div className='invitation_tags'>
                        <span>将您的数据集加入已有任务</span>
                        <span>增加新的任务并加入您的数据集</span>
                        <span>提出更多宝贵意见</span>
                        <a
                            href="mailto:luge_ai@126.com">
                            <i className='icon_email'></i>luge_ai@126.com
                        </a>
                        {/* <span><i className='icon_email'></i>luge_ai@126.com</span> */}
                    </div>
                </div>
                <div className='invitation_right'>
                    <div className='code_show'>
                        <div className='code_img_pd'>
                            <img src={codeUrl} className='codeImg' alt='' />
                        </div>
                        <span className='code_title'><i></i>扫码加入千言交流群</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Invitation);
