import React, { useContext } from "react";
import { GadgetsContext } from "../../context/GadgetsContext";
import { LuShoppingCart } from "react-icons/lu";
import { TiDelete } from "react-icons/ti"; // Import TiDelete icon
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

const WishlistPage = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(GadgetsContext);
  const handleAddToCart = (product) => {
    addToCart(product); // Add to cart
    toast.success('Product has been added to the cart')
    removeFromWishlist(product.product_id); // Remove from wishlist
    
  };

  return (
    <div className="mt-5">
      <Helmet><link rel="shortcut icon" href="/dashboard.png" type="image/x-icon" /></Helmet>
      <div className="px-5 mt-5 ">
        <h2 className="text-2xl font-bold">Wishlist</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 p-5 bg-white mb-5 rounded-xl mt-5">
        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty.</p>
        ) : (
          wishlist.map((product, index) => (
            <div key={index} className="flex justify-between items-center border-2 p-5 rounded-xl">
              <div className="flex gap-3">
                <img className="h-[150px] w-[200px]" src={product.product_image} alt="" />
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold">{product.product_title}</h3>
                  <p className="text-gray-500">{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-3 py-3 w-[200px] text-white bg-gradient-to-t from-pink-500 to-customPurple rounded-3xl flex gap-3 justify-center"
                  >
                    Add to cart <LuShoppingCart />
                  </button>
                </div>
              </div>
              <TiDelete className="text-3xl cursor-pointer" onClick={() => removeFromWishlist(product.product_id)} />
            </div>
          ))
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default WishlistPage;
