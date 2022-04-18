import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Asset/google.png'
import auth from '../../firebase.init';

const Register = () => {

    const [userInfo, setUserInfo] = useState({
        email: "", password: "", confirmPass: "",
    });
    const [error, setError] = useState({
        email: "", password: "", confirmPassword: "", general: "",
    });


    const [createUserWithEmailAndPassword, user, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (e) => {
        const email = e.target.value;

        if (/\S+@\S+\.\S+/.test(email)) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: "" });
        } else {
            setError({ ...error, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePassword = (e) => {
        const password = e.target.value

        if (password.length > 6) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const confirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setError({ ...error, confirmPassword: "" });
        } else {
            setError({ ...error, confirmPassword: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    };

    useEffect(() => {
        if (hookError.message) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password");
                    break;
                default:
                    toast.error("something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {

            navigate(from);
            toast.success("User created successfully", { id: "test" })
        }
    }, [user, navigate, from]);

    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className='text-[#066163]'>
                <h1 className='text-center text-4xl  font-mono'>Register please</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='text-2xl p-2 block'>Email</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="email" placeholder='Your email' onChange={handleEmail} required />
                            {error?.email && <p>{error.email}</p>}
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Password</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="password" placeholder='Your password' onChange={handlePassword} required />

                            {error?.password && <p>{error.password}</p>}
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Confirm Password</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="password" placeholder='Your password' onChange={confirmPassword} required />
                            {error?.confirmPassword && <p>{error.confirmPassword}</p>}
                        </div>
                        <div className='w-50 text-center'>
                            <button className='px-8 py-2 my-6 text-lg text-white bg-[#066163]' type="submit">Register</button>
                        </div>
                    </form>
                    <h1 className='text-xl'><span className='text-black'>Already have any account?</span> <Link to="/login" className='font-bold underline'>Login</Link></h1>
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