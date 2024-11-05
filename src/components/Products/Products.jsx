import React from "react";
import { Link } from "react-router-dom";


const Products = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-5 h-[300px] rounded-3xl">
        <img className="border-2 h-full w-full  rounded-3xl"
          src={product.product_image}
          alt={product.product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
        <Link to={`/details/${product.product_id}`}><button className="w-[150px] p-3 border-2 rounded-3xl text-customPurple border-customPurple">
          View Details
        </button></Link>
        
      </div>
    </div>
  );
};

export default Products;
