import React, {memo, useEffect, useRef, useMemo} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/Layout/header';
import Footer from '../../components/Layout/footer';
import TaskTypes from './components/taskTypes';
import Introduce from './components/introduce';
import Invitation from './components/invitation';
import ShareComponent from '../../components/common/Share';
import CardList from '../../components/common/CardList';
import OtherMess from './components/otherMess';
import {actions} from '../../store/actions';
// import 'swiper/css/swiper.css';
import './index.less';
// import c from './index.less';

const Home = () => {
    const animRef = useRef(null);
    const animCtRef = useRef(null);
    const typesRef = useRef(null);
    const taskType = useRef({taskId: ''});
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const bannerRef = useRef(null);
    const backTopRef = useRef(null);
    const cancelDeal = () => {
        animRef.current.className = 'anim_container';
        typesRef.current.style = 'transform: translateX(0px)';
        bannerRef.current.style = 'filter: blur(0px)';
    };
    useEffect(() => {
        if (window.location.hash !== '#/') {
            return;
        }
        const beforeScrollTop = document.documentElement.scrollTop;
        document.body.onscroll = () => {
            console.log(window.location.pathname);
            if (window.location.hash !== '#/') {
                return;
            }
            // backTopRef.current.style.display = 'none';
            const afterScrollTop = document.documentElement.scrollTop;
            const hasScroll = afterScrollTop - beforeScrollTop;
            if (hasScroll === 0) {
                if (animCtRef.current && animCtRef.current.scrollTop === 0) {
                    bannerRef.current.style = 'filter: blur(0px)';
                }
                return;
            }
            if (afterScrollTop >= 20) {
                bannerRef.current.style = 'filter: blur(60px)';
            }
            if (afterScrollTop >= 380) {
                animRef.current.className = 'anim_container anim_scroll';
                rightRef.current.style.display = 'flex';
                leftRef.current.style.display = 'none';
                animCtRef.current.scrollTop = 1;
                backTopRef.current.style.display = 'flex';
                return;
            }
        };
        animCtRef.current.onscroll = event => {
            if (event.target.scrollTop === 0) {
                backTopRef.current.style.display = 'none';
                cancelDeal();
            }
        };
        window._hmt.push(['_trackEvent', '千言', '数据集-首页']);
    }, []);
    const changeTab = () => {
        animCtRef.current.scrollTop = 1;
    };
    const backTop = () => {
        cancelDeal();
        document.documentElement.scrollTop = 0;
    };
    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(actions.getTaskList());
        dispatch(actions.getDataList({
            taskId: taskType.current.taskId
        }));
    }, [dispatch]);
    const cardsList = useSelector(item => item.dataList.cardsList, shallowEqual);
    return (
        <div className='root'>
           <Header bannerRef={bannerRef} />
            <div className='anim_container' ref={animRef}>
                <TaskTypes
                    typesRef={typesRef}
                    leftRef={leftRef}
                    rightRef={rightRef}
                    changeTab={changeTab}
                    taskType={taskType} />
                <div className='cardFieldContent' ref={animCtRef}>
                    <div className='cardsContent'>
                        {/* <div className='clickTab'>
                            <span className='active'>最近更新</span>
                            <span>最近发布</span>
                            <span>最多浏览</span>
                        </div> */}
                        <div className='cardContainer'>
                            <CardList
                                taskType={taskType}
                                cardsList={cardsList}
                                changeTab={changeTab} />
                            <OtherMess taskType={taskType} />
                        </div>
                    </div>
                    <Introduce />
                    <Invitation />
                    <Footer/>
                </div>
            </div>
            <ShareComponent
                backTop={backTop}
                backTopRef={backTopRef} />
        </div>
    );
};

export default memo(Home);
