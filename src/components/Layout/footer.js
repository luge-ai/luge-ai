import React, { memo } from 'react';

// interface Props {
//     Footer: string[];
// }

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='footerTop'>
                    <span className='footerLogo'></span>
                    <div className='footerLink'>
                        <span>
                            中国计算机学会
                        </span>
                        <span>
                            中国中文信息学会
                        </span>
                        <span>
                            飞桨AI studio
                        </span>
                    </div>
                </div>
                <p className='footerItem'>
                    <span>该数据仅供研究、学习用途，禁止商用，使用时请注明数据集作者出处；该数据集为NLP贡献者资源整理，所有权归原作者所有，如果侵权，请联系删除。</span>
                    <span>Copyright(c)2020</span>
                </p>
            </div>
        </div>
    );
};

export default memo(Footer);
