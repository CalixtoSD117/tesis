import React from 'react'

const CardsDashboard = ({title = "title",data = 1, text}) => {
  return (
    <div className='w-full'>
            <div className='bg-white w-full h-72 rounded-xl shadow-md flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='h-[50px] w-[50px] bg-blue-500 rounded-full'></div>
                <h1 className='text-2xl font-semibold'>{title}</h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl font-semibold'>{data}</h1>
                <p className='text-sm font-semibold'>{text}</p>
            </div>
            </div>
    </div>
  )
}

export default CardsDashboard