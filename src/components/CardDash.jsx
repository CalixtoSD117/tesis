import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect  } from 'react';

const CardDash = () =>
{
    const [randomNumber, setRandomNumber] = useState(null);
    const [randomNumber2, setRandomNumber2] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
          const newNumber = Math.floor(Math.random() * 3) + 1;
          setRandomNumber(newNumber);
        }, 2000); // Cambia el número cada 2 segundos (2000 milisegundos)
    
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          const newNumber = Math.floor(Math.random() * 2) + 1;
          setRandomNumber2(newNumber);
        }, 2000); // Cambia el número cada 2 segundos (2000 milisegundos)
    
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="ring-1 ring-white p-4 rounded-lg bg-white shadow-lg w-full lg:mb-0 mb-4 ">
                <div>
                    <h1 className="lg:text-2xl font-bold pb-2 ">Descargar datos:</h1>
                    <p>Para descargar los datos recopilados en la aplicación solamente de clic al botón de abajo y tendrá un reporte completo de sus contenedores</p>
                </div>
                <aside className="flex items-center justify-center pt-2">
                    <button className="bg-slate-200 p-1 rounded-lg text-md font-semibold px-4 hover:bg-slate-400 transition-colors ease-in-out">
                        Descargar
                    </button>
                </aside>
            </div>
            <Link to="/mapa" className="w-full">
                <div className="bg-white shadow-lg ring-1 ring-white p-4 rounded-lg   w-full"  >
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold pb-2 ">Dispositivos</h1>
                        <p className="pb-5">En linea: {randomNumber} </p>
                        <p className="pb-5">No en linea: {randomNumber2} </p>
                        <br />
                    </div>

                </div>
            </Link>

        </>
    )
}

export default CardDash