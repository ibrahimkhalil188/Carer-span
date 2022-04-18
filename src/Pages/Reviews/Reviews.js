import React, { useState } from 'react';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
const Reviews = () => {
    const [count, setCount] = useState(1)
    const users = [
        { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "I would certainly recommend career counselling to others. I found it incredibly helpful", id: 1, name: 1 },
        { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "Thank you so much for the session last week. I have today been verbally offered and I’ve accepted my next role", id: 2, name: 1 },
        { img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "The course helped me to identify that I want to study personal development and psychology. ", id: 3, name: 1 },
        { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", say: "The course helped me to identify that I want to study personal development and psychology. ", id: 4, name: 2 },
        { img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", say: "Thank you so much for the session last week. I have today been verbally offered and I’ve accepted my next role", id: 5, name: 2 },
        { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", say: "I would certainly recommend career counselling to others. I found it incredibly helpful", id: 6, name: 2 },

    ]

    const item = users?.filter(user => user?.name === count)
    console.log(item)
    const handleCount = () => {
        setCount(count + 1)
        if (count === 2) {
            setCount(1)
        }
    }
    return (
        <div>
            <h1 className='text-4xl pt-12 text-center text-[#066163] font-mono font-semibold bg-[#F2F2F2]'>Reviews</h1>
            <div className='flex justify-center items-center container mx-auto'>
                <button className='text-[#066163] text-4xl m-4' onClick={handleCount}><BsFillArrowLeftSquareFill /></button>
                <div className=' mx-auto gap-12 pt-12  grid grid-cold-1 md:grid-cols-3 m-4' >

                    {item?.map(i =>

                        <div key={i.id} className="border-2">
                            <div>
                                <img className='h-[250px] w-full  mx-auto' src={i?.img} alt="" />
                                <h1 className='text-xl p-4'>{i?.say}</h1>
                            </div>

                        </div>
                    )}

                </div>
                <button className='text-[#066163] text-4xl m-4' onClick={handleCount}><BsFillArrowRightSquareFill /></button>
            </div>
        </div>
    );
};

export default Reviews;