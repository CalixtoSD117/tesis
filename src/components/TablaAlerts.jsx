import React from 'react'

const TablaAlerts = ({Id,Estado,Ubicacion,Dis,Temp,Bat}) => {
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

            <tr className='cursor-pointer border divide-x'>
            <td>{Id}</td>
            <td>{Estado}</td>
            <td>{Ubicacion}</td>
            <td>{Dis}</td>
            <td>{Temp}°C</td>
            <td>{Bat}%</td>
            </tr>

            <tr className='cursor-pointer'>
            <td>2</td>
            <td>Activo</td>
            <td>Universidad de Colima</td>
            <td>Conectado</td>
            <td>22°C</td>
            <td>100%</td>
            </tr>
            
            
        </tbody>
    </table>
    </div>
  )
}

export default TablaAlerts