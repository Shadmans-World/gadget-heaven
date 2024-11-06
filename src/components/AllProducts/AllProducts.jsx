// AllProducts.jsx

import React, { useContext } from 'react';
import { GadgetsContext } from '../../context/GadgetsContext';
import Products from '../Products/Products';

const AllProducts = () => {
  const { items } = useContext(GadgetsContext); // Accessing all items

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.length > 0 ? (
          items.map((product) => (
            <Products key={product.product_id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
