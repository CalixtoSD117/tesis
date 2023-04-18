import
{
    RiHome6Line,
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
    RiSettings4Line,
    RiDeleteBin6Line,
} from "react-icons/ri";
import { Menu, Transition } from '@headlessui/react'
import { logotipo_v2, persona1 } from "./assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



const Reportes = () =>
{
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () =>
    {
        setShowMenu(!showMenu)
    };
    return (
        <div className="bg-slate-100">
            <div className='min-h-screen  '>
                {/* Sidebar */}
                <div className={`fixed top-0 w-3/4 lg:left-0 md:w-[285px] h-full bg-dash p-2 flex flex-col justify-between z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"}`}>
                    <div>

                        <h1 className=' flex items-center gap-4 text-lg lg:text-xl uppercase mb-4 text-white font-semibold'>
                            <img className="w-9 h-9 lg:w-10 lg:h-10" src={logotipo_v2} alt="" />
                            ContentLocator
                        </h1>
                        <hr className="pt-4 " />
                        <ul>
                            <li>
                                <Link to="/bienvenida" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                                    <RiHome6Line /> Bienvenida
                                </Link>
                            </li>

                            <li>
                                <Link to="/dashboard" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500  transition-colors py-2 px-4 rounded-lg">
                                    <RiDashboardLine /> Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/mapa" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                                    <RiMap2Line />Mapa
                                </Link>
                            </li>
                            <li>
                                <Link to="/alertas" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                                    <RiAlertLine />Alertas y Mas
                                </Link>
                            </li>
                            <li>
                                <Link to="/reportes" className="text-white font-semibold flex items-center gap-4 hover:bg-gray-500 transition-colors py-2 px-4 rounded-lg">
                                    <RiArticleLine />Reportes
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Creacion de img abajo  */}


                    <div className="flex ml-4 items-center gap-4">

                        <img src={persona1} alt="example"
                            className="w-8 h-8 object-cover rounded-full ring-4 ring-blue-500 " />
                        <div>
                            <h5 className=" text-white font-medium">Nombre de usuario</h5>
                            <p className="text-gray-300 text-sm">Administrador</p>
                        </div>
                    </div>
                </div>

                {/* Boton menu movil */}
                <button onClick={toggleMenu} className="lg:hidden fixed bottom-6 right-6 bg-dash p-4 rounded-full ">
                    {showMenu ? <RiCloseLine className="text-white" /> : <RiMenuLine className="text-white" />}
                </button>

                {/* Header */}
                <header className="fixed bg-gray-100 shadow-md w-full lg:w-[calc(100%-285px)] lg:ml-[285px] flex flex-col md:flex-row items-center justify-between gap-4 p-2">
                    <div className="order-1 md:order-none">
                        <div className="relative">
                            <h1 className="text-3xl font-semibold">Reportes</h1>
                        </div>
                    </div>
                    <nav className="flex items-center gap-2 text-lg">

                        {/* Usuario Dropdown */}
                        <Menu as="div">
                            <Menu.Button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-full transition-colors">
                                <img src={persona1} alt="example"
                                    className="w-8 h-8 object-cover rounded-full " />
                                <span>Nombre de usuario</span>
                                <RiArrowDownSLine />
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
                                                    <h5 className="text-sm ">Nombre de usuario</h5>
                                                    <p className="text-gray-400 text-xs">Correo de usuario</p>
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
                                                <RiLogoutBoxLine />Cerrar Sesion

                                            </Link>
                                        </Menu.Item>

                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </nav>
                </header>
                {/* Main */}

                <main className="lg:pl-[285px] pt-36 md:pt-24 lg:pt-28 pb-10">

                    <div className="mr-8 ml-8">
                        <form className=" p-2 rounded-lg bg-white lg:h-72 lg:flex lg:flex-col justify-center">
                            <div className="lg:flex lg:flex-row flex flex-col items-center gap-4">
                                <div className="flex justify-between lg:justify-center items-center gap-2 w-full">
                                    <label htmlFor="" className="font-medium">Titulo</label>
                                    <input type="text" className=" h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52" />
                                </div>
                                <div className="flex justify-between lg:justify-center items-center gap-2 w-full">
                                    <label htmlFor="" className="font-medium">Fecha</label>
                                    <input type="date" className=" h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52" />
                                </div>
                                <div className="flex justify-between lg:justify-center items-center gap-2 w-full">
                                    <label htmlFor="" className="font-medium">Tipo</label>
                                    <input type="text" className=" h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52" />
                                </div>
                            </div>
                            <aside className="flex flex-col justify-center gap-2 mt-10">
                                <label htmlFor="message" className="block font-medium">Reporte</label>
                                <textarea id="message" name="message" rows="3" className="h-32 mt-2 block ring-1 ring-gray-400 text-sm w-full rounded-md pl-3 shadow-sm outline-none focus:border-gray-400 focus:ring-[0.5px]"></textarea>
                            </aside>
                        </form>

                        <div className="mt-5">
                            <h1 className="text-lg font-medium">
                                Reportes Generados
                            </h1>

                            <div className="mt-5">
                                <aside className="bg-white rounded-lg p-2">
                                    <div className="lg:flex items-center lg:justify-between hidden">
                                        <div className="lg:flex lg:flex-row flex flex-col items-center lg:gap-4 w-full ">

                                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1">
                                                <h1 className="font-medium">Titulo:</h1>
                                                <span>Contenedor H1 movido</span>
                                            </div>

                                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1 ">
                                                <h1 className="font-medium">Fecha:</h1>
                                                <span>12/21/2021</span>
                                            </div>

                                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1">
                                                <h1 className="font-medium">Tipo:</h1>
                                                <span>Revision</span>
                                            </div>

                                        </div>


                                        <button className="rounded-lg lg:block hidden text-white bg-red-500 p-1 font-medium hover:bg-red-600 hover:shadow-lg hover:animate-pulse hover:font-bold">
                                            <RiDeleteBin6Line />
                                        </button>

                                    </div>
                                    {/* version telefono */}
                                    <div className="lg:hidden">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center justify-start w-full gap-1 ">
                                                <h1 className="font-medium text-lg">Titulo:</h1>
                                                <span className="text-lg">Contenedor H1 movido</span>
                                            </div>
                                            <div className="m-0 p-0">
                                                <button className="rounded-lg text-white bg-red-500 p-1 font-medium hover:bg-red-600 hover:shadow-lg hover:animate-pulse hover:font-bold">
                                                    <RiDeleteBin6Line />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex">
                                        <div className="flex items-center justify-start w-full gap-1 ">
                                                <h1 className="font-medium text-lg">Fecha:</h1>
                                                <span className="text-lg">21/02/21</span>
                                            </div>

                                            <div className="flex items-center justify-start w-full gap-1 ">
                                                <h1 className="font-medium text-lg">Tipo:</h1>
                                                <span className="text-lg">Revision</span>
                                            </div>
                                        </div>


                                    </div>
                                    <hr className="mt-2" />

                                    <div className="mt-2">

                                        <p className="ring-1 ring-gray-200 shadow-sm p-2 rounded-lg text-justify mt-2 text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque veniam, illo maiores aut quisquam aspernatur ducimus modi eum provident.
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </div>

                    </div>




                </main>
                <Outlet />
            </div>
        </div>
    )
}

export default Reportes;