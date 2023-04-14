import { Link } from "react-router-dom"
import { logotipo_v2 } from "./assets"
import { RiMailLine, RiLock2Fill } from 'react-icons/ri'

const Loginp = () =>
{
  return (
    <div className="min-h-screen bg-login flex items-center justify-center p-4">
      {/* Div principal que contiene todo el contenido de la página */}
      <div className="max-w-lg">
        {/* Div que limita el ancho de la página */}
        <div className="bg-white w-full rounded-lg p-8 mb-8">
          {/* Div que contiene el formulario de inicio de sesión */}
          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex justify-center mb-8">
              {/* Div que contiene el logo */}
              <img className="imageUser" src={logotipo_v2} width="120" height="120" />
            </div>
            <h1 className="text-gray-900 uppercase font-semibold text-3xl">Bienvenido</h1>

          </div>
          <form className="flex flex-col gap-4">
            {/* Formulario de inicio de sesión */}
            <div className="relative">
              {/* Input de correo electrónico */}
              <input
                type="email"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu correo"
                required
              />
              {/* Icono de correo electrónico */}
              <RiMailLine className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500" />
            </div>
            <div className="relative">
              {/* Input de contraseña */}
              <input
                type="password"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu contraseña"
                required
              />
              {/* Icono de contraseña */}
              <RiLock2Fill className='w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500' />
            </div>
            <div>
              {/* Botón de inicio de sesión */}
              <Link to="/bienvenida">
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Iniciar sesión
              </button>
              </Link>
            </div>
          </form>
          <span className="text-black flex items-center justify-center gap-2 rounded-lg mt-5" >
            <p>¿Olvidaste tu contraseña?{" "}</p>
            <a href="#" className="text-blue-500">
              Recuperar
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loginp