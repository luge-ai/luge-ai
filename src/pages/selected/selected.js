import React, { useEffect, memo, useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './selected.less';
import CommonTitle from '../../components/common/CommonTitle';
import Types from '../../components/common/Types';
import { getSelectedList } from '../../base/request';
import { pageCLick } from '../../utils/index';

const CaseList = memo(({ caseList, eventName }) => {
    let dom = useRef(null);
    return (
        <div className='technoligyList' ref={dom}>
            {caseList && caseList.map(({
                desc,
                imgUrl,
                pageUrl,
                title
            }, index) => (
                <div className='technoligyItem' key={index} onClick={
                    () => {
                        pageCLick({ pageUrl, eventName })
                    }}>
                    <div className='technoligyItemImg'>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className='technoligyItemDesc'>
                        <div className='technoligyItemContent'>
                            <strong>{title}</strong>
                            {/* <span {
                                ...{
                                    dangerouslySetInnerHTML: {
                                        __html: desc
                                    }
                                }
                            }></span> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});

const Paper = memo(({ paperList }) => {
    return (
        <div className='paperList'>
            {
                paperList && paperList.map(({ pageUrl, tag, time, title }, index) => (
                    <div className='paperItem' key={index} onClick={
                        () => {
                            pageCLick({ pageUrl, eventName: '点击【精选论文】' })
                        }
                    }>
                        <div>
                            <div className='paperItemContent'>
                                <strong className='paperItemTitle'>{title}</strong>
                            </div>
                            <div className='paperItemLine'>
                                <div className='paperItemLineArr'></div>
                                <div className='paperItemSign'>
                                    <span className='paperItemType'><i>{tag}</i></span>
                                    <span className='paperItemTime'>{time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
});
// https://fanyiapp.cdn.bcebos.com/cms/image/51b49b78227b6ad6517c8572f0d60681.png
const Activity = memo(({ activityList }) => {
    return (
        <div className='activityList'>
            {
                activityList && activityList.map(({
                    desc,
                    imgUrl,
                    pageUrl,
                    title,
                    source,
                    time,
                    tag
                }, index) => (
                    <div className='activityItem' onClick={
                        () => {
                            pageCLick({ pageUrl, eventName: '点击【活动速递】' })
                        }
                    } key={index}>
                        <div className='activityItemContent'>
                            <span className='willStart'><i>{tag}</i></span>
                            <img src={imgUrl} alt="图片" />
                            <strong className='activityItemTitle'>{title}</strong>
                            <span className='activityItemDesc'
                                {
                                ...{
                                    dangerouslySetInnerHTML: {
                                        __html: desc
                                    }
                                }
                                }
                            ></span>
                            <div className='activityShare'>
                                <span className='activityShareTle'>{source}</span>
                                <span className='activityShareTime'>{time}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
});

const TypesList = {
    CASE: 'case',
    ARTICLE: 'article',
    PAPER: 'paper',
    ACTIVITY: 'activity'
}

const TechnoligyCase = memo(({ caseList, articleList, paperList, activityList, title, type }) => {
    let scrollStatus = type => {
        switch (type) {
            case TypesList.CASE:
                return caseList && caseList.length > 3;
            case TypesList.ARTICLE:
                return articleList && articleList.length > 3;
            case TypesList.PAPER:
                return paperList && paperList.length > 5;
            case TypesList.ACTIVITY:
                return activityList && activityList.length > 4;
            default:
                return false;
        }
    };
    const status = scrollStatus(type);

    return (
        <div className={
            [
                'technoligyContent',
                status ? 'showScrollstatus' : ''
            ].join(' ')
        }
        >
            <i className='scl_icon_bf'
                onClick={e => {
                    let add = e.target.nextSibling.nextSibling.scrollLeft - 1117;
                    if (add > 0) {
                        e.target.nextSibling.nextSibling.scrollLeft -= 1117;
                    } else {
                        e.target.nextSibling.nextSibling.scrollLeft = 0;
                    }
                }}
            ></i>
            {type === TypesList.CASE && caseList && caseList.length > 0 && <>
                <h6 class="ab_title"><i class="icon_about"></i>{title}</h6>
                <CaseList {...{
                    caseList,
                    eventName: '点击【精选案例】'
                }} />
            </>
            }
            {type === TypesList.ARTICLE && articleList && articleList.length > 0 && <>
                <h6 class="ab_title"><i class="icon_about"></i>{title}</h6>
                <CaseList {...{
                    caseList: articleList,
                    eventName: '点击【精选文章】'
                }} />
            </>
            }
            {type === TypesList.PAPER && paperList && paperList.length > 0 && <>
                <h6 class="ab_title"><i class="icon_about"></i>{title}</h6>
                <Paper {...{
                    paperList
                }} />
            </>
            }
            {type === TypesList.ACTIVITY && activityList && activityList.length > 0 && <>
                <h6 class="ab_title"><i class="icon_about"></i>{title}</h6>
                <Activity {...{
                    activityList
                }} />
            </>
            }
            <i className='scl_icon_af'
                onClick={(e) => {
                    let add = e.target.previousSibling.scrollLeft + e.target.previousSibling.clientWidth + 1117;
                    if (add < e.target.previousSibling.scrollWidth) {
                        e.target.previousSibling.scrollLeft = e.target.previousSibling.scrollLeft + 1117;
                    } else {
                        e.target.previousSibling.scrollLeft = e.target.previousSibling.scrollWidth - e.target.previousSibling.clientWidth;
                    }
                }}
            ></i>
        </div>
    );
});


function Selected() {
    const {
        taskId
    } = useSelector(
        ({
            dataList: { taskId }
        }) => ({ taskId }),
        shallowEqual
    );
    const [selectedList, setSelectedList] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [topCard, setTopCard] = useState({});
    const dispatch = useDispatch();
    useMemo(async () => {
        const { result: { pageData: { selectedList: { selectedTypeList, selectedCard }, taskList } } } = await getSelectedList();
        setSelectedList(selectedTypeList);
        const selectedItem = selectedTypeList.find(item => item.taskType === taskList.lists[1].taskId);
        setSelectedItem(selectedItem);
        dispatch({
            type: 'datalist',
            payload: {
                taskList: taskList.lists,
                taskId: taskList.lists[1].taskId
            }
        });
        setTopCard(selectedCard);
    }, []);

    useEffect(() => {
        if (selectedList.length < 1) {
            return;
        }
        const selectedItem = selectedList.find(item => item.taskType === taskId);
        setSelectedItem(selectedItem);
    }, [taskId]);

    useEffect(() => {
        window._hmt.push(['_trackEvent', '千言', '精选']);
        return () => {
            dispatch({
                type: 'datalist',
                payload: {
                    taskId: ''
                }
            });
        }
    }, []);
    return (
        <div className='selectedContainer'>
            <div className='selectContent'>
                <CommonTitle
                    {
                    ...{
                        ...topCard
                    }
                    }
                />
                <div className='tasksTop'>
                    <Types {...{ type: 'selected' }} />
                </div>
                <TechnoligyCase {...{
                    title: '技术方案分享',
                    type: TypesList.CASE,
                    ...selectedItem
                }} />
                <TechnoligyCase {...{
                    title: '精选文章',
                    type: TypesList.ARTICLE,
                    ...selectedItem
                }} />
                <TechnoligyCase {...{
                    title: '论文咨询',
                    type: TypesList.PAPER,
                    ...selectedItem
                }} />
                <TechnoligyCase {...{
                    title: '活动速递',
                    type: TypesList.ACTIVITY,
                    ...selectedItem
                }} />
            </div>
        </div>
    );
}

export default React.memo(Selected);