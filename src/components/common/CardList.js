import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/actions';
import './index.less';
// const UserDetail = lazy(() => import('@/components/common/UserDetail'));

function CardList(props) {
    const { cardsList, tabType } = props;
    const dispatch = useDispatch();
    const {
        taskId
    } = useSelector(
        ({
            dataList: { taskId }
        }) => ({ taskId }),
        shallowEqual
    );
    const changePage = page => {
        dispatch(actions.getDataList({
            taskId,
            page,
            type: tabType
        }));
    };
    return (
        <>
            <ul className='cardsLists'>
                {cardsList && cardsList.list && cardsList.list.map((item, index) => (
                    <li key={index} className='cardItemLi'>
                        <Link
                            onClick={() => {
                                window._hmt.push(['_trackEvent', '数据集卡片', `点击${item.datasetName}`]);
                            }}
                            to={`/luge/dataDetail?id=${item.datasetId}`}>
                            <div className='cardItem'>
                                <div className='cardItemTop'>
                                    <span className='cardItemSign'>
                                        {item.label}
                                        {index < 3 && <i>{tabType === 'new' ? '更新' : '热门'}</i>}
                                    </span>
                                    <strong
                                        dangerouslySetInnerHTML={{ // bca-disable-line
                                            __html: item.datasetName.replace(/##1/g, '<i>').replace(/1##/g, '</i>')
                                        }}
                                        className='cardItemTitle'></strong>
                                    <span className='cardItemNum'>
                                        {/* <VerticalAlignBottomOutlined /> */}
                                        <i className='icon_load'></i>
                                        {item.downTimes}
                                    </span>
                                </div>
                                <div className='cardBottom'>
                                    <span className='cardItemDetail'>


                                        {
                                            item.author.length === 1 &&
                                            <>
                                                {item.author[0].logo && <img
                                                    className='card_logo'
                                                    src={item.author[0].logo} alt='图片' />}
                                                <span>{`${item.author[0].authorName}${item.author[0].authorName && item.author[0].company ? '.' : ''}`}</span>
                                                {item.author[0].company}
                                            </>
                                        }
                                        {
                                            item.author.length > 1 &&
                                            item.author.map(item => item.authorName).join('.')
                                        }
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
                {cardsList && cardsList.total > 15 && <li className='page_List'>
                    <Pagination
                        total={cardsList.total}
                        defaultPageSize={15}
                        defaultCurrent={1}
                        onChange={changePage}
                    />
                </li>}
            </ul>
        </>
    );
}

export default React.memo(CardList);