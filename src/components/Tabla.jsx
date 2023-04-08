import React from 'react'

const Tabla = () => {
  return (
    <div className='overflow-x-auto w-full border rounded-xl bg-white shadow-md'>
    <table className='table w-full'>
        <thead>
            <tr>
                <th className='px-4 py-2'>id</th>
                <th className='px-4 py-2'>Estatus de Comunicacion</th>
                <th className='px-4 py-2'>Nombre</th>
                <th className='px-4 py-2'>Patio</th>
                
            </tr>
        </thead>
        <tbody className='text-center'>

            <tr>
            <td>1</td>
            <td>Activo</td>
            <td>Carlos</td>
            <td>A1</td>
            </tr>

            <tr>
            <td>2</td>
            <td>Activo</td>
            <td>Universidad de Colima</td>
            <td>A1</td>
            </tr>
            
            
        </tbody>
    </table>
    </div>
  )
}

export default Tabla