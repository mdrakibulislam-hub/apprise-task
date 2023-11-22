import React, { useState } from 'react';
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiThreads } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { PiLinkFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {

    const [hamClick, setHamClick] = useState(false);
    // console.log(hamClick);

    return (
        <>
            <div className="nav-container main-container font-montserrat font-semibold py-6 flex justify-between">


                <div className='flex items-center gap-4'>


                    <div className='hamburger-menu relative'>
                        <button onClick={() => { setHamClick(!hamClick) }} className='bg-white text-black p-3 text-xl rounded-full md:hidden'><GiHamburgerMenu /></button>

                        <div className={`flex flex-col gap-2 mt-2 bg-white p-3 rounded-2xl absolute ${hamClick ? "left-[0px]" : "left-[-99999px]"} w-40`}>

                            <Link className='hover:bg-gray-200 rounded-xl p-2'>About</Link>
                            <Link className='hover:bg-gray-200 rounded-xl p-2'>Send e-gitt</Link>
                        </div>

                    </div>


                    <div className="navbar-starting md:flex items-center gap-8 hidden">
                        <img src={logo} alt="" className='w-40' />
                        <Link className='bg-white py-3 px-4 rounded-full'>About</Link>
                        <Link className='bg-white py-3 px-4 rounded-full'>Send e-gitt</Link>
                    </div>
                </div>


                <Link className='navbar-middle flex-nowrap flex items-center gap-1 bg-white py-2 px-4 rounded-full'>Take The Quiz <PiLinkFill className='text-2xl' /></Link>

                <div className="navbar-ending flex items-center gap-3">

                    <Link className="share-button bg-white p-4 rounded-full hidden md:visible"><IoMdShare /></Link>

                    <div className="social-icons-button md:flex gap-2 bg-white py-2 px-4 rounded-full hidden">
                        <Link className='text-white bg-black p-2 rounded-full'><RiInstagramFill /></Link>
                        <Link className='text-white bg-black p-2 rounded-full'><SiThreads /></Link>
                        <Link className='text-white bg-black p-2 rounded-full'><FaFacebookF /></Link>
                    </div>

                    <div className="profile-button flex items-start gap-1">
                        <img src="https://picsum.photos/200" alt="" className='w-10 rounded-full' />
                        <Link className="profile-add-btn text-xs p-1 bg-white border border-black rounded-full"><FaPlus /></Link>
                    </div>
                </div>


            </div >
        </>
    );
};

export default Navbar;