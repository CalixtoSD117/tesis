import { Outlet } from "react-router-dom";
import { CardBat, CardTemp, Header, Sidebar, TablaAlerts } from "./components";
import { ToastContainer } from "react-toastify";

const Alertas = () => {
  return (
    <div className="bg-slate-100">
      <div className="min-h-screen ">
        {/* Sidebar */}

        <Sidebar />

        {/* Header */}
        <Header title="Alertas y Estado" />
        {/* Main */}

        <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold mb-4">
                  Monitoreo de Dispositivos
                </h2>
                <p className="text-gray-600">
                  Accede al estado detallado de tus dispositivos y mantén el
                  control en tiempo real.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-gray-700">
                  En esta sección, tendrás acceso al estado detallado de algunos
                  de tus dispositivos, permitiéndote monitorizar parámetros
                  clave como la temperatura, estado operativo y nivel de
                  batería. En caso de detectarse alguna anomalía, recibirás una
                  notificación inmediata. Estamos comprometidos con
                  proporcionarte una herramienta de monitoreo avanzada que te
                  permita mantener un control efectivo sobre tus dispositivos,
                  garantizando así un funcionamiento óptimo y la pronta
                  identificación de cualquier irregularidad para una respuesta
                  proactiva.
                </p>
              </div>
              <div className="mb-10">
                <TablaAlerts />
              </div>
            </div>
          </div>
        </main>

        <Outlet />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Alertas;