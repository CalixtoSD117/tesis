import { Outlet } from "react-router-dom";
import { CardPerfil, Header, Sidebar } from "./components";




const Perfil = () => {
  
  return (
    <div className="">
    <div className='min-h-screen'>
        {/* Sidebar */}
        <Sidebar/>
        {/* header */}

        <Header/>

       {/* Main */}

        <main className="lg:pl-[285px] pt-32 md:pt-24 lg:pt-20 bg-slate-100 z-0">
        
        <CardPerfil/>
            
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Perfil;