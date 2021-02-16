import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { btnOutline } from "./Button";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <header className="bg-gray-900 h-20 flex justify-center items-center text-xl sticky top-0 z-999 ">
            <div className="flex justify-center items-center max-w-screen-2xl h-20">
                <nav className="flex">
                    <NavLink to="/" exact className="text-white justify-self-start ml-5 cursor-pointer no-underline text-3xl flex items-center">
                        CHARLES <i className="fas fa-code ml-2 text-3xl" />
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "grid grid-cols-4 gap-2.5 list-none text-center justify-end mr-8"}>
                        <li className="h-20">
                            <NavLink to="/" exact onClick={closeMobileMenu}
                                activeClassName="text-red-100 bg-red-700"
                                className="text-white flex items-center no-underline py-2 px-4 h-full hover:border-b-4 hover:border-white transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                                Portfolio
                                </NavLink >
                        </li>
                        <li className="h-20">
                            <NavLink to="/post" className="text-white flex items-center no-underline py-2 px-4 h-full hover:text-green-800" 
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="h-20">
                            <NavLink to="/project" className="text-white flex items-center no-underline py-2 px-4 h-full hover:text-green-800"
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="h-20">
                            <NavLink to="/about" className="text-white flex items-center no-underline py-2 px-4 h-full hover:text-green-800"
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={btnOutline}>Contact Me</Button>}

                </nav>
            </div>
        </header>
    )
}