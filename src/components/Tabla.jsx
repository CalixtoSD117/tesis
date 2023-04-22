import React from 'react'
import { contenedor } from '../constants'

const Tabla = () => {
  return (
    <div className='overflow-x-auto w-full border rounded-xl bg-white shadow-md'>
    <table className='table w-full'>
        <thead>
            <tr>
                <th className='px-4 py-2'>id</th>
                <th className='px-4 py-2'>Estatus</th>
                <th className='px-4 py-2'>Dispositivo</th>
                <th className='px-4 py-2'>Nombre</th>
                <th className='px-4 py-2'>Patio</th>
                
            </tr>
        </thead>
        <tbody className='text-center'>
        {contenedor.map((data)=>(
          <tr key={data.id} className='cursor-pointer border divide-x'>
            <td>{data.id}</td>
            <td>{data.estado}</td>
            <td>{data.dispositivo}</td>
            <td>{data.nombre}</td>
            <td>{data.patio}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default Tabla