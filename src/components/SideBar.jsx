import React from 'react';
import { FaBook, FaCalendarAlt, FaCartArrowDown, FaEnvelope, FaList, FaShoppingBag, FaUtensils } from 'react-icons/fa';
import { IoHomeSharp, IoPeopleSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { GiWallet } from 'react-icons/gi';
import { MdRateReview } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';

const SideBar = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div>
            <aside className="flex flex-col text-black font-cinzel bg-[#D1A054] w-64 h-full px-4 py-8 overflow-y-auto">
                <Link to="/dashboard" className='text-2xl uppercase font-extrabold '>BISTRO BOSS</Link>
                <p style={{ letterSpacing: "7px" }} className='uppercase text-base'>Restaurant</p>
                <div className='mt-14 space-y-3 border-b-2 pb-14'>
                    {
                        isAdmin ? <>
                            <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoHomeSharp />Admin Home</NavLink>
                            <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaUtensils />add items</NavLink>
                            <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaList />manage items</NavLink>
                            <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaBook /> Manage bookings</NavLink>
                            <NavLink to="/dashboard/users" className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoPeopleSharp /> All users</NavLink>
                        </> :
                            <>
                                <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoHomeSharp />User Home</NavLink>
                                <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaCalendarAlt />Reservation</NavLink>
                                <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><GiWallet />Payment History</NavLink>
                                <NavLink to="/dashboard/cart"
                                    className={({ isActive }) =>
                                        isActive ? ' flex transition text-white hover:text-white items-center gap-2 text-lg uppercase font-medium' : ' flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'
                                    }>
                                    <FaCartArrowDown />cart ({cart.length})</NavLink>
                                <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><MdRateReview />Add Review</NavLink>
                                <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><TbBrandBooking />My Booking</NavLink>
                            </>
                    }
                </div>
                <div className='mt-14 space-y-3 border-b-2 pb-14'>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><IoHomeSharp />Home</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><RxHamburgerMenu />Menu</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaShoppingBag />shop</NavLink>
                    <NavLink className='flex transition hover:text-white items-center gap-2 text-lg uppercase font-medium'><FaEnvelope /> Contact</NavLink>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;