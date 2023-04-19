import React from 'react'
import { user } from '../constants'

const CardUserDown = () => {
  return (
    <>
    {user.map((data, index) =>(
            <div key={index} className="flex ml-4 items-center gap-4">
                
                <img src={data.img} alt="example" 
                className="w-8 h-8 object-cover rounded-full ring-4 ring-blue-500 " />
                <div>
                    <h5 className=" text-white font-medium">{data.name}</h5>
                    <p className="text-gray-300 text-sm">{data.role}</p>
                </div>
            </div>
            ))}

    </>
  )
}

export default CardUserDown