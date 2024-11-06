import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-10 h-max border-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mb-8 gap-y-4">
        
          <h1 className="text-2xl font-semibold flex">Gadget Heaven</h1>
          <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 w-[50%] mx-auto">
          <div>
            <h2 className="text-lg font-medium">Services</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li className="cursor-pointer">Product Support</li>
              <li className="cursor-pointer">Order Tracking</li>
              <li className="cursor-pointer">Shipping & Delivery</li>
              <li className="cursor-pointer">Returns</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium">Company</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium">Legal</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li className="cursor-pointer">Terms of Service</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

