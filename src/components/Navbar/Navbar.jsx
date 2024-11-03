import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
const Navbar = () => {

    const links = <>
    <li className='mr-3'><NavLink>Home</NavLink></li>
    <li className='mr-3'><NavLink>Statistics</NavLink></li>
    <li className='mr-3'><NavLink>Dashboard</NavLink></li>
    <li className='mr-3'><NavLink>About</NavLink></li>
    
    </>

    return (
        <div className="navbar bg-customPurple rounded-t-xl ">
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
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className='flex gap-3 items-center'>
    <Link className='bg-white rounded-full h-[40px] p-2'><MdOutlineShoppingCart className='text-2xl'/></Link>
    <Link className='bg-white rounded-full h-[40px] p-2'><MdFavoriteBorder className='text-2xl'/></Link>
  
  

  </div>
  </div>
</div>
    );
};

export default Navbar;