import React, { memo, useMemo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getJoinList } from '../../base/request';
import '../about/index.less';
import './index.less';
import { actions } from '../../store/actions';
import CommonTitle from '../../components/common/CommonTitle';
import LugeAuthor from '../about/components/lugeAuthor';
import Equity from '../../components/common/Equity';
import Introduce from '../../components/common/Introduce';
import { useHistory } from 'react-router-dom';
let hashStatus = true;
let recordData = {};

const EnterLuge = memo(({ applyEnter, hashStatus, applyEnterList: { dataList, enterTechnician } }) => {
    const dataSets = hashStatus ? dataList : enterTechnician;
    return (
        <div className='owners_container enter_ul'>
            <h6 className='ab_title'>
                <i className='icon_about'></i>
                {hashStatus ? '贡献数据集' : '加入技术专家'}
            </h6>
            <ul className='luge_cards_list'>
                {
                    dataSets && dataSets.map(({ icon, desc, pageUrl, title }) => (
                        <li className='data_author'>
                            <div className='enter_card_item'>
                                {/* <i className={icon}></i> */}
                                <span className='icon_data'>
                                    <img src={icon} alt='图标' />
                                </span>
                                <span className='luge_word_join'>{title}</span>
                                <span className='luge_word_desc'>{desc}</span>
                                {pageUrl && <a href={pageUrl} className='luge_word_btn' target="_blank" rel="noreferrer">立即入驻</a>}
                            </div>
                        </li>
                    ))
                }
                {/* <li className='data_author'>
                    <div className='enter_card_item'>
                        <i className='icon_sub'></i>
                        <span className='luge_word_join'>1.提交申请</span>
                        <span className='luge_word_desc'>点击『立即入驻』按钮，填写信息并提交表单</span>
                        <a href={applyEnter.pageUrl} className='luge_word_btn' target="_blank" rel="noreferrer">立即入驻</a>
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
                        <i className='icon_line'></i>
                        <span className='luge_word_join'>3.数据集上线</span>
                        <span className='luge_word_desc'>材料提交完毕后，由项目组完成数据集的上线并根据您的需求启动后续宣传、榜单开设等</span>
                    </div>
                </li> */}
            </ul>

        </div>
    );
});

const tabsList = [
    {
        name: '加入学术委员会',
        checked: '#/luge/join',
        url: '/luge/join'
    },
    {
        name: '加入技术专家',
        checked: '#/luge/join?type=2',
        url: '/luge/join?type=2'
    }
];
let urlStatus = checked => window.location.hash === checked;

const Tabs = memo(() => {
    const history = useHistory();
    const [, setUpdate] = useState(new Date());
    return (
        <div className='tabContainer'>
            {
                tabsList.map(({ name, checked, url }) => (
                    <div
                        className={['tabItem', urlStatus(checked) ? 'tabActive' : ''].join(' ')}
                        onClick={
                            () => {
                                history.push(url);
                                setUpdate(new Date());
                            }
                        }
                    >
                        <span>{name}</span>
                        <i></i>
                    </div>
                ))
            }
        </div>
    );
});

const LugeUsers = memo(({
    equityList: { introduce, lists },
    expertList,
    applyEnter,
    committeeList,
    youthCommitteeList,
    applyEnterList
}) => {
    return (
        <>
            <div className='join_intro_container luge_container addTabBg'>
                <Tabs key={hashStatus} />
                <div className='joinTabContainer'>
                    <div className='join_intro_title_area'>
                        <strong className='join_intro_strong_title'>{introduce?.title}</strong>
                    </div>
                    <div className='join_intros_list'>
                        <p {...{
                            dangerouslySetInnerHTML: {
                                __html: introduce?.desc
                            }
                        }}></p>
                    </div>
                    <Equity lists={lists} />
                    <div className='joinUser'>
                        <LugeAuthor
                            {
                            ...{
                                hashStatus,
                                type: 'join',
                                committeeList,
                                youthCommitteeList,
                                expertList
                            }
                            }
                        />
                    </div>
                    <EnterLuge
                        {...{
                            applyEnter,
                            hashStatus,
                            applyEnterList
                        }}
                    />
                </div>
            </div>
        </>
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
                                    () => {
                                        setHover(0);
                                    }
                                }
                                onMouseLeave={
                                    () => {
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
                                        () => {
                                            setHover(index);
                                        }
                                    }
                                    onMouseLeave={
                                        () => {
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
    const [equityList, setEquityList] = useState([]);
    const [applyEnter, setApplyEnter] = useState({});
    const [committeeList, setcommitteeList] = useState({});
    const [youthCommitteeList, setyouthCommitteeList] = useState({});
    const [expertList, setexpertList] = useState({});
    const [topCard, setTopCard] = useState({});
    const [applyEnterList, setApplyEnterList] = useState({});
    const getInitData = async () => {
        const { result: { pageData: { hotList, equityList, expertEquityList, applyEnter, committeeList, youthCommitteeList, expertList, topCard, applyEnterMess } } } = await getJoinList();
        recordData = {
            equityList,
            expertEquityList
        }
        setHotList(hotList);
        hashStatus = window.location.hash === '#/luge/join';
        setEquityList(hashStatus ? equityList : expertEquityList);
        setApplyEnter(applyEnter);
        setcommitteeList(committeeList);
        setyouthCommitteeList(youthCommitteeList);
        setexpertList(expertList);
        setTopCard(topCard);
        setApplyEnterList(applyEnterMess.items);
    }
    useMemo(() => {
        dispatch(actions.getTaskList({ isDetail: 1 }));
        getInitData();
    }, []);
    const history = useHistory();
    useMemo(() => {
        const unlisten = history.listen((historyLocation) => {
            hashStatus = window.location.hash === '#/luge/join';
            setEquityList(hashStatus ? recordData.equityList : recordData.expertEquityList);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '入驻页']);
    }, []);

    return (
        <div className='taskCardContainer join_container'>
            <CommonTitle
                {...{
                    ...topCard.enter,
                    applyEnter
                }}
            />
            <Introduce {...{ applyEnter }} />
            {equityList && <LugeUsers
                {...{
                    equityList,
                    applyEnter,
                    committeeList,
                    youthCommitteeList,
                    expertList,
                    applyEnterList
                }} />}
            {hotList && <HotContent {...{ hotList }} />}
        </div>
    );
}

export default React.memo(JoinIndex);
