import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar({ click, handleClick }) {

    return (
        <nav className='flex border-b justify-between items-center h-16 py-10 bg-gray-50 text-black text-lg relative shadow-sm font-sans font-medium'
        role='navigation'>
            <NavLink to='/' className='-ml-5 cursive pl-8 text-4xl'>
                CHARLES
            </NavLink>
            <div onClick={handleClick} className='px-4 cursor-pointer md:hidden'>
                <i className={click ? "fas fa-times text-black text-3xl relative float-right flex" : "fas fa-bars text-black text-3xl "}/>
            </div>
            <div className='pr-8 md:block hidden'>
                <NavLink className='p-4 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/'>
                    Portfolio
                </NavLink>
                <NavLink className='p-4 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/post'
                         activeClassName='bg-gray-400 text-white'>
                    Blog Posts
                </NavLink>
                <NavLink className='p-4 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/project'
                         activeClassName='bg-gray-400 text-white'>
                    Projects
                </NavLink>
                <NavLink className='p-4 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/about'
                         activeClassName='bg-gray-400 text-white'>
                    About Me
                </NavLink>
                <NavLink className='p-4 hover:bg-purple-500 hover:text-white rounded-full' 
                         to='/contact'
                         activeClassName='bg-gray-400 text-white'>
                    Contact Me
                </NavLink>

            </div>


        </nav>
    )
}