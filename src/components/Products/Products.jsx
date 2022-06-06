import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product"
import styles from './Products.module.css'

const Products = () => {
  const [products, setProducts] = useState([])
  console.log('products:', products)
  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then((r) => setProducts(r.data))
  }, []);
  return <div>
    <h2>Products :</h2>
    <div className={styles.boxgrid}>
    {products.map((e) => (
      <Product product={e}/>
    ))}
    </div>
  </div>;
};

export default Products;
