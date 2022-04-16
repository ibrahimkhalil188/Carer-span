import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='container mx-auto flex justify-between items-center  h-[83px] text-[#066163] font-bold'>
                <div className=''>
                    <h1 className='text-4xl text-mono font-bold'>CAREER SPAN</h1>
                </div>
                <div className='text-xl text-mono font-semibold'>
                    <Link className='px-4' to='/home' >Home</Link>
                    <Link className='px-4' to='/blog' >Blog</Link>
                    <Link className='px-4' to='/service' >Service</Link>
                    <Link className='px-4' to='/about' >About</Link>
                    <Link className='px-4' to='/login' >Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;