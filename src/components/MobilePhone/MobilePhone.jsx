// MobilePhone.jsx

import React, { useContext } from 'react';
import { GadgetsContext } from '../../context/GadgetsContext';
import Products from '../Products/Products';

const MobilePhone = () => {
  const { items } = useContext(GadgetsContext);

  // Filtering items to display only mobile phones
  const mobilePhones = items.filter((item) => item.category === 'Mobile Phone');

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {mobilePhones.length > 0 ? (
          mobilePhones.map((phone) => (
            <Products key={phone.product_id} product={phone} />
          ))
        ) : (
          <p className="text-center text-gray-500">No mobile phones found</p>
        )}
      </div>
    </div>
  );
};

export default MobilePhone;
