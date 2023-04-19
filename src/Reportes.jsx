import { Outlet } from "react-router-dom";
import { FormReport, Header, Sidebar } from "./components";



const Reportes = () =>{
    return (
        <div className="bg-slate-100">
            <div className='min-h-screen  '>
                {/* Sidebar */}
                <Sidebar/>

                
                {/* Header */}
                <Header/>
                {/* Main */}

                <main className="lg:pl-[285px] pt-36 md:pt-24 lg:pt-28 pb-10">

                    <FormReport/>

                </main>
                <Outlet />
            </div>
        </div>
    )
}

export default Reportes;