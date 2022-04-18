import React from 'react';
import bannerImage from '../../../Asset/banner.jpg'
const Banner = () => {
    return (
        <div className='relative bg-black'>
            <div className='hover:opacity-20' style={{ height: "86vh", objectFit: "fill", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${bannerImage})`, }}>
            </div>

            <div className='absolute top-4 md:top-1/4 left-4 md:left-1/4' >
                <div>
                    <h1 className='text-2xl md:text-5xl  text-white font-mono font-bold'> Hi, I'm Ibrahim khalil !!</h1>
                    <h1 className='text-xl md:text-3xl pt-2 text-white font-mono font-bold'> Your career coach</h1>
                </div>
                <div>
                    <p className='text-xl font-serif text-white pt-4 pr-4 md:pt-12 md:pr-20'>I help people land the job they always wanted . I help people career planing ,resuming building , skill development and overcome from depression. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;