import React from 'react';
import { RiCloseCircleLine, RiDeleteBin6Line, RiDraftLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Dateinput from './Dateinput';
import CardReport from './CardReport';

const FormReport = () => {
  const [titulo, setTitle] = useState('');
  const [tipo, setType] = useState('');
  const [reporte, setMessage] = useState('');
  const [reportesGenerados, setReportesGenerados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReportesGenerados = async () => {
    try {
      const response = await axios.get('https://contenlocator.com/api/reportApi.php')
      const data = response.data;
      setReportesGenerados(data);
      console.log(data);
    } catch (error) {
      
    }
  };
  

  const eliminate = () => {
    setTitle('');
    setMessage('');
    setType('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Inicia la carga

      // Envía los datos del reporte a la API
      const response = await axios.post(
        'https://servertesis-production.up.railway.app/reportes',
        {
          titulo,
          tipo,
          reporte
        }
      );

      if (titulo === '' || tipo === '' || reporte === '') {
        toast.error('Favor de completar los campos', { autoClose: 1000 });
      } else {
        console.log('Se consiguió el cometido');
        toast.success('Reporte creado correctamente', { autoClose: 1000 });

        setTitle('');
        setMessage('');
        setType('');

        fetchReportesGenerados();
      }

      console.log(response.data); // Imprime la respuesta de la API
      // Realiza cualquier otra acción después de enviar el reporte, como redirigir o mostrar una notificación de éxito.

      setIsLoading(false); // Finaliza la carga
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Finaliza la carga
      // Maneja cualquier error que ocurra durante el envío del reporte.
    }
  };

  useEffect(() => {
    fetchReportesGenerados();
  }, []);

  return (
    <>
      <div className="mr-8 ml-8">
        <form
          className="p-2 pt-5 rounded-lg bg-white lg:h-auto lg:flex lg:flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="lg:flex lg:flex-row flex flex-col items-center gap-4">
            <div className="flex justify-between lg:justify-start items-center gap-2 ">
              <label htmlFor="" className="font-medium">
                Titulo
              </label>
              <input
                type="text"
                className="h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52"
                value={titulo}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between lg:justify-start items-center gap-2">
              <label htmlFor="" className="font-medium">
                Tipo
              </label>
              <input
                type="text"
                className="h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52"
                value={tipo}
                onChange={(e) => setType(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between lg:justify-start items-center gap-2">
              <label htmlFor="" className="font-medium">
                Fecha
              </label>
              <Dateinput />
            </div>
          </div>
          <aside className="flex flex-col justify-center gap-2 mt-10">
            <label htmlFor="message" className="block font-medium">
              Reporte
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="h-32 mt-2 block ring-1 ring-gray-400 text-sm w-full rounded-md pl-3 shadow-sm outline-none focus:border-gray-400 focus:ring-[0.5px]"
              value={reporte}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </aside>

          <aside className="mt-2 mb-2 flex justify-end gap-2">
            <button
              className="bg-[#EAEAEA] p-2 rounded-xl hover:animate-pulse hover:bg-[#CFCFCF]"
              type="reset"
              onClick={eliminate}
            >
              <span className="text-black flex items-center gap-2 justify-center">
                <RiCloseCircleLine />Eliminar
              </span>
            </button>

            <button
              type="submit"
              className="bg-blue-600 p-2 rounded-xl hover:animate-pulse hover:bg-blue-700"
              disabled={isLoading} // Deshabilita el botón mientras isLoading sea true
            >
              <span className="text-white flex items-center gap-2 justify-center">
                <RiDraftLine />Generar
              </span>
            </button>
          </aside>
        </form>

        <div className="mt-5">
          <h1 className="text-lg font-medium">Reportes Generados</h1>
          {reportesGenerados.map((reporte) => (
            <CardReport
              key={reporte.id}
              Title={reporte.titulo}
              Type={reporte.tipo_reporte}
              Report={reporte.descripcion}
              Date={reporte.fecha_creacion}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FormReport;
