import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CardReport = () =>
{
    return (
        <>
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


                        <button className="rounded-lg lg:block hidden text-white bg-gray-400 p-1 font-medium hover:bg-gray-500 hover:shadow-lg hover:animate-pulse hover:font-bold">
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
                                <button className="rounded-lg text-white bg-gray-400 p-1 font-medium hover:bg-gray-500 hover:shadow-lg hover:animate-pulse hover:font-bold">
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

        </>
    )
}

export default CardReport