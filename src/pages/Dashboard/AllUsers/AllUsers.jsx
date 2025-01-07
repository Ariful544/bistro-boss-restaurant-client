import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DashboardHeading from '../../../components/DashboardHeading';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { IoIosPeople } from 'react-icons/io';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <DashboardHeading title={"How many??"} subtitle={"MANAGE ALL USERS"} />
            <div className='w-full bg-white mt-10 min-h-screen'>
                <div className='flex items-center justify-between font-cinzel p-10'>
                    <p className='text-3xl font-bold text-slate-950'>Total Users <span>{users.length}</span></p>
                </div>
                <div className="overflow-x-auto px-10">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center'>
                                            <IoIosPeople className='text-2xl text-white' />
                                        </button>
                                    </td>
                                    <td className='flex gap-4 items-center'>
                                        <button className='text-red-600 text-2xl'><FaTrash /></button>
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

export default AllUsers;