import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ click, handleClick }) {
    

    return (
        <div className={click ? 'grid grid-rows-5 text-center relative ml-32 h-full  bg-blue-400' : 'hidden'} onCLick={handleClick}>
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
    )
}