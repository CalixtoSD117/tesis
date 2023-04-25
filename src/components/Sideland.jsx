import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiUser3Line } from 'react-icons/ri'

const Sideland = () => {
  return (
    <>
        <nav className='fixed h-52 top-16 text-gray-900 transition-all duration-300 ease-in-out w-1/2 bg-slate-50  z-50 rounded-r-full shadow-2xl'>
          <ul className='flex flex-col m-6  gap-3 pr-3 font-semibold'>
              <li><a href="#inicio">Inicio</a></li>
              <li>Acerca de</li>
              <li>Contactanos</li>
              <motion.li
                whileHover={{ scale: 0.9, rotate: 2 }}
              >
                <Link to="/login" className='hover:bg-cyan-400 w-36 hover:text-white  rounded-lg transition-all duration-300 flex  items-center justify-center gap-2 pl-0 p-2'> <RiUser3Line /> Iniciar Sesion</Link>
              </motion.li>
            </ul>
        </nav>
    </>
  )
}

export default Sideland