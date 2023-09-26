import React from 'react'
import { motion } from "framer-motion"
import { contenedor, logotipo_v2, mac, mercado, p1, p2, p3, p4, p5, p6 } from './assets'
import { empresas } from './constants'
import { Link } from 'react-router-dom'
import { RiArrowUpLine, RiCloseLine, RiFacebookLine, RiInstagramLine, RiMenu3Line, RiTwitterLine, RiUser3Line } from "react-icons/ri";
import { useState } from 'react'


const Landing = () =>
{

  const handleClick = () =>
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [menu, setmenu] = useState(false)

  const handlemenu = () =>{
    setmenu(!menu)
    console.log
  }

  return (
    <div className='bgp'>
      {/* sidebar lateral */}

     
        <nav className={`lg:hidden fixed h-52 md:w-52 top-16 text-gray-900 transition-all duration-300 ease-in-out w-1/2 bg-slate-50  z-50 rounded-r-full shadow-2xl ${menu ? "left-0" : '-left-full'}`}>
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
     
        
      {/* header */}
      <header id='home' className='fixed top-0 pt-3 pb-3 p-3 lg:pl-10 lg:pr-10 bg-white lg:bg-opacity-90 flex items-center justify-between w-full rounded-b-lg'>
        <div className='flex items-center gap-3 text-2xl font-bold'>
          <img className='h-8 w-8 rounded-full' src={logotipo_v2} alt="imagen" />
          <h1>ContentLocator</h1>
        </div>

        <nav>
          <ul className='lg:flex lg:items-center lg:justify-center gap-10 font-semibold hidden'>
            <li><a href="#inicio">Inicio</a></li>
            <li>Acerca de</li>
            <li>Contactanos</li>
            <motion.li
              whileHover={{ scale: 0.9, rotate: 2 }}
            >
              <Link to="/login" className='hover:bg-cyan-400 hover:text-white ring-[0.5px] rounded-lg transition-all duration-300 flex  items-center justify-center gap-2 p-2'> <RiUser3Line /> Iniciar Sesion</Link>
            </motion.li>
          </ul>
        </nav>
        
        <button onClick={handlemenu} className='bg-slate-300 p-2 rounded-lg lg:hidden '>
          {menu ? <RiCloseLine/> : <RiMenu3Line/>}
        </button>

      </header>


      <section className=' md:flex md:items-center md:justify-center p-10 pt-20  lg:mt-10 h-full w-full'>
        <motion.div
          initial={{ x: -500 }}
          animate={{
            x: 0
          }}
          transition={{ duration: 1 }}
          className='w-full h-full flex flex-col gap-4'>
          <h1 className='lg:text-5xl text-3xl uppercase font-extrabold text-start'>
            La mejor manera de asegurar tus<span className='text-blue-500'> contenedores  dentro del puerto </span>
          </h1>
          <span className='text-gray-500'>
            Contamos con la ultima tecnologia en rastreo, utilizamos la red inalambrica mas rapida del mundo, nosotros
            te ayudamos a administrar, cuidar y ver el estado de tus contenedores dentro del puerto garantizando la seguridad
            de tu contenedor asi como su mercancia.

          </span>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-blue-600 p-2 rounded-xl w-32 text-center font-semibold text-white'
            href="mailto:ccalixto@ucol.mx?subject=Contratacion&body=Porfavor brindenos la siguiente informacion para poder contactarnos con usted lo mas pronto posible %0A%0A Nombre Completo:%0A%0ACorreo:%0A%0ATelefono:%0A%0A
         ">Contratar</motion.a>

        </motion.div>

        <motion.div
          initial={{ y: -500 }}
          animate={{
            y: 0
          }}
          transition={{ duration: 1 }}
          className='w-full right-0'
        >
          <div className='w-full h-full md:flex items-center justify-center hidden'>
            <motion.img
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 5,
                bottom: 5,
              }}

              className='z-20' src={contenedor} alt="" />

            <div className='bg-gray-200 blur-3xl h-80 lg:w-[600px] w-[200px] rounded-full absolute z-10' />
          </div>
        </motion.div>
      </section>

      <section id='inicio' className=' p-10 md:flex md:flex-row flex flex-col items-center justify-center  rounded-3xl'>
        <div className='md:w-[850px] md:h-[300px] flex justify-end items-center '>
          <img className='w-[580px] object-cover' src={mac} alt="" />
        </div>
        <div className='flex flex-col items-start w-full lg:h-[280px] leading-6'>
          <h1 className='lg:text-4xl md:text-3xl text-4xl text-blue-500 font-bold'>ContentLocator App</h1>
          <span className='text-gray-500 lg:text-lg md:text-base font-light'>
            Le proporcionamos una aplicacion web para que usted pueda enterarse de cada uno de los
            cambios o sucesos que puedan darse en cualquier momento, ademas podra hacer uso de esta aplicacion en su
            movil para una mayor comodidad a la hora de estar fuera de casa.
          </span>

          <div className='md:hidden lg:block'>
            <h2 className='mt-5 text-2xl font-semibold text-blue-600'>Algunas Caracteristicas</h2>

            <div className='mt-5 lg:flex items-center justify-between gap-5 pb-5'>
              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-28 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Localizacion
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-44 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Alertas en tiempo real
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-52 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Medicion de temperatura
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-44 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Estado del Contenedor
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <section className='lg:hidden md:block hidden text-center'>
      <h2 className=' text-2xl font-semibold text-blue-600'>Algunas Caracteristicas</h2>
      <div className='flex justify-center items-center '>
            

            <div className='mt-5 flex items-center justify-between gap-5 pb-10'>
              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-28 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Localizacion
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-44 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Alertas en tiempo real
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-52 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Medicion de temperatura
              </motion.div>

              <motion.div
                transition={{ duration: 0.1 }}
                whileHover={{ rotate: 10, scale: 0.9, color: '#446FF6' }}
                className='w-44 h-10 flex items-center justify-center rounded-lg font-semibold p-1 shadow-lg'
              >
                Estado del Contenedor
              </motion.div>

            </div>
          </div>
      </section>  

      {/* footer */}
      <footer className='pr-10 pl-10 mt-10 bg-slate-50 pt-5 border-t'>
        <div className='md:flex md:flex-row justify-between md:items-start'>

          <div className='flex flex-col md:w-96'>
            <h1 className='text-base font-bold text-gray-800'>Lema</h1>
            <p>Aseguramos, protegemos y brindamos el mejor servicio para que su mercancia este Seguro</p>
          </div>

          <div className='flex flex-col gap-1 md:w-96'>
            <h1 className='text-base font-bold text-gray-800'>Encuéntranos en estos países</h1>
            <div className='flex flex-col gap-1 text-sm text-gray-600'>
              <span>Argentina</span>
              <span>Brasil</span>
              <span>China</span>
              <span>Chile</span>
              <span>Colombia</span>
              <span>Costa Rica</span>
              <span>Ecuador</span>
              <span>Estados Unidos</span>
              <span>México</span>
              <span>Perú</span>
              <span>Uruguay</span>
            </div>
          </div>

          <div className='flex flex-col md:w-96'>
            <h1 className='text-base font-bold text-gray-800'>Redes Sociales</h1>
            <div className='flex  items-center gap-5'>
              <div className='p-1 shadow-lg text-xl rounded-full bg-slate-50 hover:bg-blue-500 hover:text-white transition-all duration-300'><RiFacebookLine /></div>
              <div className='p-1 shadow-lg text-xl rounded-full bg-slate-50 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-white transition-all duration-300'><RiInstagramLine /></div>
              <div className='p-1 shadow-lg text-xl rounded-full bg-slate-50 hover:bg-blue-400 hover:text-white transition-all duration-300'><RiTwitterLine /></div>
            </div>
          </div>

        </div>
        <div className='w-full text-center mt-5 text-sm'>
          © 2023 ContentLocator Inc. All rights reserved.
        </div>
      </footer>

      <motion.a
        whileHover={{ scale: 1.2 }}
        onClick={handleClick}
        className='w-10 h-10 z-50 flex justify-center items-center right-4 bottom-4 text-white fixed bg-cyan-600 rounded-full transition-all duration-100'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <RiArrowUpLine />
      </motion.a>

    </div>
  )
}

export default Landing