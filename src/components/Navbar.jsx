import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <div className="hidden sm:flex md:py-5 px-4 justify-between items-center">
                <div>
                    <div className="text-white text-lg font-bold mt-2">
                        <span className="text-3xl p-2 w-32 h-20 rounded font- bg-gradient-to-r from-orange-600 via-purple-500 to-pink-500">A</span>
                        bdu<span className="text-2xl">L</span>
                    </div>
                </div>
                <ul className="flex items-center gap-9 text-xs">
                    <li>
                        <AnchorLink className="anchor-link" offset={50} href="#home">
                            Home
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="anchor-link" offset={50} href="#about">
                            About Me
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="anchor-link" offset={50} href="#projects">
                            Projects
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="anchor-link" offset={50} href="#contact">
                            Contact
                        </AnchorLink>
                    </li>
                </ul>
                <div className="bg-gradient-to-r from-amber-500 to-pink-500 mt-2 py-2 px-4 rounded-3xl cursor-pointer text-sm hover:border-white hover:border-2">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        Connect With Me
                    </AnchorLink>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="sm:hidden">
                <button
                    onClick={toggleSidebar}
                    className="p-3 m-3 text-white bg-gradient-to-r from-orange-600 via-purple-500 to-pink-500 rounded-md focus:outline-none"
                >
                    ☰
                </button>

                <div
                    className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={toggleSidebar}
                            className="text-white text-3xl"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-col items-center mt-16">
                        <AnchorLink
                            className="text-white text-lg py-2"
                            offset={50}
                            href="#home"
                            onClick={toggleSidebar}
                        >
                            Home
                        </AnchorLink>
                        <AnchorLink
                            className="text-white text-lg py-2"
                            offset={50}
                            href="#about"
                            onClick={toggleSidebar}
                        >
                            About Me
                        </AnchorLink>
                        <AnchorLink
                            className="text-white text-lg py-2"
                            offset={50}
                            href="#projects"
                            onClick={toggleSidebar}
                        >
                            Projects
                        </AnchorLink>
                        <AnchorLink
                            className="text-white text-lg py-2"
                            offset={50}
                            href="#contact"
                            onClick={toggleSidebar}
                        >
                            Contact
                        </AnchorLink>
                        <div className="bg-gradient-to-r from-amber-500 to-pink-500 mt-4 py-2 px-4 rounded-3xl cursor-pointer text-sm text-center">
                            <AnchorLink className="anchor-link" offset={50} href="#contact">
                                Connect With Me
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
