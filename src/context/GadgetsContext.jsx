import React, { createContext, useEffect, useState } from 'react';

export const GadgetsContext = createContext();

export const GadgetsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <GadgetsContext.Provider value={{ items }}>
      {children}
    </GadgetsContext.Provider>
  );
};
