import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams()
    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className='text-[#066163]'>
                <h1 className='text-center text-4xl  font-mono'>Booking form</h1>
                <div>
                    <form>
                        <div>
                            <label className='text-2xl p-2 block'>Full name</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="text" placeholder='Your full name' />
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Phone number</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="Phone" placeholder='Your Phone number' />
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Address</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="text" placeholder='Your address' />
                        </div>
                        <div className='flex'>
                            <label className='text-2xl p-2 '>Gender :</label>
                            <div className='flex items-center'>
                                <label className='text-2xl p-2 '>Male</label>
                                <input className='h-[40px] outline-none border-2 border-[#066163] rounded px-2 ' type="radio" placeholder='Your address' name='gender' />
                            </div>
                            <div className='flex items-center'>
                                <label className='text-2xl p-2'>Female</label>
                                <input className='h-[40px] outline-none border-2 border-[#066163] rounded px-2 ' type="radio" placeholder='Your address' name='gender' />
                            </div>
                        </div>
                        <div className='w-50 text-center'>
                            <button className='px-8 py-2 my-6 text-lg text-white bg-[#066163]' type="submit">Booking</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;