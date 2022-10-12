import React, { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LinkA from '../common/LinkA';
const navTitles = [
    { name: '首页', url: '/', checked: ['#/'] },
    { name: '精选', url: '/luge/selected', checked: ['#/luge/selected'] },
    { name: '排行', url: '/luge/ranking', checked: ['#/luge/ranking'] },
    { name: '比赛', url: '/luge/game', checked: ['#/luge/game'] },
    { name: '讨论', url: 'https://aistudio.baidu.com/aistudio/forum/topiclist?boardId=235', type: 1 },
    {
        name: '入驻',
        url: '/luge/join',
        checked: ['#/luge/join', '#/luge/join?type=2'],
        titleList: [
            {
                name: '贡献数据集',
                url: '/luge/join',
                checked: ['#/luge/join']
            },
            {
                name: '入驻技术专家',
                url: '/luge/join?type=2',
                checked: ['#/luge/join?type=2']
            }
        ]
    },
    { name: '关于千言', url: '/luge/about', checked: ['#/luge/about'] },
];
function Nav(props) {
    const [update, setUpdate] = useState(new Date());
    const history = useHistory();
    const dispatch = useDispatch();
    useMemo(() => {
        const unlisten = history.listen((historyLocation) => {
            setUpdate(new Date());
            dispatch({
                type: 'datalist',
                payload: {
                    taskId: ''
                }
            });
        });
        return () => {
            unlisten();
        };
    }, [history]);
    let game = window.location.hash === '#/luge/match';
    return (
        <div className={['lugeNav', game ? 'matchNav' : ''].join(' ')}>
            <div className='luge_nav_content'>
                <div className='luge_nav_left'>
                    <Link to='/' className={['navTitleLogo', game ? 'new-logo' : ''].join(' ')}></Link>
                    <div className='navTitle' key={update}>
                        {navTitles.map((item, index) => (
                            <LinkA {...item} key={index} />
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
