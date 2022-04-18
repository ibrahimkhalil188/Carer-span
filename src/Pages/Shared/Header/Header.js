
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {

    const [user] = useAuthState(auth);
    /* const [navbar, setNavbar] = useState(true) */
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='container mx-auto flex justify-between items-center h-[150px]  md:h-[83px] text-[#066163] font-bold'>
                <div className=''>
                    <h1 className='md:text-4xl text-2xl text-mono font-bold'>CAREER SPAN</h1>
                </div>
                <div>
                    <div className='text-4xl'>
                        {/* <button className='md:hidden visible'>{navbar ?
                            <button onClick={() => setNavbar(!navbar)}><AiOutlineClose /></button> :
                            <button onClick={() => setNavbar(!navbar)}><AiOutlineMenu /></button>
                        }
                        </button> */}
                        {
                            <div className='text-xl text-mono font-semibold '>

                                <Link className='px-4 block md:inline' to='/home' >Home</Link>
                                <Link className='px-4 block md:inline' to='/blog' >Blog</Link>
                                <Link className='px-4 block md:inline' to='/about' >About</Link>
                                {
                                    user ? <Link className='px-4 block md:inline' to='/login' onClick={() => signOut(auth)} >Sign Out</Link> : <Link className='px-4 block md:inline' to='/login' >Login</Link>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;