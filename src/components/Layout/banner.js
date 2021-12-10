import React, { useRef, memo, useEffect } from 'react';
import firstVideoSrc from './assets/firstVideo.mp4';
import secondVideo from './assets/secondVideo.mp4';
import wordVideo from './assets/wordVideo.mp4';

const Banner = props => {
    const videoRef = useRef(null);
    const videoRefSecond = useRef(null);
    const logoRef = useRef(null);
    const {bannerRef} = props;
    useEffect(() => {
        videoRef.current.addEventListener('ended', function () {
            console.log('播放结束');
            videoRef.current.style.display = 'none';
            videoRefSecond.current.play();
            videoRefSecond.current.style.display = 'block';
        }, false);
        setTimeout(() => {
            if (logoRef.current) {
                logoRef.current.className = 'banner_logo logo_admin';
            }
        }, 2200);
    }, []);
    return (
        <div className='nav-swiper' ref={bannerRef}>
            <div className='video_total'>
                <video
                    ref={videoRef}
                    src={firstVideoSrc}
                    muted
                    autoPlay='autoplay'
                    preload='auto'
                    className='videoAnim videoImg'
                ></video>
                <video
                    ref={videoRefSecond}
                    src={secondVideo}
                    style={{display: 'none'}}
                    muted
                    loop
                    preload='auto'
                    className='videoImg'
                ></video>
            </div>
            <div className='video_content'>
                <video
                    src={wordVideo}
                    muted
                    autoPlay='autoplay'
                    preload='auto'
                    className='videoAnim wordAnim'
                ></video>
                <span className='banner_logo' ref={logoRef}></span>
            </div>
        </div>
    );
};

export default memo(Banner);
