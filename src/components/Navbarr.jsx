import { RiHome6Line,
    RiDashboardLine,
    RiMap2Line,
    RiAlertLine,
    RiArticleLine,
    RiMenuLine,
    RiCloseLine,
    RiSearchLine,
    RiChat3Line,
    RiNotification2Line,
    RiArrowDownSLine,
    RiCheckboxBlankCircleFill,
    RiThumbUpLine,
    RiHeartLine,
    RiVipDiamondLine,
    RiUser3Line,
    RiLogoutBoxLine,
    RiSettings4Line
 } from "react-icons/ri";
import { Menu, Transition } from '@headlessui/react'
import { logotipo_v2, persona1, p } from "../assets";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbarr = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    // Cerrar Sesion
    const handleOut = (e) => {
        localStorage.clear();
        window.location.href = '/login';
      };

  return (
    <div className=" bg-login">
    <div className='min-h-screen  bg-opacity '>
        {/* Sidebar */}
        <div className={`fixed top-0 w-3/4 lg:left-0 md:w-[285px] h-full bg-dash p-2 flex flex-col justify-between z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                
                <h1 className=' flex items-center gap-4 text-lg lg:text-2xl uppercase mb-4 text-white font-semibold'>
                    <img className="w-9 h-9 lg:w-10 lg:h-10" src={logotipo_v2} alt="" />
                    ContentLocator
                </h1>
                <hr className="pt-4 "/>
                <ul>
                    <li>
                        <Link to="/bienvenida" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiHome6Line/> Bienvenida
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dashboard" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500  transition-colors py-2 px-4 rounded-lg">
                            <RiDashboardLine/> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/mapa" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiMap2Line/>Mapa
                        </Link>
                    </li>
                    <li>
                        <Link to="/alertas" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiAlertLine/>Alertas
                        </Link>
                    </li>
                    <li>
                        <Link to="/reportes" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                            <RiArticleLine/>Reportes
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Creacion de img abajo  */}
            
            
            <div className="flex items-center gap-4">
                
                <img src={persona1} alt="example" 
                className="w-8 h-8 object-cover rounded-full ring-4 ring-blue-500 " />
                <div>
                    <h5 className=" text-white font-medium">Nombre de usuario</h5>
                    <p className="text-gray-300 text-sm">Administrador</p>
                </div>
            </div>
        </div>

        {/* Boton menu movil */}
        <button onClick={toggleMenu} className="lg:hidden fixed bottom-6 right-6 bg-gray-100 p-4 rounded-full ">
            {showMenu ? <RiCloseLine/> : <RiMenuLine/>}
        </button>

        {/* Header */}
        <header className="fixed bg-gray-100 shadow-md w-full lg:w-[calc(100%-285px)] lg:ml-[285px] flex flex-col md:flex-row items-center justify-between gap-4 p-2">
            <div className="order-1 md:order-none">
                <div className="relative">
                    <h1 className="text-3xl font-semibold">Bienvenida</h1>
                </div>
            </div>
            <nav className="flex items-center gap-2 text-lg">
                
                {/* Usuario Dropdown */}
                <Menu as="div">
                    <Menu.Button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-full transition-colors">
                    <img src={p} alt="example" 
                className="w-8 h-8 object-cover rounded-full " />
                <span>Nombre de usuario</span>
                <RiArrowDownSLine/>
                    </Menu.Button>
                    <Transition
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute top-6 right-0 bg-gray-100 w-72 rounded-lg shadow-lg p-4">
                            <div>
                            
                            <Menu.Item >
                                <div to="/" className="flex items-center gap-4 p-2 rounded-lg">
                                <img src={p} alt="example" className="w-8 h-8 object-cover rounded-full absolute" />
                                <div className="pl-12">
                                    <h5 className="text-sm ">Nombre de usuario</h5>
                                    <p className="text-gray-400 text-xs">Correo de usuario</p>
                                </div>
                                </div>
                            </Menu.Item>
                            <hr className="my-2" />
                            <Menu.Item >
                                <Link to="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-200 transition-colors text-sm ">
                                
                                <RiUser3Line /> Perfil
                                
                                </Link>
                            </Menu.Item>

                            <Menu.Item >
                                <Link to="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-200 transition-colors text-sm ">
                                <RiSettings4Line/>Ajustes
                                
                                </Link>
                            </Menu.Item>
                            <hr />
                            <Menu.Item >
                                <Link onClick={handleOut} className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-200 transition-colors text-sm ">
                                <RiLogoutBoxLine/>Cerrar Sesion
                            
                                </Link>
                            </Menu.Item>
                          
                            </div>
                        </Menu.Items>
                     </Transition>
                </Menu>
            </nav>
        </header>
        {/* Main */}

        <main className="lg:pl-[285px] pt-36 md:pt-24 lg:pt-28">
            <div className="bg-wt pl-2 pr-2">
            <h1 className="text-center text-3xl font-semibold">Bienvenido</h1>
            <p className="text-justify pt-4 pb-4 ">Esta será la aplicación donde usted podrá monitorear cada uno de los contenedores que tenga, 
                podra observar cada  uno de los cambios que se realicen en los patios del puerto.
            </p>
            <p className="font-bold pb-4">Version: 1.0</p>
            </div>

            <div className="bg-wt pl-2 pr-2 mt-8">
            <h1 className="text-center text-3xl font-semibold">Novedades</h1>
            <h3 className="pt-4 pb-4"><span className="font-bold">Ubicacion:</span> Se añadieron funcionalidades de ver en tiempo real los contenedores.</h3>
            <h3 className="pt-4 pb-4"><span className="font-bold">Alertas:</span> Se añadieron funcionalidades de ver en tiempo real los contenedores.</h3>
            <h3 className="pt-4 pb-4"><span className="font-bold">Reportes:</span> podrás crear reportes de cada uno de los sucesos que te resulten importantes.</h3>
            </div>

            
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Navbarr;