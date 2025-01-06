import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, logout } = useAuth();
    const handleLogOut = async () => {
        try {
            const result = await logout();
            toast.success("User logged out successfully")
        }
        catch (err) {
            toast.warning(err.message);
        }
    };
    const navLinks = <>
        <li className='mr-2 md:text-base text-xs font-bold'>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "!text-yellow-500 bg-none"
                        : "hover:text-yellow-500"
                }
            >
                Home
            </NavLink>
        </li>
        <li className='mr-2 md:text-base text-xs font-bold'><NavLink to="/contact-us" className="hover:text-yellow-500">contact us</NavLink></li>
        <li className='mr-2 md:text-base text-xs font-bold'><a className="hover:text-yellow-500">dashboard</a></li>
        <li className='mr-2 md:text-base text-xs font-bold'>
            <NavLink
                to="/menu"
                className={({ isActive }) =>
                    isActive
                        ? "!text-yellow-500 bg-none"
                        : "hover:text-yellow-500"
                }
            >
                Our menu
            </NavLink>
        </li>
        <li className='mr-2 md:text-base text-xs font-bold'>
            <NavLink
                to="/our-shop/salad"
                className={({ isActive }) =>
                    isActive
                        ? "!text-yellow-500 bg-none"
                        : "hover:text-yellow-500"
                }
            >
                Our shop
            </NavLink>
        </li>
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
                {
                    user ?
                        <>
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
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <Link to="/login" className='btn  bg-slate-500 border hover:bg-slate-600 hover:border-slate-600 border-slate-500 text-white mr-4'>Login</Link>
                            <Link to="/signup" className='btn bg-yellow-500 border hover:bg-yellow-600 hover:border-yellow-600 border-yellow-500 text-white'>Sign Up</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;