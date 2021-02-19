import React from "react";
import Footer from "./Footer";
import image from "../profile_pics1.jpg";

export default function Home() {
    return (
        <main className='flex-grow'>
            <section className='px-6 mx-auto lg:px-0 max-w-xl lg:max-w-3xl'>
                <div className='flex items-center sm:space-x-10 md:space-x-0'>
                <div className='relative inline-block mb-6 md:mb-10 xl:mb-16'>
                    <h1 className='relative z-10 mt-8 text-4xl font-semibold leading-tight text-gray-800 font-header md:text-6xl lg:text-6xl lg:font-medium xl:text-6xl md:mt-16 xl:mt-24'>
                        <span>Hi, I am Charles!</span>
                    </h1>
                    <div className='absolute left-0 z-0 w-full h-4 md:h-6 xl:h-10 lg:h-8 bottom-2 bg-yellowSecondary'></div>
                <div className='flex-grow mt-8 sm:justify-start md:justify-center sm:flex sm:mt-4 md:mt-9 lg:mt-10 xl:mt-14'>
                </div>
                    <p className='prose prose-lg sm:prose-xl md:text-justify'>
                        <span className='hidden sm:inline-block pr-2'>My name is Charles Eze.</span>
                        I am a self-taught software developer, focused on creating amazing user experiences utilizing high-performance web technologies.
                    </p>
                </div>
                </div>
                <div className='mt-3 py-16 -mt-20 md:mr-5 px-7 md:pb-52 md:px-28 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-75'>
                    <div className='relative'>
                        <div className='inset-0'>
                                <img src={image} 
                                className='object-cover object-top w-full h-auto rounded-lg'
                                alt='Charles Eze'
                                type='image/jpeg' />
                        </div>
                    </div>

                </div>

            </section>
            <div>
                <Footer />
            </div> 
        </main>
    );          
};