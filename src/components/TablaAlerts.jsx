import React from 'react'
import { contenedor } from '../constants'
import CardBat from './CardBat'
import CardTemp from './CardTemp'

const TablaAlerts = () => {
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
            <td><CardTemp temperature={data.temperatura}/></td>
            <td><CardBat Battery={data.bateria}/></td>
            </tr>
          ))}
                 
        </tbody>
    </table>
    </div>
  )
}

export default TablaAlerts