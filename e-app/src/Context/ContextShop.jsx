import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../Product';

export const ContextShop = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ContextShopProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount };

  return (
    <ContextShop.Provider value={contextValue}>
      {props.children}
    </ContextShop.Provider>
  );
};

export default ContextShopProvider;
