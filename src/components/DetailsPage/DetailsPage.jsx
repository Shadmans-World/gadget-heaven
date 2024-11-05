import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GadgetsContext } from "../../context/GadgetsContext";
import ReactStars from "react-rating-stars-component";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
  const { productId } = useParams();
  const { items, addToCart, addToWishlist } = useContext(GadgetsContext);
  const [isWishlisted, setIsWishlisted] = useState(false); // Track wishlist state

  const product = items.find((item) => item.product_id === productId);

  if (!product) {
    return (
      <div className="text-center text-4xl font-bold text-gray-500 mt-10">
        Product Not Found
      </div>
    );
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item added to cart!"); // Show success toast
  };

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      addToWishlist(product);
      setIsWishlisted(true); // Disable further clicks
      toast.info("Item added to wishlist!");
    }
  };

  return (
    <div className="relative bg-customPurple h-[300px] rounded-b-xl mb-[35rem]">
      <div className="flex w-[70%] mx-auto flex-col gap-y-5 justify-center text-center text-white">
        <h3 className="text-[32px] font-bold">Product Details</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute w-[70%] h-max border p-3 top-[60%] left-1/2 -translate-x-1/2 rounded-xl bg-white">
        <div className="flex gap-5">
          <div className="w-[40%]">
            <figure className="h-full flex justify-center items-center">
              <img className="h-[70%] rounded-xl" src={product.product_image} alt="" />
            </figure>
          </div>
          <div className="w-[60%] flex flex-col gap-y-4 pt-10 pb-10">
            <h3 className="text-[28px] font-bold">{product.product_title}</h3>
            <p>Price: ${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
            {product.availability ? (
              <button className="p-3 rounded-3xl border-2 border-green-400 bg-green-300 bg-opacity-35 w-max">
                In Stock
              </button>
            ) : (
              <button className="btn">Normal</button>
            )}
            <div>
              <h4 className="text-[18px] font-bold">Specification:</h4>
              <ul>
                {product.specifications.map((spec, idx) => (
                  <li className="list-disc ml-10" key={idx}>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-bold">Rating</h4>
              <div className="flex items-center gap-4">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <p>{product.rating}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Link
                onClick={handleAddToCart}
                className="flex items-center gap-3 p-3 border-2 bg-customPurple rounded-xl text-white"
              >
                Add to cart <span><LuShoppingCart className="text-2xl" /></span>
              </Link>

              <button
                className="bg-white rounded-full h-[40px] p-2 border-2"
                onClick={handleAddToWishlist}
                disabled={isWishlisted}
              >
                <MdFavoriteBorder className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
