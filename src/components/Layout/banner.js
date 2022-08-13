import React, { memo } from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const Banner = props => {
    const { bannerRef } = props;
    const banners = useSelector(item => item.dataList.bannerList);
    return (
        <div className='nav-swiper' ref={bannerRef}>
            <div className='video_total'>
                <Carousel
                    dots={true}
                    autoplay>
                    {
                        banners && banners.map(
                            (item, index) => (
                                <div className='banner_img' key={index}>
                                    <a href={item.pageUrl} style={{ background: item.imgBg }}>
                                        <img src={item.imgUrl} alt='' />
                                    </a>
                                </div>
                            )
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default memo(Banner);
