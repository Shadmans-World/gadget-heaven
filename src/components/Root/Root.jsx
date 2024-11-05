import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='bg-slate-100'>
                <div className='max-w-[95%] mx-auto p-3'>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;
