import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <div className='navbar w-full top-0 left-0 right-0  z-50 h-full relative sm:fixed'>
                <div className="container w-full h-full shadow-sm shadow-stone-400">
                    <div className="nav bg-[#44140D] w-full h-auto flex flex-col sm:flex-row px-20 justify-between items-center flex-wrap">
                        {/* Logo Section */}
                        <div className="logo w-20 h-auto p-2 rounded-lg">
                            <img src="/images/kbCafe.jpg" alt="logoImage"  className='logo-img w-full rounded-xl'/>
                        </div>


                        {/* Links Section */}
                        <div className="links w-full sm:w-2/5">
                            <ul className='nav-links flex flex-row sm:flex-row justify-around text-xl/2 font-bold text-[#FCFCFC] flex-wrap font-cursive sm:text-md'>
                                <li className='p-2 rounded-md transition duration-300 delay-150 hover:scale-90 hover:text-[#F6F7F8] '><Link to='/' className='nav-link '>Home</Link></li>
                                <li className='p-2 rounded-md transition duration-300 delay-150 hover:scale-90 hover:text-[#F6F7F8]'><Link to='/about' className='nav-link'>About</Link></li>
                                <li className='p-2 rounded-md transition duration-300 delay-150 hover:scale-90 hover:text-[#F6F7F8]'><Link to='/menu' className='nav-link'>Menu</Link></li>
                                <li className='p-2 rounded-md transition duration-300 delay-150 hover:scale-90 hover:text-[#F6F7F8]'><Link to='/gallery' className='nav-link'>Gallery</Link></li>
                                <li className=' p-2 rounded-md transition duration-300 delay-150 hover:scale-90 hover:text-[#F6F7F8]'><Link to='/contact' className='nav-link'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Navbar