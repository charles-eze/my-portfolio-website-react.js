import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar({handleClick}) {

    return (
        <nav className='flex justify-between items-center h-16 bg-gray-900 text-white relative shadow-sm font-mono'
        role='navigation'>
            <NavLink to='/' className='cursive pl-8 text-4xl'>
                CHARLES
            </NavLink>
            <div onClick={handleClick} className='px-4 cursor-pointer md:hidden'>
                <svg 
                    className="w-8 h-8 text-white " 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                <NavLink className='p-4' to='/'>
                    Portfolio
                </NavLink>
                <NavLink className='p-4' to='/post'>
                    Blog Posts
                </NavLink>
                <NavLink className='p-4' to='/project'>
                    Projects
                </NavLink>
                <NavLink className='p-4' to='/about'>
                    About Me
                </NavLink>
                <NavLink className='p-4' to='/contact'>
                    Contact Me
                </NavLink>

            </div>


        </nav>
    )
}