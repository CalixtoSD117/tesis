import React from 'react'

const CardsWelcome = () =>
{
    return (
        <>
            <div className="bg-wt pl-2 pr-2">
                <h1 className="text-center text-3xl font-semibold">Bienvenido</h1>
                <p className="text-justify pt-4 pb-4 ">Esta será la aplicación donde usted podrá monitorear cada uno de los contenedores que tenga,
                    podra observar cada  uno de los cambios que se realicen en los patios del puerto.
                </p>
                <p className="font-bold pb-4">Version: 1.0</p>
            </div>

            <div className="bg-wt pl-2 pr-2 mt-8">
                <h1 className="text-center text-3xl font-semibold">Novedades</h1>
                <h3 className="pt-4 pb-4"><span className="font-bold">Ubicacion:</span> Se añadieron funcionalidades de ver en tiempo real los contenedores.</h3>
                <h3 className="pt-4 pb-4"><span className="font-bold">Alertas:</span> Se añadieron funcionalidades de ver en tiempo real los contenedores.</h3>
                <h3 className="pt-4 pb-4"><span className="font-bold">Reportes:</span> podrás crear reportes de cada uno de los sucesos que te resulten importantes.</h3>
            </div>

        </>
    )
}

export default CardsWelcome