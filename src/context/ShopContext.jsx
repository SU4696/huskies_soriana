import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cartLocalStorage = localStorage.getItem("cart");
  if(cartLocalStorage) return JSON.parse(cartLocalStorage);

  let cart = {};
  for (let i = 0; i < 60; i++){
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [ cartItems, setCartItems ] = useState(getDefaultCart);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId ) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] + 1}));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    //setTotalItems ((costo) => ({...costo, [itemId]: costo[itemId] + cost}));
    //localStorage.setItem("total", JSON.stringify(totalItems));
  }
  const addToCartQ = (itemId, num ) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] + num}));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    //setTotalItems ((costo) => ({...costo, [itemId]: costo[itemId] + cost}));
    //localStorage.setItem("total", JSON.stringify(totalItems));
  }

  const removeFromCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] - 1}));
    localStorage.removeItem("cart", JSON.stringify(cartItems));
  }
  
  const removeAllFromCart = () => {
    for (let i = 0; i < 60; i++){
      setCartItems ((prevs) => ({...prevs, [i]: prevs[i] =0}));
      localStorage.removeItem("cart", JSON.stringify(cartItems));
    }
  }

  const removeAllItemFromCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] =0}));
    localStorage.removeItem("cart", JSON.stringify(cartItems));
  }

  const carritoLleno = () => {
    for (let i = 0; i < 60; i++){
      if(cartItems[i] != 0) return 1;
      return 0;
    }
  }

  const contextValue = { cartItems, addToCart, removeFromCart, addToCartQ, removeAllFromCart, carritoLleno, removeAllItemFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};

