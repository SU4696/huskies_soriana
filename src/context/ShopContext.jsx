import React, { createContext, useEffect, useState } from 'react';
import { Producto } from '@/types/Producto';
import { getProductos } from '@/service/ServicioProductos';

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
  //const [ products, setProducts ] = useState<Producto[]>([]); // Agregar estado para los productos

  useEffect(() => {
    let totalPrice = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      const product = products.find((prod) => prod.idProductos === itemId);
      if (product) {
        totalPrice += product.precio * quantity;
      }
    }
    setTotalItems(totalPrice.toFixed(2));
  }, [cartItems, products]);

  const addToCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] + 1}));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    //setTotalItems ((costo) => ({...costo, [itemId]: costo[itemId] + cost}));
    //localStorage.setItem("total", JSON.stringify(totalItems));
  }

  const removeFromCart = (itemId) => {
    setCartItems ((prevs) => ({...prevs, [itemId]: prevs[itemId] - 1}));
    localStorage.removeItem("cart", JSON.stringify(cartItems));
  }

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};