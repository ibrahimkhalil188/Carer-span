import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch("../data.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const { serviceId } = useParams()
    const selectedService = item.filter(selectedItem => selectedItem.id === serviceId)
    const handleSubmit = e => {
        e.preventDefault()
        toast.success("Thanks for Booking us")
    }
    return (
        <div>
            <div className=' flex justify-center items-center'>
                <div className='text-[#066163]'>
                    <h1 className='text-center text-4xl  font-mono'>Booking form</h1>
                    <div>

                        <form onSubmit={handleSubmit}>
                            <div className='flex justify-between items-center border-2 border-emerald-600 p-4 m-4'>
                                <div>
                                    <div className='text-2xl'>
                                        Your selected service
                                        <p>Name: {selectedService[0]?.name}</p>
                                        <p>Price: ${selectedService[0]?.price}</p>
                                    </div>
                                </div>
                                <img className='w-[120px] h-[120px] rounded-full mt-6' src={selectedService[0]?.img} alt="" />
                            </div>

                            <div>
                                <label className='text-2xl p-2 block'>Full name</label>
                                <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="text" placeholder='Your full name' required />
                            </div>
                            <div>
                                <label className='text-2xl p-2 block'>Phone number</label>
                                <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="Phone" placeholder='Your Phone number' required />
                            </div>
                            <div>
                                <label className='text-2xl p-2 block'>Address</label>
                                <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="text" placeholder='Your address' required />
                            </div>
                            <div>
                                <label className='text-2xl p-2 block'>Age</label>
                                <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="number" placeholder='Your age' required />
                            </div>
                            <div className='flex'>
                                <label className='text-2xl p-2 '>Gender :</label>
                                <div className='flex items-center'>
                                    <label className='text-2xl p-2 '>Male</label>
                                    <input className='h-[40px] outline-none border-2 border-[#066163] rounded px-2 ' type="radio" placeholder='Your address' name='gender' required />
                                </div>
                                <div className='flex items-center'>
                                    <label className='text-2xl p-2'>Female</label>
                                    <input className='h-[40px] outline-none border-2 border-[#066163] rounded px-2 ' type="radio" placeholder='Your address' name='gender' required />
                                </div>
                            </div>
                            <div className='w-50 text-center'>
                                <button className='px-8 py-2 my-6 text-lg text-white bg-[#066163]' type="submit">Booking</button>
                            </div>
                            <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;