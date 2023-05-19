import React, { createContext, useEffect, useState } from 'react';
import { Producto } from "@/types/Producto";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cartLocalStorage = localStorage.getItem("cart");

  if(cartLocalStorage) return JSON.parse(cartLocalStorage);

  let cart = {};
  for (let i = 1; i < 50; i++){
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [ cartItems, setCartItems ] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] + 1}));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const removeFromCart = (itemId) => {
    // update localstorage
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] - 1}));
  }

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};