import React, { useContext, useState } from "react";

import CartPage from "../CartPage/CartPage";
import WishlistPage from "../WishlistPage/WishlistPage";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  

  // State to track the currently displayed page
  const [currentPage, setCurrentPage] = useState('Cart'); // Default to CartPage

  // Function to handle page switching
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
      </Helmet>
      {/* Banner */}
      <div className="bg-customPurple h-max rounded-xl pb-10 pt-5">
        <div className="flex w-[70%] mx-auto flex-col gap-y-5 justify-center text-center text-white">
          <h3 className="text-[32px] font-bold">Dashboard</h3>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>

          <div className="flex gap-3 items-center justify-center">
            <button 
              onClick={() => handlePageChange('Cart')} 
              className={`px-6 py-3 w-[150px] border-2 rounded-xl ${currentPage === 'Cart' ? 'bg-white text-black' : 'text-white'}`}
            >
              Cart
            </button>
            <button 
              onClick={() => handlePageChange('Wishlist')} 
              className={`px-6 py-3 w-[150px] border-2 rounded-xl ${currentPage === 'Wishlist' ? 'bg-white text-black' : 'text-white'}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Conditional rendering of pages */}
      {currentPage === 'Cart' && <CartPage />}
      {currentPage === 'Wishlist' && <WishlistPage />}
    </div>
  );
};

export default Dashboard;
