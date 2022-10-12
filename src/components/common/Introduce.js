import React, { memo } from "react";
const cardsDataList = (applyEnter) => {
    return [
        {
            num: (<strong className='join_num_title'>{applyEnter.taskNum}</strong>),
            type: '任务',
        },
        {
            num: (<strong className='join_num_title'>{applyEnter.dataset}</strong>),
            type: '中文开源数据集',
        },
        {
            num: <i className='common_data'></i>,
            type: '统一数据格式和评测',
        },
        {
            num: <i className='common_system'></i>,
            type: '提供基线系统',
        },
    ]
};
export default memo(({ applyEnter }) => {
    return (
        <div className='join_intro_container'>
            <div className='join_intro_title_area'>
                <strong className='join_intro_strong_title'>千言简介</strong>
                <icon className='join_intro_strong_logos'></icon>
            </div>
            <div className='join_intro_lists_words'>
                <p><strong>千言</strong>是由百度联合中国计算机学会、中国中文信息学会共同发起的面向自然语言处理的开源数据集项目，携手高校和企业的数据资源研发者共同建设中文开源数据集，旨在推动中文信息处理技术的进步。</p>
                {/* <p><strong>千言</strong>开源数据集项目自 2020 年 8 月发布以来，吸引来自清华、哈工大、中科院、美团、腾讯、OPPO 等<span>近20家</span>企业和高校的数据集作者加入共同建设。目前，千言已经针对十余个任务，汇集了<span>近50个</span>开源数据集。</p>
                <p><strong>千言</strong>还推动多项NLP评测，开设基于数据集的“主题赛”、“常规赛”<span>近30场</span>，累计近3万人次NLP开发者参与其中，数据集下载量累计<span>近8万</span>次。</p> */}
            </div>
            <div className='join_luge_data_num'>
                {cardsDataList(applyEnter).map((item, index) => (
                    <span key={index} className='join_data_item'>
                        {item.num}
                        <span className='join_data_item_word'>{item.type}</span>
                    </span>
                ))}
            </div>
        </div>
    );
});