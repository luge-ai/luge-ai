import React from 'react';
import icon_qingganfenxi from '../assets/icon_qingganfenxi.png';
import icon_yuedulijie from '../assets/icon_yuedulijie.png';
import icon_kaifangyuduihua from '../assets/icon_kaifangyuduihua.png';
import icon_wenbenxiangsidu from '../assets/icon_wenbenxiangsidu.png';
import icon_yuyijiexi from '../assets/icon_yuyijiexi.png';
import icon_jiqitongchuan from '../assets/icon_jiqitongchuan.png';
import icon_xinxichouqu from '../assets/icon_xinxichouqu.png';

const lugeCardsList = [
    {
        title: '情感分析',
        desc: '针对传统情感分析、多模态情感分析和可信情感分析三类任务，收集和整理了包括ChnSentiCorp、NLPCC14-SC、SE-ABSA、COTE、DuVideoSenti、DuTrust等多个数据集。',
        icon: () => <img src={icon_qingganfenxi} alt='图片'/>
    },
    {
        title: '阅读理解',
        desc: '针对抽取式阅读理解和观点式阅读理解两个子任务，收集和整理了 DuReader_robust、 DuReader_yesno两个数据集。',
        icon: () => <img src={icon_yuedulijie} alt='图片'/>
    },
    {
        title: '中文对话',
        desc: '针对多种场景的对话任务：包括网络日常对话，情感对话，知识对话和有目标的开放域对话等任务，收集和整理了来自工业界和学术界的七个对话数据集。',
        icon: () => <img src={icon_kaifangyuduihua} alt='图片'/>
    },
    {
        title: '文本相似度',
        desc: '针对多个领域数据和模型鲁棒性的问题，收集和整理了LCQMC, BQ Corpus 和PAWS-X（中文）三个数据集。',
        icon: () => <img src={icon_wenbenxiangsidu} alt='图片'/>
    },
    {
        title: '语义解析',
        desc: '针对不同的数据库形式和SQL查询语句的复杂度，收集和整理了Cspider、NL2SQL和DUSQL三个数据集。',
        icon: () => <img src={icon_yuyijiexi} alt='图片'/>
    },
    {
        title: '机器同传',
        desc: '机器同传结合了机器翻译、语音识别和语音合成等多种技术，整理了BSTC数据集，包含针对中英、英西两个方向共四项任务。',
        icon: () => <img src={icon_jiqitongchuan} alt='图片'/>
    },
    {
        title: '信息抽取',
        desc: '针对关系抽取和事件抽取两个子任务，收集和整理了DuIE和DUEE两个数据集。',
        icon: () => <img src={icon_xinxichouqu} alt='图片'/>
    },
    {
        title: '实体链指',
        desc: '针对实体链指任务，收集和整理了DuEL数据集。',
        icon: () => <img src={icon_xinxichouqu} alt='图片'/>
    },
    {
        title: '文本生成',
        desc: '从文案生成、摘要生成和问题生成三个任务，挑战文本生成结果与输入的事实一致性水平。',
        icon: () => <img src={icon_xinxichouqu} alt='图片'/>
    },
    {
        title: '低资源语言翻译',
        desc: '针对多语种翻译面临的资源稀疏问题，整理了低资源语言翻译数据集，包含俄中，中俄，泰中，中泰，越中和中越六个方向的翻译任务。',
        icon: () => <img src={icon_xinxichouqu} alt='图片'/>
    },
];
function LugeDatas() {
    return (
        <div className='lugeDataContainer'>
            <h6 className='ab_title'><i className='icon_about'></i>千言数据集任务</h6>
            <ul className='luge_cards_list'>
                {lugeCardsList.map((item, index) => (
                    <li key={index}>
                        {item.icon()}
                        <label>{item.title}</label>
                        <span className='luge_word' title={item.desc}>{item.desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(LugeDatas);
