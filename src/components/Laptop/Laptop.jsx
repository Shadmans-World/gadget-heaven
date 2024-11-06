// Laptop.jsx

import React, { useContext } from 'react';
import { GadgetsContext } from '../../context/GadgetsContext';
import Products from '../Products/Products';

const Laptop = () => {
  const { items } = useContext(GadgetsContext);

  // Filtering items to display only laptops
  const laptops = items.filter((item) => item.category === 'Laptop');

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {laptops.length > 0 ? (
          laptops.map((laptop) => (
            <Products key={laptop.product_id} product={laptop} />
          ))
        ) : (
          <p className="text-center text-gray-500">No laptops found</p>
        )}
      </div>
    </div>
  );
};

export default Laptop;
