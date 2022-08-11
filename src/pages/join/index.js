import React, { memo, useMemo, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getJoinList } from '../../base/request';
import '../about/index.less';
import './index.less';
import Nav from '../../components/Layout/nav';
import Footer from '../../components/Layout/footer';
import { actions } from '../../store/actions';
import CommonTitle from '../../components/common/CommonTitle';
import LugeAuthor from '../about/components/lugeAuthor';
const word = '目前，「千言」开源数据集项目已经吸引近20家企业和高校的数据集作者加入，已经针对十余个任务，汇集了近50个中文开源数据集';

const enterWeb = ({ applyEnter }) => {
    return (
        <div className='apply_btn_content'>
            <a href={applyEnter?.pageUrl} target="_blank">申请入驻</a>
        </div>
    );
};
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

const Introduce = memo(({ applyEnter }) => {
    return (
        <div className='join_intro_container'>
            <div className='join_intro_title_area'>
                <strong className='join_intro_strong_title'>千言简介</strong>
                <icon className='join_intro_strong_logos'></icon>
            </div>
            <div className='join_intro_lists_words'>
                <p><strong>千言</strong>是由百度联合中国计算机学会、中国中文信息学会共同发起的面向自然语言处理的开源数据集项目，携手高校和企业的数据资源研发者共同建设中文开源数据集，旨在推动中文信息处理技术的进步。</p>
                <p><strong>千言</strong>开源数据集项目自 2020 年 8 月发布以来，吸引来自清华、哈工大、中科院、美团、腾讯、OPPO 等<span>近20家</span>企业和高校的数据集作者加入共同建设。目前，千言已经针对十余个任务，汇集了<span>近50个</span>开源数据集。</p>
                <p><strong>千言</strong>还推动多项NLP评测，开设基于数据集的“主题赛”、“常规赛”<span>近30场</span>，累计近3万人次NLP开发者参与其中，数据集下载量累计<span>近8万</span>次。</p>
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

const Equity = memo(({ equityList }) => {
    const { lists } = equityList;
    return (
        <div className='owners_container_join'>
            <h6 className='ab_title'><i className='icon_about'></i>专属权益</h6>
            <ul className='luge_cards_list'>
                {
                    lists && lists.map(item =>
                        <li className='data_author_join'>
                            <a href={!item.pageUrl ? "javascript:;" : item.pageUrl} className='join_quan_yi_item'>
                                <span className='icon_quan_yi'>
                                    <img src={item.imgUrl} alt="" />
                                </span>
                                <span className='luge_word_join'
                                    dangerouslySetInnerHTML={{// bca-disable-line
                                        __html: item.title
                                    }}></span>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
});

const EnterLuge = memo(({ applyEnter }) => {
    return (
        <div className='owners_container enter_ul'>
            <h6 className='ab_title'><i className='icon_about'></i>入驻千言</h6>
            <ul className='luge_cards_list'>
                <li className='data_author'>
                    <div className='enter_card_item'>
                        <i className='icon_sub'></i>
                        <span className='luge_word_join'>1.提交申请</span>
                        <span className='luge_word_desc'>点击『立即入驻』按钮，填写信息并提交表单</span>
                        <a href={applyEnter.pageUrl} className='luge_word_btn' target="_blank">立即入驻</a>
                    </div>
                </li>
                <li className='data_author'>
                    <div className='enter_card_item'>
                        <i className='icon_ping_shen'></i>
                        <span className='luge_word_join'>2.项目组评审</span>
                        <span className='luge_word_desc'>项目组会在3-5个工作日内完成初步评审，并以邮件形式告知结果</span>
                    </div>
                </li>
                <li className='data_author'>
                    <div className='enter_card_item'>
                        <i className='icon_offer'></i>
                        <span className='luge_word_join'>3.提供材料</span>
                        <span className='luge_word_desc'>请按邮件要求提供数据集上线相关材料，包括数据集介绍、作者介绍、数据集预览等</span>
                    </div>
                </li>
                <li className='data_author'>
                    <div className='enter_card_item'>
                        <i className='icon_line'></i>
                        <span className='luge_word_join'>4.数据集上线</span>
                        <span className='luge_word_desc'>材料提交完毕后，由项目组完成数据集的上线并根据您的需求启动后续宣传、榜单开设等</span>
                    </div>
                </li>
            </ul>

        </div>
    );
});

const LugeUsers = memo(({ equityList, applyEnter, committeeList, youthCommitteeList }) => {
    return (
        <div className='join_intro_container luge_container'>
            <div className='join_intro_title_area'>
                <strong className='join_intro_strong_title'>千言学术委员会</strong>
            </div>
            <div className='join_intros_list'>
                <p>作为开源数据集作者，会被邀请进入千言学术委员会，委员会成员皆来自自然语言处理领域高等院校、企事业部门科研机构。千言学术委员会秉承开源贡献的理念，共同推动中文信息处理技术的进步。</p>
                <p>千言会帮助数据集作者发布评测，并提供飞桨开源基线、评测平台和 GPU 算力的支持，提升数据集的影响力，推动技术的发展。</p>
            </div>
            <Equity equityList={equityList} />
            <LugeAuthor type='join' committeeList={committeeList} youthCommitteeList={youthCommitteeList} />
            <EnterLuge applyEnter={applyEnter} />
        </div>
    );
});


const HotContent = memo(props => {
    const { hotList: { lists } } = props;
    const [hover, setHover] = useState(-1);
    return (
        <div className='luge_container hot_container'>
            <div className='join_intro_title_area'>
                <strong className='join_intro_strong_title'>热门内容</strong>
            </div>
            <div className='hot_cards'>
                <div className='hot_cards_left'>
                    {
                        lists && lists[0] && (
                            <a href={lists[0]?.pageUrl} className='hot_cards_img'
                                style={{ backgroundImage: hover === 0 ? 'url(' + lists[0]?.imgUrlHover + ')' : 'url(' + lists[0]?.imgUrl + ')' }}
                                onMouseEnter={
                                    (e) => {
                                        setHover(0);
                                    }
                                }
                                onMouseLeave={
                                    (e) => {
                                        setHover(-1)
                                    }
                                }
                            ></a>
                        )
                    }
                </div>
                <div className='hot_cards_list'>
                    {
                        lists &&
                        lists.map(
                            (item, index) =>
                                index > 0 &&
                                <a href={item?.pageUrl} className='hot_cards_item'
                                    style={{ backgroundImage: hover === index ? 'url(' + item?.imgUrlHover + ')' : 'url(' + item?.imgUrl + ')' }}
                                    onMouseEnter={
                                        (e) => {
                                            setHover(index);
                                        }
                                    }
                                    onMouseLeave={
                                        (e) => {
                                            setHover(-1)
                                        }
                                    }
                                />
                        )
                    }
                </div>
            </div>
        </div>
    );
});

function JoinIndex() {
    const dispatch = useDispatch();
    const [hotList, setHotList] = useState([]);
    const [equityLists, setEquityList] = useState([]);
    const [applyEnter, setApplyEnter] = useState({});
    const [committeeList, setcommitteeList] = useState({});
    const [youthCommitteeList, setyouthCommitteeList] = useState({});
    const getInitData = async () => {
        const { result: { pageData: { hotList, equityList, applyEnter, committeeList, youthCommitteeList } } } = await getJoinList();
        setHotList(hotList);
        setEquityList(equityList);
        setApplyEnter(applyEnter);
        setcommitteeList(committeeList);
        setyouthCommitteeList(youthCommitteeList);
    }
    useMemo(() => {
        dispatch(actions.getTaskList({ isDetail: 1 }));
        getInitData();
    }, [dispatch]);

    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '入驻页']);
    }, []);

    return (
        <div className='taskCardContainer join_container'>
            <Nav />
            <CommonTitle
                title='千言数据集共建计划'
                word={word}
                applyEnter={applyEnter}
                enterWeb={enterWeb}
            />
            <Introduce applyEnter={applyEnter} />
            {equityLists && <LugeUsers
                equityList={equityLists}
                applyEnter={applyEnter}
                committeeList={committeeList}
                youthCommitteeList={youthCommitteeList} />}
            {hotList && <HotContent hotList={hotList} />}
            <Footer />
        </div>
    );
}

export default React.memo(JoinIndex);
