import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white  pt-14 pb-10 h-max border-2" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Gadget Heaven</h1>
          <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 w-[50%] mx-auto">
          <div>
            <h2 className="text-lg font-medium">Services</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium">Company</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium">Legal</h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
