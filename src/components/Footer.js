import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer className='flex -mt-10 justify-between items-center h-16  bg-gray-700 font-normal text-sm md:text-base relative z-10 lg:text-base text-white bottom-0 w-full'>
            <p className='lg:ml-14 ml-2'> <i className="far fa-copyright text-sm mr-1.5"></i>{new Date().getFullYear()}, Charles Eze</p>
            <div className='lg:mr-20 mr-2'>
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
                    fgColor='#fff'
                    style={{ height:33, width:33}} />              
            </div>
        </footer>
    )
};

export default Footer;

