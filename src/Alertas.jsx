import { Outlet } from "react-router-dom";
import { CardBat, CardTemp, Header, Sidebar, TablaAlerts } from "./components";




const Alertas = () =>
{
    

    return (
        <div className="bg-slate-100">
            <div className='min-h-screen '>
                {/* Sidebar */}

                <Sidebar />

                {/* Header */}
                <Header title="Alertas y Estado" />
                {/* Main */}

                <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28 pb-20">
                    
                    <div className="pl-8 pr-8">
                        <div className="pt-4 mb-10">
                            <TablaAlerts />
                        </div>
                    </div>



                </main>
                <Outlet />
            </div>
        </div>
    )
}

export default Alertas;