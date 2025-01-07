import React from 'react';
import DashboardHeading from '../../../components/DashboardHeading';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const handleCartDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div>
            <DashboardHeading title={"My Cart"} subtitle={"WANNA ADD MORE?"} />
            <div className='w-full bg-white mt-10 min-h-screen'>
                <div className='flex items-center justify-between font-cinzel p-10'>
                    <p className='text-3xl font-bold text-slate-950'>Total order <span>{cart.length}</span></p>
                    <p className='text-3xl font-bold text-slate-950'>total price: <span>${totalPrice}</span></p>
                    <button className='btn bg-[#D1A054] hover:bg-[#e3a850] text-white'>Pay</button>
                </div>
                <div className="overflow-x-auto px-10">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td className='flex gap-4 items-center'>
                                        <button onClick={() => handleCartDelete(item._id)} className='text-red-600 text-2xl'><FaTrash /></button>
                                        <button className='text-blue-600 text-3xl'><FaEdit /></button>
                                    </td>
                                </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;