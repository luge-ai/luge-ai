import React, { memo } from "react";
import { Link } from 'react-router-dom';


export default memo(({ type, url, name, checked, titleList }) => {
    let urlStatus = checked => checked.includes(window.location.hash);
    return (
        <>
            {!type &&
                <Link
                    onClick={
                        () => {
                            window._hmt.push(['_trackEvent', '导航点击', `${name}`]);
                        }
                    }
                    to={url}
                    key={name}
                    className={[
                        'navTitleItem',
                        titleList ? 'hasTitle' : '',
                        urlStatus(checked) ? 'active' : ''
                    ].join(' ')}
                >
                    {name}
                    {
                        titleList &&
                        <div className='secondMenu'>
                            {
                                titleList.map(({ name, checked, url }, sindex) => (
                                    <Link
                                        className={[
                                            'menuItem',
                                            urlStatus(checked) ? 'activeSecond' : ''
                                        ].join(' ')}
                                        to={url}
                                        key={sindex}>{name}</Link>
                                ))
                            }
                        </div>
                    }
                </Link>
            }
            {type &&
                <a
                    onClick={
                        () => {
                            window._hmt.push(['_trackEvent', '导航点击', `${name}`]);
                        }
                    }
                    href={url}
                    key={name}
                    className={[
                        'navTitleItem',
                        urlStatus(url) ? 'active' : ''
                    ].join(' ')}
                    rel="noopener noreferrer"
                    target='_blank'
                >
                    {name}
                </a>
            }
        </>
    );
});