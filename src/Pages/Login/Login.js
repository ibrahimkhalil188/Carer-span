import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Asset/google.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
        auth
    );

    const handleEmail = (e) => {
        const email = e.target.value;

        if (/\S+@\S+\.\S+/.test(email)) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setError({ ...error, email: "" })
        } else {
            setError({ ...error, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }
    const handlePassword = (e) => {
        const password = e.target.value

        if (password.length > 6) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "Password too short" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handlesubmit = (e) => {
        e.preventDefault();

        signInWithEmail(userInfo.email, userInfo.password);
    }

    const googleLogin = () => {
        signInWithGoogle()
    }

    useEffect(() => {
        if (user || user1) {
            navigate(from);
            toast.success("Login successfully")
        }
    }, [user, from, navigate, user1]);

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            console.log(error?.message)
            if ((error?.message).includes("auth/wrong-password")) {
                toast.error("Wrong password.", { id: "test" })
            }
            else if ((error?.message).includes("auth/invalid-email")) {
                toast.error("Invalid email", { id: "test" });
            }
            else if ((error?.message).includes("auth/user-not-found")) {
                toast.error("User not founded", { id: "test" })
            }
            else if ((error?.message).includes("auth/popup-closed-by-user")) {
                toast.error("popup closed by user", { id: "test" })
            }
            else {
                toast.error("something went wrong", { id: "test" })
            }
        }
    }, [hookError, googleError])


    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <div className='text-[#066163]'>
                <h1 className='text-center text-4xl  font-mono'>Login</h1>
                <div>
                    <form onSubmit={handlesubmit}>
                        <div>
                            <label className='text-2xl p-2 block'>Email</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="email" name="email" placeholder='Your email' onChange={handleEmail} required />
                            {error?.email && <p className='text-red-600' >{error.email}</p>}
                        </div>
                        <div>
                            <label className='text-2xl p-2 block'>Password</label>
                            <input className='md:w-[520px] h-[40px] outline-none border-2 border-[#066163] rounded px-2 block' type="password" name="password" placeholder='Your password' onChange={handlePassword} required />
                            {error?.password && <p className='text-red-600'>{error.password}</p>}
                        </div>
                        <div className='w-50 text-center'>
                            <button className='px-8 py-2 my-6 text-lg text-white bg-[#066163]' type="submit">Login</button>
                        </div>
                        <div>
                            <h1 className='text-xl'><span className='text-black'>Forget password?</span> <button onClick={async () => {
                                await sendPasswordResetEmail(userInfo.email);
                                userInfo.email ? toast.success('Sent email') : toast.error('Provide your mail')
                            }} className='font-bold underline'>Reset password</button></h1>
                        </div>
                    </form>
                    <h1 className='text-xl'><span className='text-black'>Don't have any account?</span> <Link to="/register" className='font-bold underline'>Register Now</Link></h1>
                </div>

                <div className='flex justify-around items-center'>
                    <div className='w-[220px] h-[2px] bg-[#066163]'></div> <p className='text-xl font-bold'>OR</p>  <div className='w-[220px] h-[2px] bg-[#066163]'></div>
                </div>
                <div className='mt-6'>
                    <button onClick={googleLogin} className=' flex justify-around items-center w-1/2 mx-auto bg-[#066163] text-white p-2 rounded'>
                        <img className='w-12 h-12' src={google} alt="" /> <span className='text-xl'>Sing in with google</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Login;