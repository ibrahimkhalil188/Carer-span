import React, { useState } from 'react';

const Reviews = () => {
    const [count, setCount] = useState(1)
    const users = [
        { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 1, name: 1 },
        { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 2, name: 1 },
        { img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 3, name: 1 },
        { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 4, name: 2 },
        { img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 5, name: 2 },
        { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", say: "Nothing", id: 6, name: 2 },

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
        <div className='flex'>
            {item?.map(i =>
                <div key={i.id}>
                    <img className='w-[250px]' src={i?.img} alt="" />
                    <h1 className='text-4xl'>{i?.say}</h1>
                </div>
            )}
            <button onClick={handleCount}>next</button>
        </div>
    );
};

export default Reviews;