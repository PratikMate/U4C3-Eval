import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import styles from './Navbar.module.css'


const Navbar = () => {
  const { cartCount} = useContext(CartContext)
  const { auth, logout } = useContext(AuthContext)
  
  return (
    <div data-cy="navbar" className={styles.nav}>
      <Link data-cy="navbar-home-link" to="">Logo</Link>
      <div>
        <span data-cy="navbar-cart-items-count">Cart : ({cartCount}) </span>
        <button data-cy="navbar-login-logout-button" onClick={logout}>{auth ? "Logout" : "Login"}</button>
     </div>
    </div>
  );
};

export default Navbar;
