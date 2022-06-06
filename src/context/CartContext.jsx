import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([])
  const [cartCount, setCartCount] = useState(0);

  let fetchData = async () => {
    await axios.get("http://localhost:8080/cartItems")
      .then((r) => {
        setCartData(r.data)
        setCartCount(r.data.length)
      }) 
  }
  useEffect(() => {
    fetchData();
  }, [cartCount]);

  const addToCart = (prod) => {
    console.log('prod:', prod)
    let flag = false;
    for (let i = 0; i < cartData.length; i++){
      if (cartData[i].productId === prod.id) {
        flag = true;
      }
    }
    if (flag === false) {
      axios("http://localhost:8080/cartItems", {
        method: "post",
        data: {
          "productId": prod.id,
          "count": 1,
        }
      })
      setCartCount(cartCount + 1)
      //fetchData();
    }
  }

  const removeCart = (id) => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].productId === id) {
        axios.delete(`http://localhost:8080/cartItems/${cartData[i].id}`)
        setCartCount(cartCount - 1)
      }
    }
    
  }
  return <CartContext.Provider value={{ cartCount
    , addToCart, removeCart, cartData
}}>{children}</CartContext.Provider>;
};
