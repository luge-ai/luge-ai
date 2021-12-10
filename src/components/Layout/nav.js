import React from 'react';
import { Link } from 'react-router-dom';

const navTitles = [
    { name: '首页', url: '/luge/home' },
    { name: '任务', url: '/luge/task' },
    { name: '排行', url: '/luge/ranking' },
    { name: '比赛', url: '/luge/game' },
    { name: '讨论', url: 'https://aistudio.baidu.com/paddle/forum/topic/list?boardId=235', type: 1 },
    { name: '关于千言', url: '/luge/about' },
];
function Nav() {
    let urlStatus = (path) => window.location.href.includes(path);
    return (
        <div className='lugeNav'>
            <div className='luge_nav_content'>
                <div className='luge_nav_left'>
                    <Link to='/luge/home' className='navTitleLogo'></Link>
                    <div className='navTitle'>
                        {navTitles.map(item => (
                            <>
                                {!item.type &&
                                    <Link
                                        onClick={
                                            () => {
                                                window._hmt.push(['_trackEvent', '导航点击', `${item.name}`]);
                                            }
                                        }
                                        to={item.url}
                                        key={item.name}
                                        className={[
                                            'navTitleItem',
                                            urlStatus(item.url) ? 'active' : ''
                                        ].join(' ')}
                                    >
                                        {item.name}
                                    </Link>
                                }
                                {item.type &&
                                    <a
                                        onClick={
                                            () => {
                                                window._hmt.push(['_trackEvent', '导航点击', `${item.name}`]);
                                            }
                                        }
                                        href={item.url}
                                        key={item.name}
                                        className={[
                                            'navTitleItem',
                                            urlStatus(item.url) ? 'active' : ''
                                        ].join(' ')}
                                        rel="noopener noreferrer"
                                        target='_blank'
                                    >
                                        {item.name}
                                    </a>
                                }
                            </>
                        ))}
                    </div>
                </div>
                <div className='luge_nav_right'>
                    <a
                        onClick={
                            () => {
                                window._hmt.push(['_trackEvent', '首页', `icon_github`]);
                            }
                        }
                        className='icon_github'
                        href='https://github.com/luge-ai/luge-ai'
                        rel="noopener noreferrer"
                        target='_blank'> </a>
                    <a
                        onClick={
                            () => {
                                window._hmt.push(['_trackEvent', '首页', `icon_gitee`]);
                            }
                        }
                        className='icon_gitee'
                        href='https://gitee.com/luge-ai/luge-ai'
                        target='_blank'
                        rel="noopener noreferrer"> </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Nav);
