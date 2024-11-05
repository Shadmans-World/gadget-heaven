import React, { useContext } from "react";
import { FaSlidersH } from "react-icons/fa";
import { GadgetsContext } from "../../context/GadgetsContext";
import { TiDelete } from "react-icons/ti";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(GadgetsContext); // Use cart from context

  // Check if cart is defined and calculate the total cost
  const totalCost = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    : "0.00";

  return (
    <div>
      <div className="flex justify-between px-5 mt-5">
        <div>
          <h5 className="text-2xl font-bold">Cart</h5>
        </div>
        <div className="flex gap-3 items-center">
          <h5 className="text-2xl font-bold">Total Cost: ${totalCost}</h5>
          <button className="px-3 py-3 w-[200px] border-2 border-customPurple text-customPurple rounded-3xl flex gap-3 justify-center items-center">
            Sort by Price: <FaSlidersH />
          </button>
          <button className="px-3 py-3 w-[200px] text-white bg-gradient-to-t from-pink-500 to-customPurple rounded-3xl flex gap-3 justify-center">
            Purchase
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 bg-white ">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="flex justify-between items-center border-2 p-5 rounded-xl">
              <div className="flex gap-3 ">
                <img className="h-[150px] w-[200px]" src={product.product_image} alt="" />
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold">
                    {product.product_title}
                  </h3>
                  <p className="text-gray-500">{product.description}</p>
                  <p>Price: {product.price}</p>
                </div>
              </div>
              <TiDelete className="text-3xl" onClick={()=>removeFromCart(product.product_id)} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
