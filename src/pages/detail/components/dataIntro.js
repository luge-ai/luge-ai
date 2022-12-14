import React, { memo } from 'react';
import { Table } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import JSONPretty from 'react-json-pretty';
const dataIntro = props => {
    const { dataDetail } = props;
    return (
        <div className=''>
            {dataDetail.datasetId !== '26' && dataDetail.author && dataDetail.author[0] && (
                <div className='intro_card'>
                    <h6 className='ab_title'>
                        <i className='icon_about'></i>作者
                    </h6>
                    <div className='intro_content'>
                        {
                            dataDetail.author.length > 1 &&
                            <>
                                <img src={dataDetail.author[0].logo} alt='' />
                                <div className='intro_content_right'>
                                    <span className='intro_tle_row'>
                                        {
                                            dataDetail.author.map((item, index) => {
                                                if (index < dataDetail.author.length - 1) {
                                                    return <>{item.authorName}{item.title ? (item.title) : ''}、</>
                                                } else {
                                                    return <>{item.authorName}{item.title ? (item.title) : ''}</>
                                                }
                                            }

                                            )
                                        }
                                    </span>
                                    <span className='intro_tle_row'>
                                        {
                                            dataDetail.author.map((item, index) => {
                                                if (index < dataDetail.author.length - 1) {
                                                    return <>{item.company}、</>
                                                } else {
                                                    return <>{item.company}</>
                                                }
                                            }

                                            )
                                        }
                                    </span>
                                </div>
                            </>
                        }
                        {dataDetail.author.length === 1 &&
                            <>
                                <img src={dataDetail.author[0].authorName ? dataDetail.author[0].authorPic : dataDetail.author[0].logo} alt='' />
                                {dataDetail.author[0].authorName && (
                                    <div className='intro_content_right'>
                                        <strong className='intro_title'>
                                            {dataDetail.author[0].authorName}
                                            <i>等</i>
                                        </strong>
                                        <span className='intro_tle_row'>
                                            {dataDetail.author[0].title}
                                        </span>
                                        <span className='intro_company'>
                                            {dataDetail.author[0].company &&
                                                <>
                                                    <i>单位：</i>{dataDetail.author[0].company}
                                                </>
                                            }
                                            <img
                                                src={dataDetail.author[0].logo}
                                                className='icon_logo'
                                                alt=''
                                            />
                                        </span>
                                        {dataDetail.author[0].url &&
                                            <a target='_blank'
                                                rel="noopener noreferrer"
                                                href={dataDetail.author[0].url}
                                                className='author_index'>
                                                作者主页
                                                <ArrowRightOutlined />
                                            </a>}
                                    </div>
                                )}
                                {!dataDetail.author[0].authorName && (
                                    <div className='inner_intro_company'>
                                        {dataDetail.author[0].company}
                                        {dataDetail.author[0].url &&
                                            <a target='_blank'
                                                rel="noopener noreferrer"
                                                href={dataDetail.author[0].url}
                                                className='author_index'>
                                                了解更多
                                                <ArrowRightOutlined />
                                            </a>}
                                    </div>
                                )}
                            </>
                        }

                    </div>
                </div>
            )}
            <div className='intro_card'>
                <h6 className='ab_title'>
                    <i className='icon_about'></i>数据集介绍
                </h6>
                <div className='intro_relize_content'
                    dangerouslySetInnerHTML={{ // bca-disable-line
                        __html: dataDetail.detail && dataDetail.detail.replace(/\n/g, '</br>')
                    }}
                ></div>
            </div>
            {dataDetail.pre &&
                <div className='intro_card data_before_show'>
                    <h6 className='ab_title'>
                        <i className='icon_about'></i>数据预览
                    </h6>
                    <div className='intro_card_content'>
                        {
                            dataDetail.pre.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <span
                                            className='before_show_desc'
                                            dangerouslySetInnerHTML={{ // bca-disable-line
                                                __html: item.desc?.replace(/\n/g, '</br>')
                                            }}
                                        ></span>
                                        {
                                            item.table && (
                                                <Table
                                                    columns={
                                                        item.table.titles && item.table.titles.map(subItem => {
                                                            return {
                                                                title: subItem,
                                                                dataIndex: subItem,
                                                                key: subItem
                                                            };
                                                        })
                                                    }
                                                    dataSource={
                                                        item.table.lists && item.table.lists.map(subItem => {
                                                            let newFormate = {};
                                                            for (let key in subItem) {
                                                                newFormate[item.table.titles[key]] = subItem[key];
                                                            }
                                                            return newFormate;
                                                        })
                                                    }
                                                    pagination={false}
                                                />
                                            )
                                        }
                                        {
                                            item.json && (
                                                <div className='data_demo_desc'>
                                                    <JSONPretty data={item.json}></JSONPretty>
                                                </div>
                                            )
                                        }
                                    </div>
                                );
                            }
                            )
                        }
                    </div>
                </div>
            }
            {dataDetail.sys && (dataDetail.sys.desc || dataDetail.sys.demo) && (
                <div className='intro_card'>
                    <h6 className='ab_title'>
                        <i className='icon_about'></i>基线系统
                    </h6>
                    {dataDetail.sys.desc &&
                        <div className='basic_system_content'
                            dangerouslySetInnerHTML={{ // bca-disable-line
                                __html: dataDetail.sys.desc
                            }}>
                        </div>}
                    {
                        dataDetail.sys.demo && dataDetail.sys.demo.map((subItem, index) => (
                            <div key={index} className='basic_system_item'>
                                <strong>{subItem.platName}</strong>
                                <a href={subItem.baselineUrl}>
                                    {subItem.baselineName}
                                    <ArrowRightOutlined />
                                </a>
                            </div>
                        ))
                    }
                </div>
            )}
            {dataDetail.quote && dataDetail.quote.length > 0 && (
                <div className='intro_card'>
                    <h6 className='ab_title'>
                        <i className='icon_about'></i>数据集引用
                    </h6>
                    <p>
                        如在学术论文中使用千言数据集，请添加相关引用说明，具体如下：
                    </p>
                    {dataDetail.quote.map((item, index) => (
                        <div className='use_data_item' key={index}>
                            {/* <strong>关系抽取数据集DuIE引用：</strong> */}
                            <span>{item.paperName}</span>
                            {item.paperUrl && <a href={item.paperUrl}>
                                论文地址
                                <ArrowRightOutlined />
                            </a>}
                        </div>
                    ))}
                </div>
            )}
            {dataDetail.md5 && <div className='intro_card'>
                <h6 className='ab_title'>
                    <i className='icon_about'></i>MD5
                </h6>
                <p>{dataDetail.md5}</p>
            </div>}
            <p className='intro_question'>
                任何数据集问题，随时联系我们：<span>luge_ai@126.com</span>
            </p>
        </div>
    );
};
export default memo(dataIntro);
