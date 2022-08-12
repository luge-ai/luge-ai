import React from 'react';
// import {ArrowDownOutlined} from '@ant-design/icons';
import luge_expert_user from '../assets/luge_expert_user.png';
import use_luge_data from '../assets/use_luge_data.png';
import common_question from '../assets/common_question.png';

const quickList = [
    {
        url: 'https://aistudio.baidu.com/paddle/forum/topic/show/1729200',
        question: '如何加入千言技术专家？',
        desc: '千言技术专家是什么？有哪些申请条件和专属权益？如何申请？',
        img: luge_expert_user
    },
    {
        url: 'https://aistudio.baidu.com/paddle/forum/topic/show/1729201',
        question: '如何使用千言数据集？',
        desc: '怎样下载和搜索数据集？怎样参加千言评测比赛？',
        img: use_luge_data
    },
    {
        url: 'https://aistudio.baidu.com/paddle/forum/topic/show/1729199',
        question: '常见问题汇总',
        desc: 'AI Studio平台使用过程中的常见问题',
        img: common_question
    }
]
function quickLearn({ quickList }) {
    const { lists } = quickList;
    return (
        <div className='quick-container'>
            <h6>快速上手</h6>
            <div className='quick-learn'>
                {
                    lists && lists.map((item, key) => (
                        <a
                            key={item.key}
                            href={item.url}
                            className='quick-item'
                            rel="noopener noreferrer"
                            target='_blank'>
                            <div>
                                <img src={item.img} alt='图片' />
                            </div>
                            <label>{item.question}</label>
                            <span>{item.desc}</span>
                        </a>
                    ))
                }
            </div>
            {/* <div className='learn_more'>展开更多<ArrowDownOutlined /></div> */}
        </div>
    );
}

export default React.memo(quickLearn);
