import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ click, handleClick, closeMobileMenu }) {
    

    return (
        <div className={click ? 'grid grid-rows-5 text-center box-border text-based block float-right pr-8 pl-16 pb-80 h-2/5 bg-gray-200 ' : 'hidden'} onCLick={handleClick}>
            <NavLink className='p-4 font-sans font-bold -my-2' to='/' onClick={closeMobileMenu}>
                Portfolio
            </NavLink>
            <NavLink className='p-4 font-sans font-bold -my-2' to='/post' onClick={closeMobileMenu}>
                Blog Posts
            </NavLink>
            <NavLink className='p-4 font-sans font-bold -my-2' to='/project' onClick={closeMobileMenu}>
                Projects
            </NavLink>
            <NavLink className='p-4 font-sans font-bold -my-2' to='/about' onClick={closeMobileMenu}>
                About Me
            </NavLink>
            <NavLink className='p-4 font-sans font-bold -my-2' to='/contact' onClick={closeMobileMenu}>
                Contact Me
            </NavLink>
        </div>
    )
}