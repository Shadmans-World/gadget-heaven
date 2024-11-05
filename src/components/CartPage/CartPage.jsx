import React, { useContext, useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { GadgetsContext } from "../../context/GadgetsContext";
import { TiDelete } from "react-icons/ti";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(GadgetsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  // Calculate the total cost
  const totalCost = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    : "0.00";

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearCart(); // Clear cart after closing modal
  };

  // Sort cart items in descending order when the button is clicked
  const sortedCart = isSorted ? [...cart].sort((a, b) => b.price - a.price) : cart;

  const handleSortDescending = () => {
    setIsSorted(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 mt-5">
        <div>
          <h5 className="text-2xl font-bold">Cart</h5>
        </div>
        <div className="flex gap-3 items-center">
          <h5 className="text-2xl font-bold">Total Cost: ${totalCost}</h5>
          <button
            onClick={handleSortDescending}
            className="px-3 py-3 w-[200px] border-2 border-customPurple text-customPurple rounded-3xl flex gap-3 justify-center items-center"
          >
            Sort by Price: <FaSlidersH />
          </button>
          <button
            onClick={handlePurchase}
            disabled={cart.length === 0} // Disable button if cart is empty
            className={`px-3 py-3 w-[200px] rounded-3xl flex gap-3 justify-center ${
              cart.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "text-white bg-gradient-to-t from-pink-500 to-customPurple"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 bg-white rounded-xl mt-5 mb-5">
        {sortedCart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          sortedCart.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-2 p-5 rounded-xl"
            >
              <div className="flex gap-3 ">
                <img
                  className="h-[150px] w-[200px]"
                  src={product.product_image}
                  alt=""
                />
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold">{product.product_title}</h3>
                  <p className="text-gray-500">{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
              <TiDelete
                className="text-3xl cursor-pointer"
                onClick={() => removeFromCart(product.product_id)}
              />
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-xl shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Payment Successful</h3>
            <p className="mb-6 text-gray-500">Thanks for Purchasing</p>
            <p className="mb-6">Total Cost: ${totalCost}</p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-customPurple text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
