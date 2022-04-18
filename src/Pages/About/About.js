import React from 'react';
import profile from '../../Asset/profile.jpg'
const About = () => {
    return (
        <div className='h-[71vh] flex justify-around items-center'>
            <div className='w-1/2'>
                <h1 className='text-4xl font-mono font-bold py-4 text-[#066163]'>Ibrahim khalil</h1>
                <h3 className='text-xl font-mono font-semibold'>
                    A Curious learner who learning web development for the last four months! In 2022 I have a few goals to be a junior MERN stack developer and join an internship program and then join a company as a junior MERN stack developer.
                    In the long run, I want to be a Full-stack developer. so that, I'm learning continuously.</h3>
            </div>
            <div>
                <img className='w-[350px] h-[350px] rounded-full' src={profile} alt="" />
            </div>
        </div>
    );
};

export default About;