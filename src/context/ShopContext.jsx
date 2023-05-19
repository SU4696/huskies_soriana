import React, { createContext } from 'react';
import { useState } from 'react'


export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 50; i++){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [ cartItems, setCartItems ] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] + 1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] - 1}));
  }

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>);

}

