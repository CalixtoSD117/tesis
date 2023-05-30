import React from 'react'
import { contenedor } from '../constants'
import CardBat from './CardBat'
import CardTemp from './CardTemp'
import { useEffect, useState } from 'react';

const TablaAlerts = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * 50) + 1;
      setRandomNumber(newNumber);
    }, 2000); // Cambia el número cada 2 segundos (2000 milisegundos)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * 80) + 1;
      setRandomNumber2(newNumber);
    }, 2000); // Cambia el número cada 2 segundos (2000 milisegundos)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='overflow-x-auto w-full border rounded-xl bg-white shadow-md'>
    <table className='table w-full'>
        <thead>
            <tr>
                <th className='px-4 py-2'>id</th>
                <th className='px-4 py-2'>Estado</th>
                <th className='px-4 py-2'>Ubicacion</th>
                <th className='px-4 py-2'>Dispositivo</th>
                <th className='px-4 py-2'>Temperatura</th>
                <th className='px-4 py-2'>Bateria</th>
                
            </tr>
        </thead>
        <tbody className='text-center'>
          {contenedor.map((data) =>(
            <tr key={data.id} className='cursor-pointer border divide-x'>
            <td>{data.id}</td>
            <td>{data.estado}</td>
            <td>{data.ubicacion}</td>
            <td>{data.dispositivo}</td>
            <td><CardTemp temperature={randomNumber}/></td>
            <td><CardBat Battery={randomNumber2}/></td>
            </tr>
          ))}
                 
        </tbody>
    </table>
    </div>
  )
}

export default TablaAlerts