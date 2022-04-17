import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service
    return (
        <div className='border-2'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='p-4 bg-[#066163] text-white'>
                <h1 className='text-3xl text-mono'>{name}</h1>
                <p className='text-lg py-4 line-height'>{description.slice(0, 150) + " ..."}</p>
                <p className='text-2xl font-bold'>price: ${price}</p>

            </div>
            <Link to={`/home/${id}`} className='block text-center w-full py-4 text-xl bg-[#383838] hover:bg-[#00092C] text-white'>Book Now</Link>
        </div>
    );
};

export default Service;