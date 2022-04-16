import React from 'react';
import bannerImage from '../../../Asset/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-center items-center' style={{ height: "86vh", width: "100%", backgroundImage: `url(${bannerImage})` }}>

            </div>
        </div>
    );
};

export default Banner;