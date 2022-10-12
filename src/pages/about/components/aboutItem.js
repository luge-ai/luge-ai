import React, { useEffect, useRef } from 'react';
import ab_bg from '../assets/ab_bg.png';
import about_video from '../assets/about_video.mp4';
import CommonTitle from '../../../components/common/CommonTitle';

const content = [
    '目前的许多自然语言处理技术的研发大多数只关注模型在单一数据集上的效果，',
    '然而自然语言处理技术在大规模产业化的应用中，面临着许多新的挑战。',
    '包括模型需要具有全面的、处理多个子任务的能力；在跨领域数据上具有较好的泛化能力；',
    '在应用中有足够的鲁棒性以保证安全等等。',
    '此外，这些大规模应用对语义理解提出了更高的要求，要求模型具备一定的常识、背景知识甚至推理能力；',
    '同时随着内容承载形式的多元化，也需要模型具有多模态融合的内容理解能力等。',
].join('');
const together = [
    '携手高校和企业的数据资源研发者共同建设中文开源数据集。',
    '“千言”的目标是覆盖丰富的任务类型，从语义理解、知识融合、',
    '多模态融合等角度推动技术进步，',
    '同时提供能进行多维度综合评价的数据集，从而评价模型的全面性、泛化性和鲁棒性等。',
].join('');
const lugeItems = [
    '千言项目针对每个自然语言处理问题，均收集和整理多个开源数据集，',
    '进行统一的处理并提供统一的测评方式，帮助加速模型的研发。',
].join('');
const cardsDataList = (applyEnter) => {
    return [
        {
            num: applyEnter.taskNum,
            type: '任务',
        },
        {
            num: applyEnter.dataset,
            type: '中文开源数据集',
        },
        {
            num: () => <i className='common_data'></i>,
            type: '统一数据格式和评测',
        },
        {
            num: () => <i className='common_system'></i>,
            type: '提供基线系统',
        },
    ];
};

function AboutItem({ applyEnter, topCard: { aboutLuge } }) {
    const lugeVideoRef = useRef(null);
    const videoIconRef = useRef(null);
    const videoImgRef = useRef(null);
    const playVideo = () => {
        window._hmt.push(['_trackEvent', '关于千言', `播放视频`]);
        videoIconRef.current.style.display = 'none';
        lugeVideoRef.current.play();
        videoImgRef.current.style.display = 'none';
    };
    useEffect(() => {
        lugeVideoRef.current.addEventListener(
            'ended',
            function () {
                videoIconRef.current.style.display = 'block';
                videoImgRef.current.style.display = 'block';
            },
            false
        );
    }, []);
    return (
        <div className='aboutContainer'>
            <CommonTitle {
                ... {
                    ...aboutLuge
                }
            } />
            <div className='aboutContent'>
                <h6 className='ab_title'>
                    <i className='icon_about'></i>什么是千言
                </h6>
                <p>{content}</p>
                <p>
                    为了应对以上问题和挑战，
                    <strong>
                        百度联合中国计算机学会、中国中文信息学会共同发起了“千言”数据共建计划，
                    </strong>
                    {together}
                </p>
                <p>{lugeItems}</p>
            </div>
            <div className='luge_data_num'>
                {cardsDataList(applyEnter).map((item, index) => (
                    <span key={index}>
                        {typeof item.num !== 'function' && (
                            <strong>{item.num}</strong>
                        )}
                        {typeof item.num === 'function' && item.num()}
                        <span>{item.type}</span>
                    </span>
                ))}
            </div>
            <div className='luge_video'>
                <video
                    ref={lugeVideoRef}
                    src={about_video}
                    preload='auto'
                    className='luge_video_img'
                    controls
                    controlslist='nodownload'
                ></video>
                <img
                    src={ab_bg}
                    className='videoImg'
                    ref={videoImgRef}
                    alt='图片'
                />
                <i
                    className='luge_player'
                    onClick={playVideo}
                    ref={videoIconRef}
                ></i>
            </div>
        </div>
    );
}

export default React.memo(AboutItem);
