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
import { logotipo_v2, persona1 } from "./assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { user } from "./constants";



const Perfil = () => {
  const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };
  return (
    <div className="">
    <div className='min-h-screen'>
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
            
            {user.map((data, index) =>(
                <div key={index} className="flex items-center gap-4">
                
                <img src={data.img} alt="example" 
                className="w-8 h-8 object-cover rounded-full ring-4 ring-blue-500 " />
                <div>
                    <h5 className=" text-white font-medium">{data.name}</h5>
                    <p className="text-gray-300 text-sm">{data.role}</p>
                </div>
            </div>
            ))}
        </div>

        {/* Boton menu movil */}
        <button onClick={toggleMenu} className="lg:hidden fixed bottom-6 right-6 bg-dash p-4 rounded-full z-50 ">
            {showMenu ? <RiCloseLine className="text-white"/> : <RiMenuLine className="text-white"/>}
        </button>

        {/* Header */}
        <header className="fixed z-40 bg-gray-100 shadow-md w-full lg:w-[calc(100%-285px)] lg:ml-[285px] flex flex-col md:flex-row items-center justify-between gap-4 p-2">
            <div className="order-1 md:order-none">
                <div className="relative">
                    <h1 className="text-3xl font-semibold">Perfil</h1>
                </div>
            </div>
            {user.map((data, index)=>(

            
            <nav key={index} className="flex items-center gap-2 text-lg">
                
                {/* Usuario Dropdown */}
                <Menu as="div">
                    <Menu.Button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-full transition-colors">
                    <img src={data.img} alt="example" 
                className="w-8 h-8 object-cover rounded-full " />
                <span>{data.name}</span>
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
                                <img src={persona1} alt="example" className="w-8 h-8 object-cover rounded-full absolute" />
                                <div className="pl-12">
                                    <h5 className="text-sm ">{data.name} {data.lastname}</h5>
                                    <p className="text-gray-400 text-xs">{data.gmail}</p>
                                </div>
                                </div>
                            </Menu.Item>
                            <hr className="my-2" />
                            <Menu.Item >
                                <Link to="/perfil" className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-200 transition-colors text-sm ">
                                
                                <RiUser3Line /> Perfil
                                
                                </Link>
                            </Menu.Item>

                            <hr />
                            <Menu.Item >
                                <Link to="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-200 transition-colors text-sm ">
                                <RiLogoutBoxLine/>Cerrar Sesion
                                
                                </Link>
                            </Menu.Item>
                          
                            </div>
                        </Menu.Items>
                     </Transition>
                </Menu>
            </nav>
            ))}
        </header>
        {/* Main */}

        <main className="lg:pl-[285px] pt-32 md:pt-24 lg:pt-20 bg-slate-100 z-0">
        {user.map((data,index)=>(
          <div key={index} className="text-center">
            {/* centramos la un div con una imagen */}
            <div className="bg-white m-2 pt-8 rounded-lg">

            
            <div className="flex justify-center items-center">
            <div>
                <button>
                    <img src={data.img} alt="" className="rounded-full w-32 h-32 lg:w-44 lg:h-44 ring-8 ring-gray-300 object-cover hover:translate-y-[-10px] transition-all duration-300 " />
                </button>
            </div>
            </div>

            <div className="lg:flex gap-3  justify-center pt-10 pb-10">
            <div  className="mt-2">
            <label className="p-2 relative">Nombres: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-9 relative rounded peer 
             outline-none focus:ring-gray-400">{data.name} </label>
            </div>
            
            <div  className="mt-2 ">
            <label className="p-2 relative">Apellidos: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-10 relative rounded peer ">{data.lastname} </label>
            </div>

            <div  className="mt-2 ">
            <label className="p-2 relative">Empresa: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-10 relative rounded peer ">{data.lastname} </label>
            </div>
            
            </div>

            <div className="lg:flex gap-3  justify-center pb-10">
            <div  className="mt-2">
            <label className="p-2 relative">N° de dispositivos </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-5 relative rounded peer 
             outline-none focus:ring-gray-400">{data.dispositivos} </label>
            </div>
            
            <div  className="mt-2 ">
            <label className="p-2 relative">Puerto: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-5 relative rounded peer ">{data.puerto} </label>
            </div>

            <div  className="mt-2 ">
            <label className="p-2 relative">Area: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 px-5 relative rounded peer ">{data.area} </label>
            </div>
            
            </div> 
            

            <button className="bg-blue-500 shadow-lg text-sm text-white ring-1 ring-blue-500 hover:bg-blue-800 hover:ring-blue-800  rounded-full px-4 py-1 m-2">
                Editar datos
            </button>
            </div>

          </div>
            ))}
          

         
            
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Perfil;