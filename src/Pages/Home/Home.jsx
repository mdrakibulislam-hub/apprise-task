import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import women from "../../assets/women-drinking.jpg";
import profiles from "../../assets/profiles.png"
import { FaLink } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { LiaShareAltSolid } from "react-icons/lia";
import { LuLeaf } from "react-icons/lu";
import { PiBone } from "react-icons/pi";
import { TbBottle } from "react-icons/tb";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { SiVitess } from "react-icons/si";
import pills from "../../assets/capsules.png";
import tablet from "../../assets/tablet.jpg";
import bluePill from "../../assets/blue-pill.svg";
import yellowMineral from "../../assets/yellow-mineral.svg";
import minralsOutline from "../../assets/mineral-outline.svg";
import vitaminsOutline from "../../assets/vitamin-outline.svg";
import probioticsOutline from "../../assets/probiotics-outline.svg";
import herbsOutline from "../../assets/herbs-outline.svg";
import specialtyOutline from "../../assets/specialty-outline.svg";
import blackMineral from "../../assets/minerals-black.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {

    useEffect(() => {
        document.title = "v.Blend Frontend Design"
    }, [])

    return (
        <div className='main-container mt-20 font-montserrat'>



            {/* ::::::::: HOME TOP SECTION ::::::::: */}

            <div className="home-top lg:flex justify-between">

                <div className="home-top-left flex flex-col gap-6 w-3/5" data-aos="fade-up">
                    <h1 className='text-5xl lg:text-7xl leading-tight'>Simplify your health <img src={bluePill} alt="" className='w-12 inline-block' /> and <img src={yellowMineral} alt="" className='w-12 inline-block' /> wellbeing</h1>


                    <div className="unlock-plan-btn flex gap-4 items-center">
                        <p className='text-lg'>Unlock your <span className='font-bold'>Personalized</span> <br /> vitamin plan.</p>
                        <Link><BsArrowRightCircleFill className='text-6xl' /></Link>
                    </div>
                </div>

                <div className="home-top-right mt-6 flex gap-2 items-center" data-aos="fade-up">
                    <Link className='text-2xl font-medium underline'>Browse Library</Link>
                    <BsArrowDownCircle className='text-3xl' />
                </div>

            </div>


            {/* ::::::::: HOME MIDDLE SECTION ::::::::: */}
            <div className="home-middle-section grid lg:grid-cols-4 gap-8 my-12 items-end">


                <div className='quiz-div lg:col-span-1 flex flex-col gap-4' data-aos="fade-up">
                    <Link className=' flex gap-2 items-center text-2xl lg:text-3xl bg-white rounded-full py-5 px-7 w-fit'><BsArrowRight /> <span className='font-medium'>Start The Quiz!</span></Link>
                    <div className='bg-[#FFF089] p-5 rounded-3xl'>
                        <div className='flex gap-2 items-center flex-wrap md:flex-nowrap'>
                            <span className='text-7xl font-normal'>1151</span>
                            <span className='text-lg'>People completed <span className='font-semibold'>the quiz</span> today</span>
                        </div>

                        <div className='mt-6 flex gap-2'>
                            <div className='bg-white p-3 rounded-full w-fit'><img src={profiles} alt="" /></div>
                            <FaCirclePlus className='text-white text-5xl' />
                        </div>

                    </div>
                </div>



                <div className='middle-div lg:col-span-2 bg-white rounded-3xl' data-aos="fade-up">
                    <div className='p-5 flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-3'>
                                <Link className='px-5 py-2 text-black border-black border-2 rounded-full text-lg font-medium'>About <sup>01</sup></Link>
                                <Link className='p-2 text-black border-black border-2 rounded-full text-lg font-medium'><FaLink className='text-2xl' /></Link>

                            </div>
                            <CiCirclePlus className='text-5xl flex-wrap' />
                        </div>
                        <div>
                            <h1 className='text-xl lg:text-3xl'>Recieve daily packs personalized to your <span className='font-semibold'>unique health needs</span></h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={women} className='rounded-b-3xl' alt="" />
                        <div className='flex gap-3 items-center absolute bottom-4 left-4 bg-white p-4 rounded-full'>
                            <span className='bg-white p-2 border-2 border-black rounded-full'><CiTrophy className='text-4xl' /></span>
                            <span className='bg-white p-2 border-2 border-black rounded-full'><LiaShareAltSolid className='text-4xl' /></span>
                            <span className='bg-white p-2 border-2 border-black rounded-full'><LuLeaf className='text-4xl' /></span>
                        </div>
                    </div>
                </div>


                <div className='pills-div p-8 rounded-3xl bg-[#D9EAFD] lg:col-span-1 h-fit' data-aos="fade-up">
                    <div className='flex justify-between'>
                        <h3 className='px-5 py-2 text-black bg-white rounded-full font-medium text-xl'>Library <sup>02</sup></h3>
                        <button><FaCirclePlus className='text-white text-4xl' /></button>
                    </div>
                    <div className='w-full'><img className='w-full' src={pills} alt="" /></div>
                </div>


            </div>


            {/* ::::::::: HOME BOTTOM SECTION ::::::::: */}
            <div className='home-bottom-section grid lg:grid-cols-2 gap-8 my-8'>
                <div className='boottom-left-section bg-white p-8 rounded-3xl' data-aos="fade-up">
                    <div className='top-section lg:flex gap-6 justify-between items-end'>
                        <p className='text-4xl flex items-end'>Product <br /> Library <BsArrowRightCircleFill /></p>
                        <p className='mt-4 lg:mt-0'>Build your own <br /><span className='font-bold'>personalized monthly pack!</span></p>
                    </div>
                    <div className='bottom-section mt-12'>
                        <p className='font-medium mb-4'>/Libray <sup>02</sup></p>


                        {/* ACCORIDIAN STARTS HERE */}

                        <div className="join join-vertical w-full rounded-none">
                            <div className="collapse collapse-arrow join-item border-b border-base-300" data-aos="fade-up">
                                <input type="radio" name="my-accordion" checked="checked" />
                                <div className="collapse-title text-3xl font-medium">
                                    Minerals <img src={minralsOutline} className='w-6 inline-block' alt="" />
                                </div>
                                <div className="collapse-content pl-10 lg:pl-20 flex flex-col gap-4">
                                    <p className='text-xl'>Minerals are chemical elements required an essential elements...</p>
                                    <Link className='px-5 py-2 w-fit text-black border-black border-2 rounded-full text-lg font-medium flex items-center gap-2'><BsArrowRight />Explore</Link>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b border-base-300" data-aos="fade-up">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-3xl font-medium">
                                    Vitamins <img src={vitaminsOutline} className='w-6 inline-block' alt="" />
                                </div>
                                <div className="collapse-content pl-10 lg:pl-20 flex flex-col gap-4">
                                    <p className='text-xl'>Vitamins are chemical elements required an essential elements...</p>
                                    <Link className='px-5 py-2 w-fit text-black border-black border-2 rounded-full text-lg font-medium flex items-center gap-2'><BsArrowRight />Explore</Link>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b border-base-300" data-aos="fade-up">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-3xl font-medium">
                                    Probiotics <img src={probioticsOutline} className='w-6 inline-block' alt="" />
                                </div>
                                <div className="collapse-content pl-10 lg:pl-20 flex flex-col gap-4">
                                    <p className='text-xl'>Probiotics are chemical elements required an essential elements...</p>
                                    <Link className='px-5 py-2 w-fit text-black border-black border-2 rounded-full text-lg font-medium flex items-center gap-2'><BsArrowRight />Explore</Link>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b border-base-300" data-aos="fade-up">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-3xl font-medium">
                                    Herbs <img src={herbsOutline} className='w-6 inline-block' alt="" />
                                </div>
                                <div className="collapse-content pl-10 lg:pl-20 flex flex-col gap-4">
                                    <p className='text-xl'>Herbs are chemical elements required an essential elements...</p>
                                    <Link className='px-5 py-2 w-fit text-black border-black border-2 rounded-full text-lg font-medium flex items-center gap-2'><BsArrowRight />Explore</Link>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b border-base-300" data-aos="fade-up">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-3xl font-medium">
                                    Speciality <img src={specialtyOutline} className='w-6 inline-block' alt="" />
                                </div>
                                <div className="collapse-content pl-10 lg:pl-20 flex flex-col gap-4">
                                    <p className='text-xl'>Specialty are chemical elements required an essential elements...</p>
                                    <Link className='px-5 py-2 w-fit text-black border-black border-2 rounded-full text-lg font-medium flex items-center gap-2'><BsArrowRight />Explore</Link>
                                </div>
                            </div>
                        </div>

                        {/* ACCORDIAN ENDS HERE */}


                    </div>
                </div>


                <div className='boottom-right-section bg-[#FFF089] p-8 rounded-3xl' data-aos="fade-up">

                    <div className='bottom-right-top lg:flex justify-between items-center'>
                        <h3 className='text-4xl font-medium'>Minerals <img src={blackMineral} alt="" className='w-7 inline-block' /></h3>
                        <Link className=' flex gap-2 items-center text-xl bg-white rounded-full py-3 px-5 w-fit mt-4 lg:mt-4'><BsArrowRight /> <span className='font-medium'>Explore Library</span></Link>
                    </div>



                    <div className='middle-div bg-white rounded-3xl lg:w-3/5 m-auto my-8 lg:my-16' data-aos="fade-up">
                        <div className='p-5 flex flex-col gap-8'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Link className='px-5 py-2 text-black border-black border-2 rounded-full text-lg font-medium'>Bones</Link>
                                    <Link className='p-2 text-black border-black border-2 rounded-full text-lg font-medium'><PiBone className='text-2xl' /></Link>

                                </div>
                                <CiCirclePlus className='text-5xl' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>Calcium Plus D3</h1>
                            </div>
                            <div className='lg:flex justify-between items-center'>
                                <h3 className='font-medium text-lg'>Is this right for you?</h3>
                                <h3 className='font-medium text-xl underline flex items-center gap-2 mt-4 lg:mt-0'><BsArrowRight /> Start the quiz!</h3>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={tablet} className='rounded-b-3xl w-full' alt="" />
                            <div className='flex gap-3 items-center absolute bottom-4 left-4 bg-white p-3 rounded-full'>
                                <span className='bg-white p-2 border-2 border-black rounded-full'><LuLeaf className='text-xl' /></span>
                                <span className='bg-white p-2 border-2 border-black rounded-full font-medium'><SiVitess className='text-xl' /></span>
                                <span className='bg-white p-2 border-2 border-black rounded-full'><TbBottle className='text-xl' /></span>
                            </div>
                        </div>

                    </div>

                    <div className='slider-arrows w-fit m-auto flex gap-2 text-white text-4xl'>
                        <FaChevronCircleLeft className='hover:text-slate-500' />
                        <FaChevronCircleRight className='hover:text-slate-500' />
                    </div>

                </div>


            </div>


        </div >
    );
};

export default Home;