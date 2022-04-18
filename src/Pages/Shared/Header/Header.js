
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
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
                            <div className=' md:flex text-xl text-mono font-semibold '>

                                <CustomLink className='px-4 block md:inline' to='/home' >Home</CustomLink>
                                <CustomLink className='px-4 block md:inline' to='/blog' >Blog</CustomLink>
                                <CustomLink className='px-4 block md:inline' to='/about' >About</CustomLink>
                                {
                                    user ? <CustomLink className='px-4 block md:inline' to='/login' onClick={() => signOut(auth)} >Sign Out</CustomLink> : <CustomLink className='px-4 block md:inline' to='/login' >Login</CustomLink>
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