import React from 'react'
import { logotipo_v2 } from '../assets'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiAlertLine, RiArticleLine, RiCloseLine, RiDashboardLine, RiHome6Line, RiMap2Line, RiMenuLine } from 'react-icons/ri';
import CardUserDown from './CardUserDown';

const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };
  return (
    <>
    <div className={`fixed top-0 w-3/4 lg:left-0 md:w-[248px] h-full bg-dash p-2 flex flex-col justify-between z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                
                <Link to="/bienvenida" className=' flex items-center gap-2 text-lg lg:text-xl uppercase mb-4 text-white font-semibold'>
                    <img className="w-9 h-9 lg:w-8 lg:h-8" src={logotipo_v2} alt="" />
                    ContentLocator
                </Link>
                <hr className="pt-4 "/>
                <ul>
                    <li>
                        <Link to="/bienvenida" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiHome6Line/> Bienvenida
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dashboard"  className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500  transition-colors py-2 px-4 rounded-lg">
                            <RiDashboardLine/> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/mapa"  className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiMap2Line/>Cobertura
                        </Link>
                    </li>
                    <li>
                        <Link to="/alertas" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiAlertLine/>Alertas y Mas
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/reportes" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiArticleLine/>Reportes
                        </Link>
                    </li> */}
                </ul>
            </div>
            {/* Creacion de img abajo  */}
            <CardUserDown/>
            
        </div>

        {/* Boton menu movil */}
        <button onClick={toggleMenu} className="lg:hidden fixed bottom-6 right-6 bg-dash p-4 rounded-full z-50 ">
            {showMenu ? <RiCloseLine className="text-white"/> : <RiMenuLine className="text-white"/>}
        </button>
        
    </>
  )
}

export default Sidebar