

import React, { createContext, useEffect, useState } from 'react';

export const GadgetsContext = createContext();

export const GadgetsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  // Fetch data from a local JSON file once on component mount
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const [cart, setCart] = useState([]); // Cart state
  const [wishlist, setWishlist] = useState([]); // Wishlist state

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart by product ID
 // Remove one item from the cart by product ID (based on index of the clicked item)
const removeFromCart = (productId) => {
  setCart((prevCart) => {
    const productIndex = prevCart.findIndex(item => item.product_id === productId);
    if (productIndex !== -1) {
      // Remove only the product that matches the clicked ID
      return [
        ...prevCart.slice(0, productIndex),
        ...prevCart.slice(productIndex + 1),
      ];
    }
    return prevCart;
  });
};


  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // Remove item from wishlist by product ID
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.product_id !== productId));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <GadgetsContext.Provider value={{ items, cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist, clearCart }}>
      {children}
    </GadgetsContext.Provider>
  );
};
