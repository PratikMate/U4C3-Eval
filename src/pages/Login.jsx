import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from './Login.module.css'

const Login = () => {
  const { login} = useContext(AuthContext);
  
  // onChange = { handleChange }
  return (
    <div className={styles.box}>
      Login:
      <input data-cy="login-email" placeholder="Enter Email" type="email" name="email" value="eve.holt@reqres.in" />
      <input data-cy="login-password" placeholder="Enter Password" type="password" name="password" value="cityslicka" />
      <button data-cy="login-submit" onClick={login}>Login</button>
    </div>
  );
};

export default Login;
