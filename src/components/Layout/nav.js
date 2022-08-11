import React from 'react';
import { Link } from 'react-router-dom';

const navTitles = [
    { name: '首页', url: '/', checked: '#/' },
    { name: '任务', url: '/luge/task', checked: '#/luge/task' },
    { name: '排行', url: '/luge/ranking', checked: '#/luge/ranking' },
    { name: '比赛', url: '/luge/game', checked: '#/luge/game' },
    { name: '讨论', url: 'https://aistudio.baidu.com/aistudio/forum/topiclist?boardId=235', type: 1 },
    { name: '关于千言', url: '/luge/about', checked: '#/luge/about' },
];
function Nav(props) {
    let urlStatus = (checked) => window.location.hash === checked;
    const { game } = props;
    return (
        <div className='lugeNav'>
            <div className='luge_nav_content'>
                <div className='luge_nav_left'>
                    <Link to='/' className={['navTitleLogo', game ? 'new-logo' : ''].join(' ')}></Link>
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
                                            urlStatus(item.checked) ? 'active' : ''
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
                    <Link className='match_icon' to={'/luge/match'}>
                        <span className='match_word'>语言与智能技术竞赛</span>
                        <i className='icon_fire'></i>
                    </Link>
                    <a
                        onClick={
                            () => {
                                window._hmt.push(['_trackEvent', '首页', `icon_github`]);
                            }
                        }
                        className={['icon_github', game ? 'new-icon_github' : ''].join(' ')}
                        href='https://github.com/luge-ai/luge-ai'
                        rel="noopener noreferrer"
                        target='_blank'> </a>
                    <a
                        onClick={
                            () => {
                                window._hmt.push(['_trackEvent', '首页', `icon_gitee`]);
                            }
                        }
                        className={['icon_gitee', game ? 'new-icon_gitee' : ''].join(' ')}
                        href='https://gitee.com/luge-ai/luge-ai'
                        target='_blank'
                        rel="noopener noreferrer"> </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Nav);
