import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const Dashboard = () => {
    return (
        <div className='flex min-h-screen'>
            <SideBar />
            <div className='flex-1 py-10 bg-slate-100 px-32'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;