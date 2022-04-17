import React from 'react';
import bannerImage from '../../../Asset/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div style={{ height: "86vh", objectFit: "fill", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${bannerImage})` }}>

            </div>
        </div>
    );
};

export default Banner;