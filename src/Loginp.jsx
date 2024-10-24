import { Link, useNavigate } from "react-router-dom";
import { logotipo_v2 } from "./assets";
import { RiMailLine, RiLock2Fill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const Loginp = () => {
  //Verificacion de logeo atte: William :)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  // https://servertesis-production.up.railway.app/login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://servertesis.onrender.com/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const {token, userId} = response.data;
        localStorage.setItem("accessToken", token)
        localStorage.setItem("userId", userId)
        
        console.log("Se consiguio el cometido")
        toast.success("Inicio de Sesion Correctamente", { autoClose: 1500 });
        setTimeout(() => {
          navigation("/bienvenida");
        }, 2000); // retraso de 2 segundos (2000 milisegundos)
      }
    } catch (error) {
      console.log("Error");
      toast.error("Correo o Contraseña Incorrectos", { autoClose: 4000 });
    }
  };

  return (
    <div className="min-h-screen bg-login flex items-center justify-center p-4">
      {/* Div principal que contiene todo el contenido de la página */}
      <div className="max-w-lg">
        {/* Div que limita el ancho de la página */}
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-white w-full rounded-lg p-8 mb-8"
        >
          {/* Div que contiene el formulario de inicio de sesión */}
          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex justify-center mb-8">
              {/* Div que contiene el logo */}
              <img
                className="imageUser"
                src={logotipo_v2}
                width="120"
                height="120"
              />
            </div>
            <h1 className="text-gray-900 uppercase font-semibold text-3xl">
              Bienvenido
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Formulario de inicio de sesión */}
            <div className="relative">
              {/* Input de correo electrónico */}
              <input
                className="w-full border py-2 px-10 rounded-md outline-none"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Ingresa tu correo"
                required
              />
              {/* Icono de correo electrónico */}
              <RiMailLine className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500" />
            </div>
            <div className="relative">
              {/* Input de contraseña */}
              <input
                className="w-full border py-2 px-10 rounded-md outline-none"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
              {/* Icono de contraseña */}
              <RiLock2Fill className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500" />
            </div>
            <div>
              {/* Botón de inicio de sesión */}

              {/* Botón realizado por Carlos! */}
              {/* <Link to="/bienvenida">
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Iniciar sesión
              </button>
              </Link> */}

              <button
                type="submit"
                className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <span className="text-black flex items-center justify-center gap-2 rounded-lg mt-5">
            <p>¿Olvidaste tu contraseña? </p>
            <a href="#" className="text-blue-500">
              Recuperar
            </a>
          </span>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Loginp;
