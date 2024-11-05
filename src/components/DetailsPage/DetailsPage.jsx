import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GadgetsContext } from "../../context/GadgetsContext";
import ReactStars from "react-rating-stars-component";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
const DetailsPage = () => {
  const { productId } = useParams();
  const { items } = useContext(GadgetsContext);

  // Find the product using the productId from the context items
  const product = items.find((item) => item.product_id === productId); // Make sure this matches your data structure

  // Handle case where product is not found
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

  return (
    <div className="relative bg-customPurple h-[300px] rounded-b-xl mb-[28rem]">
      <div className="flex w-[70%] mx-auto flex-col gap-y-5 justify-center text-center text-white">
        <h3 className="text-[32px] font-bold">Product Details</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="absolute w-[70%] h-max border p-3 top-[60%] left-1/2 -translate-x-1/2 rounded-xl bg-white">
        <div className="flex gap-5">
          {/* Image */}
          <div className="w-[40%]">
            <figure className="h-full  flex justify-center items-center">
              <img className="h-[70%] rounded-xl" src={product.product_image} alt="" />
            </figure>
          </div>
          {/* Details */}
          <div className="w-[60%] flex flex-col gap-y-4 pt-10 pb-10">
            <h3>{product.product_title}</h3>
            <p>Price: ${product.price}</p>
            {product.availability ? (
              <button className="p-3 rounded-3xl border-2  border-green-400 bg-green-300 bg-opacity-35  w-max">
                In Stock
              </button>
            ) : (
              <button className="btn">Normal</button>
            )}
            <div>
              <h4>Specification:</h4>
              <ul>
                {product.specifications.map((spec, idx) => (
                  <li className="list-disc ml-10" key={idx}>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Rating</h4>
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
                <Link className="flex items-center gap-3 p-3 border-2 bg-customPurple rounded-xl text-white">Add to cart <span><LuShoppingCart className="text-2xl" /></span></Link>

                <Link className="bg-white rounded-full h-[40px] p-2 border-2"><MdFavoriteBorder className="text-2xl" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
