import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ click, handleClick, closeMobileMenu }) {
    

    return (
        <div className='relative flex'>
            <div className={click ? 'grid -mb-64 pt-6 pb-2 z-50 grid-rows-5 absolute border-b inset-0 w-full top-full justify-items-start text-gray-800 box-border gap-10 text-based pr-32 pl-3 bg-gray-100' : 'hidden'} onCLick={handleClick}>
                <NavLink className='-mt-1 border-b w-full border-purple-400 hover:bg-purple-500 hover:text-white max-h-7 rounded-full font-sans font-medium px-2 -my-2' to='/' onClick={closeMobileMenu}>
                    Portfolio
                </NavLink>
                <NavLink className='border-b w-full border-purple-400 hover:bg-purple-500 max-h-7 rounded-full hover:text-white font-sans font-medium px-2 -my-2' to='/post' onClick={closeMobileMenu}>
                    Blog Posts
                </NavLink>
                <NavLink className='border-b w-full border-purple-500 hover:bg-purple-500 max-h-7 rounded-full hover:text-white font-sans font-medium px-2 -my-2' to='/project' onClick={closeMobileMenu}>
                    Projects
                </NavLink>
                <NavLink className='border-b w-full border-purple-400 hover:bg-purple-500 max-h-7 rounded-full hover:text-white font-sans font-medium px-2 -my-2' to='/about' onClick={closeMobileMenu}>
                    About Me
                </NavLink>
                <NavLink className='border-b w-full border-purple-500 hover:bg-purple-500 max-h-7 hover:text-white rounded-full font-sans font-medium px-2 -my-2' to='/contact' onClick={closeMobileMenu}>
                    Contact Me
                </NavLink>
            </div>
        </div>
    )
}