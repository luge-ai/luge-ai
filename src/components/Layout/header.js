import React, {memo} from 'react';
import Banner from './banner';
import Nav from './nav';

// interface Props {
//     header: string[];
// }
const Header = props => {
    const {bannerRef} = props;
    return (
        <div className='lugeHeader'>
            <Nav />
            <Banner bannerRef={bannerRef}/>
        </div>
    );
};

export default memo(Header);
