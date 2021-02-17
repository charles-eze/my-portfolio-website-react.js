import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer className='flex justify-between items-center h-16 bg-gray-700 font-normal text-sm md:text-base lg:text-base text-white bottom-0 absolute w-full'>
            <p className='lg:ml-14 sm:ml-2'> <i className="far fa-copyright text-base"></i> 2021, Charles Eze</p>
            <div className='lg:mr-20 sm:mr-1'>
                <SocialIcon 
                    url='https://www.linkedin.com/in/charles-eze-29432b17a/' 
                    className='mr-1 md:mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                    target='_blank'
                    fgColor='#fff' 
                    style={{ height:33, width:33}} />

                <SocialIcon 
                    url='https://twitter.com/hackfolio' 
                    className='mr-1 md:mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                    target='_blank' 
                    fgColor='#fff'
                    style={{ height:33, width:33}} />

                <SocialIcon 
                    url='https://github.com/charles-eze' 
                    className='mr-1 md:mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                    target='_blank' 
                    style={{ height:33, width:33}} />              
            </div>
        </footer>
    )
};

export default Footer;

