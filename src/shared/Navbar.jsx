import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const navLinks = <>
        <li className='mr-2 md:text-base text-xs font-bold'><Link to="/" className="hover:text-yellow-500">Home</Link></li>
        <li className='mr-2 md:text-base text-xs font-bold'><a className="hover:text-yellow-500">contact us</a></li>
        <li className='mr-2 md:text-base text-xs font-bold'><a className="hover:text-yellow-500">dashboard</a></li>
        <li className='mr-2 md:text-base text-xs font-bold'><Link to="/menu" className="hover:text-yellow-500">our menu</Link></li>
        <li className='mr-2 md:text-base text-xs font-bold'><a className="hover:text-yellow-500">our shop </a></li>
    </>
    return (
        <div className="navbar fixed z-10  uppercase py-4 md:px-14 px-4 text-white bg-black bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <Link className='font-cinzel'>
                        <p className='md:text-3xl text-2xl font-extrabold'>BISTRO BOSS</p>
                        <p style={{ letterSpacing: "7px" }} className='md:text-2xl text-lg font-semibold'>Restaurant</p>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;