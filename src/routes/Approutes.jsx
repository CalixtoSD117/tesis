import React from "react";
import { Routes, Route } from "react-router-dom";
import Bienvenida from "../Bienvenida";
import Dashboard from "../Dashboard";
import Mapa from "../Mapa";
import Alertas from "../Alertas";
import Reportes from "../Reportes";
import Perfil from "../Perfil";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
};

export default Approutes;
