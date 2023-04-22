import React from 'react'
import { RiCloseCircleLine, RiDeleteBin6Line, RiDraftLine } from 'react-icons/ri'
import CardReport from './CardReport'
import { reportes } from '../constants'

const FormReport = () => {
  return (
    <>
    <div className="mr-8 ml-8">
                        <form className=" p-2 pt-5 rounded-lg bg-white lg:h-auto lg:flex lg:flex-col justify-center">
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

                            <aside className="mt-2 mb-2 flex justify-end gap-2">
                                <button className="bg-[#EAEAEA] p-2 rounded-xl hover:animate-pulse hover:bg-[#CFCFCF] ">
                                    <span className="text-black flex items-center gap-2 justify-center"><RiCloseCircleLine/>Eliminar</span>
                                </button>

                                <button className="bg-blue-600 p-2 rounded-xl hover:animate-pulse hover:bg-blue-700">
                                    <span className="text-white flex items-center gap-2 justify-center"><RiDraftLine/>Generar</span>
                                </button>

                            </aside>
                        </form>

                        <div className="mt-5">
                            <h1 className="text-lg font-medium">
                                Reportes Generados
                            </h1>
                            {reportes.map(({id,title,date,type,report})=>(
                                <CardReport
                                key={id}
                                Title={title}
                                Date={date}
                                Type={type}
                                Report={report}
                                />
                            ))}
                            

                        </div>

                    </div>

    </>
  )
}

export default FormReport