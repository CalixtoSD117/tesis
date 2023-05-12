import React from 'react'
import { RiCloseCircleLine, RiDeleteBin6Line, RiDraftLine } from 'react-icons/ri'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Dateinput from './Dateinput';
import CardReport from './CardReport';

const FormReport = () =>
{
    const [titulo, setTitle] = useState('');
    const [tipo, setType] = useState('');
    const [reporte, setMessage] = useState('');
    const [reportesGenerados, setReportesGenerados] = useState([]);

    const eliminate = () =>{
        setTitle('')
        setMessage('')
        setType('')
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try {
            // Envía los datos del reporte a la API
            const response = await axios.post('https://servertesis-production.up.railway.app/reportes', {
                titulo,
                tipo,
                reporte
            });
            if (response.status == 200) {
                console.log("Se consiguio el cometido");
                toast.success('reporte creado correctamente',{autoClose: 1000});

                setTitle('');
                setMessage('');
                setType('');

            }
            console.log(response.data); // Imprime la respuesta de la API
            // Realiza cualquier otra acción después de enviar el reporte, como redirigir o mostrar una notificación de éxito.
        } catch (error) {
            console.error(error);
            // Maneja cualquier error que ocurra durante el envío del reporte.
        }
    };

    {/* reportes */}

    useEffect(() => {
        // Hacer la solicitud a la API para obtener los reportes generados
        const fetchReportesGenerados = async () => {
          try {
            const response = await axios.get('https://servertesis-production.up.railway.app/reportes');
            if (response.status === 200) {
              setReportesGenerados(response.data);
            }
          } catch (error) {
            console.error(error);
            // Manejar el error al obtener los reportes generados
          }
        };
    
        fetchReportesGenerados();
      }, []);



    return (
        <>
            <div className="mr-8 ml-8">
                <form className="p-2 pt-5 rounded-lg bg-white lg:h-auto lg:flex lg:flex-col justify-center" onSubmit={handleSubmit}>
                    <div className="lg:flex lg:flex-row flex flex-col items-center gap-4">

                        <div className="flex justify-between lg:justify-start items-center gap-2 ">
                            <label htmlFor="" className="font-medium">Titulo</label>
                            <input
                                type="text"
                                className="h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52"
                                value={titulo}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex justify-between lg:justify-start items-center gap-2">
                            <label htmlFor="" className="font-medium">Tipo</label>
                            <input
                                type="text"
                                className="h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52"
                                value={tipo}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between lg:justify-start items-center gap-2">
                            <label htmlFor="" className="font-medium">Fecha</label>
                            <Dateinput/>
                        </div>

                    </div>
                    <aside className="flex flex-col justify-center gap-2 mt-10">
                        <label htmlFor="message" className="block font-medium">Reporte</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            className="h-32 mt-2 block ring-1 ring-gray-400 text-sm w-full rounded-md pl-3 shadow-sm outline-none focus:border-gray-400 focus:ring-[0.5px]"
                            value={reporte}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </aside>

                    <aside className="mt-2 mb-2 flex justify-end gap-2">
                        <button className="bg-[#EAEAEA] p-2 rounded-xl hover:animate-pulse hover:bg-[#CFCFCF]" type='reset' onClick={eliminate}>
                            <span className="text-black flex items-center gap-2 justify-center"><RiCloseCircleLine />Eliminar</span>
                        </button>

                        <button type="submit" className="bg-blue-600 p-2 rounded-xl hover:animate-pulse hover:bg-blue-700">
                            <span className="text-white flex items-center gap-2 justify-center"><RiDraftLine />Generar</span>
                        </button>
                    </aside>
                </form>

                <div className="mt-5">
                    <h1 className="text-lg font-medium">Reportes Generados</h1>
                    {reportesGenerados.map((reporte) => (
              <CardReport key={reporte.id} titulo={reporte.titulo} tipo={reporte.tipo} reporte={reporte.reporte} />
            ))}
                    
                </div>
                
            </div>
            <ToastContainer />
        </>
    )
}

export default FormReport