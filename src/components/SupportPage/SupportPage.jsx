import React from "react";
import { Helmet } from "react-helmet";

const Support = () => {
  return (
    <div>
      <div className="bg-customPurple h-max rounded-xl pb-10 pt-5 text-white">
        <Helmet>
          <title>Support - Gadget Heaven</title>
          <link rel="shortcut icon" href="/support.png" type="image/x-icon" />
        </Helmet>
        <h3 className="text-[32px] font-bold text-center mb-8">Support Center</h3>
        <p className="text-center   mb-10">
          Welcome to Gadget Heaven Support! We're here to assist with product
          inquiries, <br /> order tracking, returns, and customer support.
        </p>
      </div>

      <div className="container mx-auto py-10 px-5 lg:px-20">
        {/* Accordion Sections */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200 p-5 rounded-lg shadow-md">
            <input type="radio" name="support-accordion" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How to Contact Customer Support?
            </div>
            <div className="collapse-content pt-3">
              <p className="text-gray-700">
                You can reach out to our customer support team via email at
                support@example.com or call us at +1-234-567-890. Our team is
                available 24/7 to assist you.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 p-5 rounded-lg shadow-md">
            <input type="radio" name="support-accordion" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              Can I Return or Exchange a Product?
            </div>
            <div className="collapse-content pt-3">
              <p className="text-gray-700">
                Yes, products can be returned or exchanged within 30 days of
                purchase. Please ensure the item is in its original packaging
                and has not been used. Contact support for more details.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 p-5 rounded-lg shadow-md">
            <input type="radio" name="support-accordion" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How Do I Track My Order?
            </div>
            <div className="collapse-content pt-3">
              <p className="text-gray-700">
                Once your order is shipped, we will provide a tracking number
                via email. Use this tracking number to monitor your delivery
                status on our tracking page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
