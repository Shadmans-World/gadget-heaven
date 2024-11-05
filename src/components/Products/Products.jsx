import React from "react";

const Products = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-5 h-[300px]  rounded-3xl">
        <img className="border-2 h-full w-[full]  rounded-3xl"
          src={product.product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p className="text-gray-500">Price: {product.price}k</p>
        <button className="w-[150px] p-3 border-2 rounded-3xl text-customPurple border-customPurple">
            View Details
          </button>
      </div>
    </div>
  );
};

export default Products;
