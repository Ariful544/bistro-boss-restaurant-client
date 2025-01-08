import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DashboardHeading from '../../../components/DashboardHeading';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { IoIosPeople } from 'react-icons/io';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })
    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    const handleUserToAdmin = async(id) => {
        try{
            const result = await axiosSecure.patch(`/users/admin/${id}`)
            if(result.data.modifiedCount > 0){
                refetch();
                toast.success("This user is an Admin now")
            }
        }
        catch(err){
            toast.error(err);
        }
    }
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
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? "Admin" : <button onClick={()=>handleUserToAdmin(user._id)} className='w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center'>
                                                <IoIosPeople className='text-2xl text-white' />
                                            </button>
                                        }
                                    </td>
                                    <td className='flex gap-4 items-center'>
                                        <button onClick={() => handleDeleteUser(user._id)} className='text-red-600 text-2xl'><FaTrash /></button>
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