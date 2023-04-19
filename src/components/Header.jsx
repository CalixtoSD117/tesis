import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { RiArrowDownSLine, RiLogoutBoxLine, RiUser3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { user } from '.././constants'

const Header = () => {
  return (
    <div>
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
                                <img src={data.img} alt="example" className="w-8 h-8 object-cover rounded-full absolute" />
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
    </div>
  )
}

export default Header