import React from "react";

export default function SinglePost() {
    return <h1> SinglePost Page!</h1>
};

/*

<header className="bg-gray-900 h-20 flex justify-center items-center text-lg sticky top-0 z-999 ">
            <div className="flex">
                <nav className="contents">
                    <NavLink to="/" exact className="mr-96 text-white justify-self-start cursive cursor-pointer no-underline text-4xl flex items-center">
                        CHARLES <i className="fas fa-code ml-2 text-2x" />
                    </NavLink>
                    <div className="hidden" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars text-white"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "grid grid-cols-5 gap-2.5 ml-11 list-none text-center justify-end mr-8"}>
                        <li className="h-20">
                            <NavLink to="/" exact onClick={closeMobileMenu}
                                activeClassName="text-red-100 bg-purple-700 rounded-full py-3 px-6 border-b-2"
                                className="text-white h-10 self-center border-fuchsia-600 flex items-center no-underline py-2 px-4 mt-5 mb-2 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110">
                                Portfolio
                                </NavLink >
                        </li>
                        <li className="h-20">
                            <NavLink to="/project" className="text-white h-10 self-center border-fuchsia-600 flex items-center no-underline py-2 px-4 mt-5 mb-2 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110" 
                                activeClassName="text-red-100 bg-purple-700 rounded-full py-3 px-6 border-b-2"
                                onClick={closeMobileMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="h-20">
                            <NavLink to="/post" className="text-white h-10 self-center border-fuchsia-600 flex items-center no-underline py-2 px-4 mt-5 mb-2 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110"
                                activeClassName="text-red-100 bg-purple-700 rounded-full py-3 px-6 border-b-2"
                                onClick={closeMobileMenu}>
                                Blog Posts
                            </NavLink>
                        </li>
                        <li className="h-20">
                            <NavLink to="/about" className="text-white h-10 self-center border-fuchsia-600 flex items-center no-underline py-2 px-4 mt-5 mb-2 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110"
                                activeClassName="text-red-100 bg-purple-700 rounded-full py-3 px-6 border-b-2"
                                onClick={closeMobileMenu}>
                                About Me
                            </NavLink>
                        </li>
                        <li className="h-20">
                            <NavLink to="/contact" className="text-white h-10 self-center border-fuchsia-600 flex items-center no-underline py-2 px-4 mt-5 mb-2 transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110"
                                onClick={closeMobileMenu}
                                activeClassName="text-red-100 bg-purple-700 rounded-full py-3 px-6 border-b-2">
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                   

                </nav>
            </div>
        </header> */