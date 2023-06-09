import React from 'react'
import { user } from '../constants'

const CardPerfil = () => {
  return (
    <>
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

            <div className="lg:flex lg:flex-row flex flex-col ml-10 mr-10 gap-3 justify-center pt-10 pb-10">
            <div  className="mt-2 flex items-center justify-between lg:justify-center">
            <label className="p-2 relative">Nombres: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer 
             outline-none focus:ring-gray-400">{data.name} </label>
            </div>
            
            <div  className="mt-2 flex items-center justify-between lg:justify-center ">
            <label className="p-2 relative">Apellidos: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer ">{data.lastname} </label>
            </div>

            <div  className="mt-2 flex items-center justify-between  lg:justify-center">
            <label className="p-2 relative">Empresa: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer ">{data.empresa} </label>
            </div>
            
            </div>
            {/*  */}

            <div className="lg:flex lg:flex-row flex flex-col gap-3 mr-10 ml-10 justify-center pb-10">
            <div  className="mt-2 flex items-center justify-between  lg:justify-center">
            <label className="p-2 relative">N° de dispositivos: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-32  lg:w-52 relative rounded peer 
             outline-none focus:ring-gray-400">{data.dispositivos} </label>
            </div>
            
            <div  className="mt-2 flex items-center justify-between  lg:justify-center">
            <label className="p-2 relative">Puerto: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer ">{data.puerto} </label>
            </div>

            <div  className="mt-2 flex items-center justify-between  lg:justify-center">
            <label className="p-2 relative">Area: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer ">{data.area} </label>
            </div>

            <div  className="mt-2 flex items-center justify-between lg:hidden lg:justify-center">
            <label className="p-2 relative">Gmail: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer ">{data.gmail} </label>
            </div>
            
            </div>

            <div  className="mt-2 lg:flex items-center justify-between hidden  lg:justify-center">
            <label className="p-2 relative">Gmail: </label>
            <label type="text" className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer ">{data.gmail} </label>
            </div>
            

            <button className="bg-blue-500 shadow-lg text-sm text-white ring-1 ring-blue-500 hover:bg-blue-800 hover:ring-blue-800  rounded-full px-4 py-1 m-2">
                Editar correo
            </button>
            </div>

          </div>
            ))}
    </>
  )
}

export default CardPerfil