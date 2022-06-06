import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from './Product.module.css'

const Product = ({ product }) => {
  const [count, setCount] = useState(1)
  const { cartData, addToCart, removeCart} = useContext(CartContext)
  let flag = false;
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].productId === product.id) {
      flag = true;
    }
  }
 
  return (
    <div data-cy={`product-${product.id}`} className={styles.box}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>

      {flag ? <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => setCount(count + 1)}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => setCount(count - 1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={() => removeCart(product.id)}>Remove to cart</button>
      </div> : <button data-cy="product-add-item-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        }
    </div>
  );
};

export default Product;
