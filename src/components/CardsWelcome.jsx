import React from "react";

const CardsWelcome = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">
            ¡Bienvenido a nuestro Monitoreo Portuario!
          </h2>
        </div>
        <p className="text-justify pb-4">
          Bienvenido a nuestra aplicación de monitoreo portuario. Aquí, puedes
          realizar un seguimiento exhaustivo de cada contenedor en tus patios,
          supervisando cualquier modificación en tiempo real. Nuestra plataforma
          proporciona información detallada sobre el estado y la ubicación de
          tus contenedores, permitiéndote tomar decisiones informadas y
          optimizar la gestión logística de tu operación portuaria. Estamos
          comprometidos a ofrecerte una herramienta robusta y eficiente para
          mejorar la visibilidad y el control de tus activos, contribuyendo a la
          eficacia y eficiencia de tus operaciones portuarias.
        </p>
        <p className="font-bold pb-4">Versión: 1.0</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">¡Novedades Recientes!</h2>
        </div>
        <ul className="list-disc pl-6 pt-4">
          <li className="pb-4">
            <span className="font-bold">Ubicación:</span> Se añadieron
            funcionalidades para ver en tiempo real la ubicación de los
            contenedores.
          </li>
          <li className="pb-4">
            <span className="font-bold">Alertas:</span> Ahora puedes recibir
            alertas en tiempo real sobre tus contenedores.
          </li>
          <li className="pb-4">
            <span className="font-bold">Reportes:</span> Crea informes
            detallados de eventos importantes en tus operaciones portuarias.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardsWelcome;
