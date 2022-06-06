import React, { createContext, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("");
  
  let login = () => {
    axios("https://reqres.in/api/login", {
      method: "post",
      data: {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
    }).then((r) => setAuth(r.data.token))
    
  }
  let logout = () => {
    setAuth("");
  }
  return <AuthContext.Provider value={{ auth,login,logout}}>{children}</AuthContext.Provider>;
};
