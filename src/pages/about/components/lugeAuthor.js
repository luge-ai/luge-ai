import React from 'react';
import qin_li_po from '../assets/uses/qin_li_po.png';
import baidu_zhangyimin from '../assets/uses/baidu_zhangyimin.png';

const lugeAuthorList = [
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/e88d9ad9270413046fa52b05099986e5.png'} alt=''/>,
        name: '陈清财',
        source: '哈尔滨工业大学(深圳)',
        url: 'http://faculty.hitsz.edu.cn/chenqingcai1',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/4e70d86e3c8d1db8b226f873c661e6f1.jpeg'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/fbc4d1a810fb9853ee4eb7c94d526dad.png'}  alt='图片'/>,
        name: '户保田',
        source: '哈尔滨工业大学(深圳)',
        url: 'http://faculty.hitsz.edu.cn/hubaotian',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/4e70d86e3c8d1db8b226f873c661e6f1.jpeg'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/c0e6c503d6e0df3dbf53f9ef690279e8.png'}  alt='图片'/>,
        name: '黄民烈',
        source: '清华大学',
        url: 'http://coai.cs.tsinghua.edu.cn/hml',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/1e31d35af67b0ca96bd6f5e6e6f1e44b.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/cbab21bf008cc7d0bb92281468e30a24.png'}  alt='图片'/>,
        name: '刘云峰',
        source: '追一科技',
        url: 'https://zhuiyi.ai/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/65aa4aca0bb6b5bf259effd374dd475a.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/035bfb460abbf9f663442282347d7579.png'} alt='图片'/>,
        name: '柳厅文',
        source: '中科院信工所',
        url: 'http://liutingwen.ac.cn',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/e77bd7af37c3972a9d63ccd1783c977a.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/0113d88e150d74ebfa1656efce2ccf96.png'} alt='图片'/>,
        name: '尚利锋',
        source: '保密',
        url: ''
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/f1619f7d9f7d6de3df42030068a28ee7.png'}  alt='图片'/>,
        name: '史树明',
        source: '腾讯',
        url: 'https://cn.linkedin.com/in/shumingshi',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/42d3c2b206b142ac825d30a8e33d98e4.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/b3806710dae0e07646862867d6d953bd.png'}  alt='图片'/>,
        name: '谭松波',
        source: '无',
        url: 'https://baike.baidu.com/item/%E8%B0%AD%E6%9D%BE%E6%B3%A2/4606211'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/0ae14e39a101789ca30dcec878fb4cc3.png'}  alt='图片'/>,
        name: '王金刚',
        source: '美团',
        url: 'https://sites.google.com/site/bitwjg/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/8f59a8a02e8aad17f22ac21729eeccb1.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/2120e5beffab4bec395189b832f54012.png'}  alt='图片'/>,
        name: '吴华',
        source: '百度',
        url: 'https://wuhuanlp.github.io/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/ed128a330f826a284a4b0f2f18a84802.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/f3318ab344146e6b17a478347961562f.png'}  alt='图片'/>,
        name: '周明',
        source: '澜舟科技',
        url: 'https://langboat.com/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/24744ebcf8487ed205526841c40daa1a.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/3163e54649af48f24e195b325aaa6437.png'}  alt='图片'/>,
        name: '张岳',
        source: '西湖大学',
        url: 'https://frcchang.github.io/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/976a122afe06120f4671522896a71714.png'
    },
    {
        icon: () => <img src={'https://fanyiapp.cdn.bcebos.com/cms/image/cd384b31fc4a63dc93c99e750ab10ca6.png'}  alt='图片'/>,
        name: '赵妍妍',
        source: '哈尔滨工业大学',
        url: 'http://ir.hit.edu.cn/~yanyan/',
        companyLogo: 'https://fanyiapp.cdn.bcebos.com/cms/image/4e70d86e3c8d1db8b226f873c661e6f1.jpeg'
    }
];
const lugeBudaos = [
    {
        icon: () => <img src={qin_li_po}  alt='图片'/>,
        name: '覃立波(负责人)',
        source: '哈尔滨工业大学',
        url: ''
    },
    {
        icon: () => <img src={baidu_zhangyimin}  alt='图片'/>,
        name: '张一鸣',
        source: '百度',
        url: ''
    }
];
function lugeAuthor() {
    return (
        <>
            <div className='lugeDataAuthContainer'>
                <h6 className='ab_title'><i className='icon_about'></i>千言学术委员会</h6>
                <ul className='luge_cards_list'>
                    {lugeAuthorList.map((item, index) => (
                        <li key={index} className='data_author'>
                            {item.url && <a
                                    onClick={() => {
                                        window._hmt.push(['_trackEvent', '千言学术委员会', `点击${item.name}`]);
                                    }}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    href={item.url}
                                    className='data_author_a'>
                                    {item.icon()}
                                    <label>
                                        {item.name}
                                        {/* <i>等</i> */}
                                    </label>
                                    <span className='luge_word'>{item.source}</span>
                                </a>
                                }
                            {!item.url &&
                                <span className='data_author_a'>
                                    {item.icon()}
                                    <label>
                                        {item.name}
                                        <i>等</i>
                                    </label>
                                    <span className='luge_word'>{item.source}</span>
                                </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className='lugeDataAuthContainer'>
                <h6 className='ab_title'><i className='icon_about'></i>千言布道师</h6>
                <ul className='luge_cards_list'>
                    {lugeBudaos.map((item, index) => (
                        <li key={index} className='data_author'>
                            {item.url && <a
                                onClick={() => {
                                    window._hmt.push(['_trackEvent', '千言布道师', `点击${item.name}`]);
                                }}
                                target='_blank'
                                rel="noopener noreferrer"
                                href={item.url} className='data_author_a'>
                                {item.icon()}
                                <label>
                                    {item.name}
                                    {/* <i>等</i> */}
                                </label>
                                <span className='luge_word'>{item.source}</span>
                            </a>
                            }
                            {!item.url && <span className='data_author_a'>
                                {item.icon()}
                                <label>
                                    {item.name}
                                    {/* <i>等</i> */}
                                </label>
                                <span className='luge_word'>{item.source}</span>
                            </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default React.memo(lugeAuthor);
