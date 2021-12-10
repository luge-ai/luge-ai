import React, { memo } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import personHxySrc from '../assets/person_hxy.png';
import personCjhSrc from '../assets/person_cjh.png';
import personLjwSrc from '../assets/person_ljw.png';
import person_xgj from '../assets/person_xgj.png';
import person_lhz from '../assets/person_lhz.png';
import person_zgl from '../assets/person_zgl.png';
import person_ztt from '../assets/person_ztt.png';
import person_zlh from '../assets/person_zlh.png';
import person_ldj from '../assets/person_ldj.png';
import person_myx from '../assets/person_myx.png';
const introPersons = [
    {
        name: '@花新宇',
        pos: '算法工程师',
        desc: '千言数据集包含了自然语言理解和生成的大部分任务，并且具有非常高的标注质量，是推动中文信息处理研究的重要力量。',
        url: personHxySrc
    },
    {
        name: '@陈家豪',
        pos: '算法工程师',
        desc: '千言数据集涵盖分类，生成，问答，抽取等多个自然语言处理任务，是目前中文领域最权威的文本数据集',
        url: personCjhSrc
    },
    {
        name: '@罗锦文',
        pos: '高级研究员',
        desc: '千言数据集提供了众多中文开源数据，促进了中文深度学习社区的发展和壮大，为广大NLPer提供了开放交流的平台',
        url: personLjwSrc
    },
    {
        name: '@徐国进',
        pos: '高级研发工程师',
        desc: '广大NLP爱好者与从业人员的福音，评测任务较全面，对NLP方面的学习者和从业人员来说是一个很好的实验与技术验证的平台。',
        url: person_xgj
    },
    {
        name: '@林浩智',
        pos: '高级算法工程师',
        desc: '千言数据集覆盖多领域及技术方向，对中文领域自然语言处理技术发展具有重要意义。欢迎大家积极参赛，共同成长！',
        url: person_lhz
    },
    {
        name: '@张国梁',
        pos: '硕士研究生',
        desc: '“千言”在自然语言处理的多项任务中都有着高质量的数据集，每年都吸引着众多学者进行学术评测和相关研究工作。凭借该数据集，我们可以更方便、高效地进行“中文信息处理”的探索工作。可以说，千言数据集极大地推动了中文自然语言处理的技术发展！',
        url: person_zgl
    },
    {
        name: '@张甜甜',
        pos: '在校硕士研究生',
        desc: '千言项目为高校、企业提供了竞赛平台并开源了许多热点任务的中文数据集，极大推动了中文信息处理技术发展。',
        url: person_ztt
    },
    {
        name: '@张龙辉',
        pos: '在校硕士研究生',
        desc: '千言项目聚焦于NLP领域的多个领域和场景，针对众多任务进行数据集的整理和收集工作，同时还举办了多场竞赛吸引国内外众多研究团体的加入，成功促进了国内NLP行业的快速发展。',
        url: person_zlh
    },
    {
        name: '@李德健',
        pos: '在校硕士研究生',
        desc: '千言数据集作为开源的大规模数据集，极大地推动了中文NLP信息抽取相关的发展，带来了非常好的生态环境。',
        url: person_ldj
    },
    {
        name: '@廖永新',
        pos: '博士',
        desc: '“千言”数据集共建计划为解决中文信息处理所面临的挑战和推进人工智能探索中华文化的奥秘奠定了坚实基础。',
        url: person_myx
    },
];
const Introduce = () => (
    <div className='intro_container'>
        <div className='intro_luge'>
            <span className='intro_luge_Logo'></span>
            <div className='intro_detail'>
                “千言”是百度联合中国计算机学会自然语言处理专委会、中国中文信息学会评测工作委员会共同发起的，由来自国内多家高校和企业的数据资源研发者共同建设的中文开源数据集及评测项目。
            </div>
            <a
                onClick={() => {
                    window._hmt.push(['_trackEvent', '首页', `进一步了解`]);
                }}
                href='/luge/about'
                rel="noopener noreferrer"
                target='_blank'
                className='intro_under'>
                进一步了解
                <ArrowRightOutlined
                    className='ranks_default_icon'
                    style={{ marginLeft: '6px' }}
                />
            </a>
        </div>
        <div className='intro_swiper'>
            <div className='intro_container_lists'>
                {introPersons.map((item, index) => (
                    <div
                        key={index}
                        className={[
                            'intro_container_lists_item',
                            index % 2 !== 0
                                ? 'item_float_left'
                                : 'item_float_right'
                        ].join(' ')}
                    >
                        <div className='intro_item_content'>{item.desc}</div>
                        <div className='intro_item_users'>
                            <span className='item_name'>
                                <img src={item.url} alt=''/>
                                {item.name}
                            </span>
                            <span className='item_pos'>{item.pos}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default memo(Introduce);
