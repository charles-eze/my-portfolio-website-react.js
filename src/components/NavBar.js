import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact>
                        CHARLES <i className="fas fa-code" />
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" exact onClick={closeMobileMenu}
                                activeClassName="text-red-100 bg-red-700"
                                className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                                Portfolio
                                </NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/post" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" 
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/project" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                activeClassName="text-red-100 bg-red-700"
                                onClick={closeMobileMenu}>
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}