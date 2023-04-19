import { Outlet } from "react-router-dom";
import { CardsWelcome, Header, Sidebar } from "./components";



const Bienvenida = () => {
  return (
    <div className=" bg-login">
    <div className='min-h-screen  bg-opacity '>
        {/* Sidebar */}
        <Sidebar/>
        {/* Header */}
        <Header/>
        {/* Main */}

        <main className="lg:pl-[285px] pt-36 md:pt-24 lg:pt-28">
            <CardsWelcome/>
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Bienvenida