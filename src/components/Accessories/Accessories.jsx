// Accessories.jsx

import React, { useContext } from 'react';
import { GadgetsContext } from '../../context/GadgetsContext';
import Products from '../Products/Products';

const Accessories = () => {
  const { items } = useContext(GadgetsContext);

  // Filtering items to display only accessories
  const accessories = items.filter((item) => item.category === 'Accessories');

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {accessories.length > 0 ? (
          accessories.map((accessory) => (
            <Products key={accessory.product_id} product={accessory} />
          ))
        ) : (
          <p className="text-center text-gray-500">No accessories found</p>
        )}
      </div>
    </div>
  );
};

export default Accessories;
