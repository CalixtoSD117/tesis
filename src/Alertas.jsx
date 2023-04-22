import { Outlet } from "react-router-dom";
import { CardBat, CardTemp, Header, Sidebar, TablaAlerts } from "./components";



const Alertas = () =>
{


    const Battery = 51;
    const temperature = 21;
    return (
        <div className="bg-slate-100">
            <div className='min-h-screen '>
                {/* Sidebar */}

                <Sidebar />

                {/* Header */}
                <Header title="Alertas y Estado" />
                {/* Main */}

                <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28 pb-20">
                    <div className="pl-8 pr-8 lg:flex items-center justify-center gap-12">

                        <div className="ring-1 ring-white p-4 rounded-lg bg-white shadow-lg w-full lg:mb-0 mb-4 h-48 ">
                            <CardBat Battery={Battery} />
                        </div>


                        <div className="bg-white shadow-lg ring-1 ring-white p-4 rounded-lg  w-full h-48"  >
                            <CardTemp temperature={temperature} />
                        </div>


                    </div>
                    <div className="pl-8 pr-8">
                        <div className="pt-4 mb-10">
                            <TablaAlerts Temp={temperature} Bat={Battery} Ubicacion="San pedrito" Id="1" Estado="Activo" Dis="Conectado" />
                        </div>
                    </div>



                </main>
                <Outlet />
            </div>
        </div>
    )
}

export default Alertas;