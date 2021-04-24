import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar({ click, handleClick }) {

    return (
        <nav className='flex top-0 w-full z-50 fixed border-b justify-between items-center h-16 py-10 bg-gray-50 border-red-500 text-gray-700 text-lg shadow-sm font-sans font-normal'
        role='navigation'>
            <NavLink to='/' className='-ml-5 cursive pl-8 text-black text-4xl'>
                CHARLES
            </NavLink>
            <div onClick={handleClick} className='px-4 cursor-pointer lg:hidden select-none'>
                <i className={click ? "fas fa-times text-gray-400 text-2xl md:text-3xl relative float-right flex" : "fas fa-bars text-gray-400 text-2xl md:text-3xl "}/>
            </div>
            <div className='pr-8 lg:block hidden'>
                <NavLink className='px-4 py-1 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/'>
                    Portfolio
                </NavLink>
                <NavLink className='px-4 py-1 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/post'
                         activeClassName='bg-gray-400 text-white'>
                    Blog Posts
                </NavLink>
                <NavLink className='px-4 py-1 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/project'
                         activeClassName='bg-gray-400 text-white'>
                    Projects
                </NavLink>
                <NavLink className='px-4 py-1 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/about'
                         activeClassName='bg-gray-400 text-white'>
                    About Me
                </NavLink>
                <a className='px-4 py-1 hover:bg-purple-500 hover:text-white rounded-full' 
                         href='#contact' 
                         activeClassName='bg-gray-400 text-white'>
                    Contact Me
                </a>

            </div>


        </nav>
    )
}