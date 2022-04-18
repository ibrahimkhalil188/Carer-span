import React from 'react';
import bannerImage from '../../../Asset/banner.jpg'
const Banner = () => {
    return (
        <div className='relative bg-black'>
            <div className='hover:opacity-20' style={{ height: "86vh", objectFit: "fill", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${bannerImage})`, }}>
            </div>

            <div className='absolute top-1/4 left-1/4' >
                <div>
                    <h1 className='text-5xl  text-white font-mono font-bold'> Hi, I'm Ibrahim khalil !!</h1>
                    <h1 className='text-3xl pt-4 text-white font-mono font-bold'> Your career coach</h1>
                </div>
                <div>
                    <p className='text-xl font-serif text-white pt-12 pr-20'>I help people land the job they always wanted . I help people career planing ,resuming building , skill development and overcome from depression. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;