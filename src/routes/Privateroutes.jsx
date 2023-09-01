import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({component: component, children}) => {
    const token = localStorage.getItem("accessToken")// Verifica si el token está presente en el almacenamiento local
  
    return token ? children : <Navigate to= "/login" />;
  };

export default PrivateRoute;