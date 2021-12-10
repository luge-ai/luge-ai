import React, { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {getDataSetList, getRelateGame} from '../../../base/request';
import {formatDate} from '../../../utils/index';
// import { Link } from 'react-router-dom';

// import {VerticalAlignBottomOutlined} from '@ant-design/icons';
const GameDetail = props => {
    const {dataDetail} = props;
    const [gameList, setGameList] = useState({});
    useMemo(async () => {
        const res = await getRelateGame({matchId: +dataDetail.relationMatchId});
        if (!res.data.match) {
            return;
        }
        let data = {match: res.data.match};
        for (let key in res.data.round) {
            data.round = res.data.round[key][0];
        }
        setGameList(data);
        // console.log(gameList);
    }, [dataDetail.relationMatchId]);
    return (
        <>
            {gameList.match &&
                <div className='data_footer_detail'>
                    <div className='data_footer_left'>
                        <strong>{gameList.match.name}</strong>
                        <span className='data_footer_time'>{`比赛时间：${formatDate(gameList.match.beginTime + '000')} ~ ${formatDate(gameList.match.endTime + '000')}`}</span>
                        {gameList.round && <span className='data_footer_company'>实时排名第1：{gameList.round.teamName}</span>}
                    </div>
                    <div className='data_footer_right'>
                        <span>{gameList.match.count}个团队参与</span>
                        <a className='icon_img'
                            target='_blank'
                            rel="noopener noreferrer"
                            href={gameList.match.url}> </a>
                    </div>
                </div>
            }
        </>
    );
};

const AboutDataList = props => {
    const {dataDetail} = props;
    const [dataSetList, setDataSetList] = useState([]);
    useMemo(async () => {
        const res = await getDataSetList({taskId: dataDetail.taskId});
        const data = res.data.list.filter((item, index) => item.datasetId !== dataDetail.datasetId && index < 4);
        setDataSetList(data || []);
    }, [dataDetail.datasetId, dataDetail.taskId]);
    if (dataSetList.length === 0) {
        return <></>;
    }
    return (
        <>
            {dataSetList.length &&
                <div className='data_footer_title'>
                    <strong>相关数据集</strong>
                    <div className='data_footer_cards'>
                        {
                            dataSetList.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/luge/dataDetail?id=${item.datasetId}`}
                                    className='data_footer_cards_item'>
                                    <span className='data_feel_sign'>{item.label}</span>
                                    <strong className='data_feel_title'>{item.datasetName}</strong>
                                    <span className='cardItemNum'>
                                        <span className='card_data_icon'></span>
                                        {item.downTimes}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
};
const dataFooter = props => {
    const {dataDetail} = props;
    return (
        <div className='data_footer_container'>
            <GameDetail dataDetail={dataDetail} />
            <AboutDataList dataDetail={dataDetail} />
        </div>
    );
};

export default memo(dataFooter);