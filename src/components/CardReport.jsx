import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'

const CardReport = ({ Title, Date, Type, Report }) =>
{
    let [isOpen, setIsOpen] = useState(false);
    function closeModal()
    {
        setIsOpen(false)
        
    }

    function BorrarReporte()
    {
        setIsOpen(false)
        toast.success("Reporte a sido eliminado!",{autoClose: 1300});
    }

    function openModal()
    {
        setIsOpen(true)
    }
    return (
        <>
            <div className="mt-5">
                <aside className="bg-white rounded-lg p-2 shadow-md">

                    <div className="lg:flex items-center lg:justify-between hidden">
                        <div className="lg:flex lg:flex-row flex flex-col items-center lg:gap-4 w-full ">

                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1">
                                <h1 className="font-medium">Titulo:</h1>
                                <span>{Title}</span>
                            </div>

                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1 ">
                                <h1 className="font-medium">Fecha:</h1>
                                <span>{Date}</span>
                            </div>

                            <div className="flex items-center lg:justify-center justify-between lg:w-auto w-60 gap-1">
                                <h1 className="font-medium">Tipo:</h1>
                                <span>{Type}</span>
                            </div>

                        </div>


                        <button onClick={openModal} className="rounded-lg lg:block hidden text-white bg-gray-400 p-1 font-medium hover:bg-gray-500 hover:shadow-lg hover:animate-pulse hover:font-bold">
                            <RiDeleteBin6Line />
                        </button>

                    </div>
                    {/*  */}
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                ¿Esta seguro de eliminar este reporte?
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Una vez eliminado el reporte no podra recuperarlo
                                                </p>
                                            </div>

                                            <div className="mt-4 flex gap-8">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={BorrarReporte}
                                                >
                                                    Eliminar
                                                </button>


                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    {/*  */}


                    {/* version telefono */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start w-full gap-1 ">
                                <h1 className="font-medium text-lg">Titulo:</h1>
                                <span className="text-lg">{Title}</span>
                            </div>
                            <div className="m-0 p-0">
                                <button onClick={openModal} className="rounded-lg text-white bg-gray-400 p-1 font-medium hover:bg-gray-500 hover:shadow-lg hover:animate-pulse hover:font-bold">
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-start w-full gap-1 ">
                                <h1 className="font-medium text-lg">Fecha:</h1>
                                <span className="text-lg">{Date}</span>
                            </div>

                            <div className="flex items-center justify-start w-full gap-1 ">
                                <h1 className="font-medium text-lg">Tipo:</h1>
                                <span className="text-lg">{Type}</span>
                            </div>
                        </div>


                    </div>
                    <hr className="mt-2" />

                    <div className="mt-2">

                        <p className="ring-1 ring-gray-200 shadow-sm p-2 rounded-lg text-justify mt-2 text-sm">
                            {Report}
                        </p>
                    </div>
                </aside>
            </div>

        </>
    )
}

export default CardReport