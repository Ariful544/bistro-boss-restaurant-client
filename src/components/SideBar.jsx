import React from 'react';
import { FaBook, FaCartArrowDown, FaEnvelope, FaList, FaUtensils } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const SideBar = () => {
    const [cart] = useCart();
    return (
        <div>
            <aside className="flex flex-col text-black font-cinzel bg-[#D1A054] w-64 h-full px-4 py-8 overflow-y-auto">
                <Link to="/dashboard" className='text-2xl uppercase font-extrabold '>BISTRO BOSS</Link>
                <p style={{ letterSpacing: "7px" }} className='uppercase text-base'>Restaurant</p>
                <div className='mt-14 space-y-3 border-b-2 pb-14'>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoHomeSharp />Admin Home</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaUtensils />add items</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaList />manage items</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaBook /> Manage bookings</NavLink>
                </div>
                <div className='mt-14 space-y-3 border-b-2 pb-14'>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoHomeSharp />Home</NavLink>
                    <NavLink to="/dashboard/cart"
                     className={({isActive})=>
                        isActive ? ' flex transition text-white hover:text-white items-center gap-2 text-lg uppercase font-medium': ' flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'
                    }>
                        <FaCartArrowDown />cart ({cart.length})</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><RxHamburgerMenu />Menu</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaEnvelope /> Contact</NavLink>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;