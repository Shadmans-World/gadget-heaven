import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { GadgetsContext } from '../../context/GadgetsContext'; // Import your context
import { SiTemporal } from "react-icons/si";
const Navbar = () => {
    const { cart, wishlist } = useContext(GadgetsContext); // Access cart and wishlist from context

    const links = (
        <>
            <li className='mr-3'><NavLink to={'/'}>Home</NavLink></li>
            <li className='mr-3'><NavLink to={'/statistics'}>Statistics</NavLink></li>
            <li className='mr-3'><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            <li className='mr-3'><NavLink to={'/support'}>Support</NavLink></li>
        </>
    );

    const location = useLocation(); // Get the current location

    const navbarClass = location.pathname === '/' ? 'bg-customPurple' : '';

    return (
        <div className={`navbar ${navbarClass} rounded-t-xl px-10`}>
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
               
                
                <a className="btn btn-ghost md:flex items-center text-xl hidden"><SiTemporal className='text-2xl'/>Gadget Heaven</a>
                
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-5 items-center'>
                    <Link to={'/cart'} className='relative bg-white rounded-full h-[40px] p-2 '>
                        <MdOutlineShoppingCart className='text-2xl' />
                        {cart.length > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-1">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                    <Link to={'/wishlist'} className='relative bg-white rounded-full h-[40px] p-2'>
                        <MdFavoriteBorder className='text-2xl' />
                        {wishlist.length > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-1">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
