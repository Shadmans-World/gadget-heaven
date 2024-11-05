import React, { createContext, useEffect, useState } from 'react';

export const GadgetsContext = createContext();

export const GadgetsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const [cart, setCart] = useState([]); // Initialize cart as an empty array
  const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Adds the selected product to the cart
    };

    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter(item => item.product_id !== productId));
    };

    const removeFromWishlist=(productId)=>{
      setWishlist((prevWishlist) => prevWishlist.filter(item => item.product_id !== productId));
    }
    const addToWishlist = (product) => {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    const clearCart = () => {
      setCart([]); // Sets cart to an empty array
    };

  return (
    <GadgetsContext.Provider value={{ items, cart, wishlist, addToCart , removeFromCart, addToWishlist,removeFromWishlist, clearCart}}>
      {children}
    </GadgetsContext.Provider>
  );
};
