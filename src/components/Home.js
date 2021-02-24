import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import image from "../profile_pics1.jpg";
import Contact from "./Contact";
import Roll from 'react-reveal/Roll';


export default function Home() {
    return (
        <main className='flex-grow'>
            <section className='px-6 mx-auto lg:px-0 max-w-xl lg:max-w-3xl'>
                <div className='flex items-center sm:space-x-10 md:space-x-0'>
                <div className='relative inline-block mb-6 md:mb-10 xl:mb-16'>
                    <h1 className='relative z-10 mt-8 text-4xl font-semibold leading-tight text-gray-800 font-header md:text-6xl lg:text-6xl lg:font-medium xl:text-6xl md:mt-16 xl:mt-24'>
                        <span>Hi, I am Charles!</span>
                    </h1>
                    <div className='relative left-0 z-0 -mt-2 -ml-3 w-11/12 md:w-5/6 h-4 md:h-6 xl:h-10 lg:h-8 bottom-2 rounded-full bg-purple-300'></div>
                <div className='flex-grow mt-8 sm:justify-start md:justify-center sm:flex sm:mt-4 md:mt-9 lg:mt-6'>
                </div>
                    <p className='prose prose-lg sm:prose-xl md:text-justify'>
                        <span className='hidden sm:inline-block pr-2'>My name is Charles Eze.</span>
                        I am a self-taught software developer, focused on creating amazing user experiences utilizing high-performance web technologies.
                    </p>
                </div>
                </div>
                <div className='py-16 -mt-20 md:mr-5 px-7 md:px-28 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-75'>
                    <div className='static'>
                        <div className='inset-0'>
                                <img src={image} 
                                className='object-cover object-top w-full h-auto rounded-lg'
                                alt='Charles Eze'
                                type='image/jpeg' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-6 -mt-24 md:-mt-5 mx-auto lg:px-0 max-w-xl lg:max-w-3xl'>
                <ul className='grid mt-16 gap-y-4 md:text-lg lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16'>
                    <li style={{opacity: 1, transform: 'none'}}>
                        <div className=' font-sans'>
                            <Roll left ssrFadeout>
                                <h2 className='flex items-center text-2xl space-x-2 no-underline font-bold'>
                                    <NavLink to='/project' 
                                    className='text-gray-900 hover:text-blue-900 hover:underline '> Projects </NavLink>
                                    <span className='mt-1'>{'>'}</span>
                                </h2>
                                <div className='prose text-base mt-2 md:mt-4 lg:mt-6 md:prose-lg'>
                                    <p>
                                        A few of the projects I've developed and collaborated on. I currently work as a freelance developer specialized in React, JavaScript and all things
                                    </p>
                                </div>
                            </Roll>
                        </div>
                    </li>
                    <li style={{opacity: 1, transform: 'none'}}>
                        <div className=' font-sans'>
                            <Roll right ssrFadeout>
                                <h2 className='flex items-center text-2xl space-x-2 no-underline font-bold'>
                                    <NavLink to='/post' 
                                    className='text-gray-900 hover:text-blue-900 hover:underline '> Blog </NavLink>
                                    <span className='mt-1'>{'>'}</span>
                                </h2>
                                <div className='prose text-base mt-2 md:mt-4 lg:mt-6 md:prose-lg'>
                                    <p>
                                    A few of the projects I've developed and collaborated on. I currently work as a freelance developer specialized in React, JavaScript and all things
                                    </p>
                                </div>
                            </Roll>
                        </div>
                    </li>
                    <li style={{opacity: 1, transform: 'none'}}>
                        <div className=' font-sans'>
                            <Roll left ssrFadeout>
                                <h2 className='flex items-center text-2xl space-x-2 no-underline font-bold'>
                                    <NavLink to='/about' 
                                    className='text-gray-900 hover:text-blue-900 hover:underline '> About </NavLink>
                                    <span className='mt-1'>{'>'}</span>
                                </h2>
                                <div className='prose text-base mt-2 md:mt-4 lg:mt-6 md:prose-lg'>
                                    <p>
                                    A few of the projects I've developed and collaborated on. I currently work as a freelance developer specialized in React, JavaScript and all things
                                    </p>
                                </div>
                            </Roll>
                        </div>
                    </li>
                </ul>
            </section>
            <section className='px-6 -mt-11 md:-mt-20 mx-auto lg:px-0 max-w-xl lg:max-w-5xl'>
                <div id='#portfolio' className='mt-20 md:mt-32 lg:mt-40'>
                    <div className='mt-10 lg:mt-16'>
                        <div className='max-w-xl mx-auto mb-16 lg:mb-28 lg:max-w-3xl'>
                            <h3 className='mb-2 font-bold text-lg text-center text-gray-800 sm:text-xl md:text-2xl font-header'>
                                TECHNOLOGIES I WORK WITH
                            </h3>
                            <ul className='flex flex-wrap justify-center'>
                                <li>
                                    <span className='inline-flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Python 3</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>React.js</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Pandas</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>SQL</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Sanity CMS</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>GIT</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Burp Suite</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>CSS</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Jest</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Mocha</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>JavaScript</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Django</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Express.js</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Node.js</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Tailwind CSS</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Beautiful Soup</span>
                                </li>
                                <li>
                                    <span className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base font-medium leading-5 mt-4 mx-2 bg-purple-500 text-white'>Metasploit</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <div className='pb-7'>

            </div>
            <div id='contact' className='-mt-7 pb-7'>
                <Contact />
            </div>
            
            <div>
                <Footer />
            </div> 
        </main>
    );          
};