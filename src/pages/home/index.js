import React, { memo, useEffect, useRef, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Banner from '../../components/Layout/banner';
import TaskTypes from './components/taskTypes';
import Introduce from './components/introduce';
import Invitation from './components/invitation';
import ShareComponent from '../../components/common/Share';
import CardList from '../../components/common/CardList';
import OtherMess from './components/otherMess';
import { actions } from '../../store/actions';
import './index.less';


const Advertisement = memo(() => {
    const advertise = useSelector(item => item.dataList.advertise);
    return (
        <div className='advertise_content'>
            {advertise && <a href={advertise.pageUrl} >
                <img src={advertise.imgUrl} alt='' />
            </a>
            }
        </div>
    );
});

const HomeRecommend = memo(() => {
    const HomeRecommend = useSelector(item => item.dataList.HomeRecommend);
    return (
        <div className='home_content_container'>
            <div className='home_content_title'>内容推荐</div>
            <div className='home_content_cards'>
                {
                    HomeRecommend && HomeRecommend.map((item, index) => (
                        <div className={['home_content_card_item', item.type === 1 ? '' : 'card_video_icon'].join(' ')} key={index}>
                            <a href={item.pageUrl}>
                                <div className='home_card_top'>
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <div className='home_card_bottom'>
                                    <div className='home_card_words'>
                                        <span>{item.date}</span>
                                        <strong>{item.title}</strong>
                                        <i>{item.type === 1 ? '文章' : '视频'}</i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
});

const tabs = [{
    type: 'new',
    name: '最新'
}, {
    type: 'hot',
    name: '最热'
}]

const TabChange = memo(props => {
    const { state, setstate } = props;
    return (
        <div className='clickTab'>
            {
                tabs.map(tab => <span className={state === tab.type ? 'active' : ''} onClick={
                    () => {
                        setstate(tab.type);
                    }
                }>{tab.name}</span>)
            }
        </div>
    );
});

const Home = () => {
    const {
        cardsList,
        taskId
    } = useSelector(
        ({
            dataList: { cardsList, taskId }
        }) => ({ cardsList, taskId }),
        shallowEqual
    );
    const [tabType, settabType] = useState('new');
    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '数据集-首页']);
    }, []);
    const backTop = () => {
        document.documentElement.scrollTop = 0;
    };
    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(actions.getTaskList());
        dispatch(actions.getDataList({
            taskId: taskId,
            type: tabType
        }));
        dispatch(actions.getLugeList())
    }, []);
    const updateTab = type => {
        dispatch(actions.getDataList({
            taskId: taskId,
            type
        }));
        settabType(type);
    };
    return (
        <div className='root'>
            <Banner />
            <div className='anim_container'>
                <TaskTypes tabType={tabType} />
                <div className='cardFieldContent'>
                    <div className='cardsContent'>
                        <TabChange {...{ state: tabType, setstate: updateTab }} />
                        <div className='cardContainer'>
                            <CardList
                                {
                                ...{
                                    cardsList,
                                    tabType
                                }
                                } />
                            <OtherMess />
                        </div>
                    </div>
                    <Advertisement />
                    <HomeRecommend />
                    <Introduce />
                    <Invitation />
                </div>
            </div>
            <ShareComponent
                {
                ...{
                    backTop
                }
                } />
        </div>
    );
};

export default memo(Home);
