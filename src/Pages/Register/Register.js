import React from 'react';
import google from '../../Asset/google.png'
const Register = () => {
    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className='text-[#066163]'>
                <h1 className='text-center text-4xl  font-mono'>Register please</h1>
                <div>
                    <form>
                        <div>
                            <label className='text-2xl p-2 block'>Email</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="email" placeholder='Your email' />
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Password</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="password" placeholder='Your password' />
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Confirm Password</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="password" placeholder='Your password' />
                        </div>
                        <div className='w-50 text-center'>
                            <button className='px-8 py-2 my-6 text-lg text-white bg-[#066163]' type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-around items-center'>
                    <div className='w-[220px] h-[2px] bg-[#066163]'></div> <p className='text-xl font-bold'>OR</p>  <div className='w-[220px] h-[2px] bg-[#066163]'></div>
                </div>
                <div className='mt-6'>
                    <div className=' flex justify-around items-center w-1/2 mx-auto bg-[#066163] text-white p-2 rounded'>
                        <img className='w-12 h-12' src={google} alt="" /> <span className='text-xl'>Sing in with google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;