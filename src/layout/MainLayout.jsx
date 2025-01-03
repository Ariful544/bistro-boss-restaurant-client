import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl '>
            <ScrollToTop/> {/*  use scroll to top to redirect router in top navigation */}
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main className=' min-h-screen mx-auto'>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;