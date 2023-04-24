import { Outlet } from "react-router-dom";
import { CardPerfil, Header, Sidebar } from "./components";




const Perfil = () => {
  
  return (
    <div className="">
    <div className='min-h-screen'>
        {/* Sidebar */}
        <Sidebar/>
        {/* header */}

        <Header title="Perfil"/>

       {/* Main */}

        <main className="lg:pl-[248px] pt-32 md:pt-24 lg:pt-20  z-0">
        
        <CardPerfil/>
            
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Perfil;