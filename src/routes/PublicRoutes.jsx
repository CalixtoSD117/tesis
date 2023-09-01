import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ component: component, children }) => {
  const token = localStorage.getItem("accessToken"); // Verifica si el token está presente en el almacenamiento local

  return token ? <Navigate to="/login"/> : children ;
};

export default PublicRoutes;
