// SmartWatch.jsx

import React, { useContext } from 'react';
import { GadgetsContext } from '../../context/GadgetsContext';
import Products from '../Products/Products';

const SmartWatch = () => {
  const { items } = useContext(GadgetsContext);

  // Filtering items to display only smart watches
  const smartWatches = items.filter((item) => item.category === 'Smart Watch');

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {smartWatches.length > 0 ? (
          smartWatches.map((watch) => (
            <Products key={watch.product_id} product={watch} />
          ))
        ) : (
          <p className="text-center text-gray-500">No smart watches found</p>
        )}
      </div>
    </div>
  );
};

export default SmartWatch;
