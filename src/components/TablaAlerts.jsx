import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardBat from "./CardBat";
import CardTemp from "./CardTemp";
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";

const TablaAlerts = () => {
  const [datosgenerales, setdatosgenerales] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`https://contenlocator.com/api/temperatureData.php?user_id=${userId}`);
        const newdatosgenerales = await data.json();

        // Verifica si los datos son diferentes antes de actualizar el estado
        if (newdatosgenerales[0].temperatura !== datosgenerales[0]?.temperatura) {
          setdatosgenerales(newdatosgenerales);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar errores de fetch aquí, por ejemplo, mostrar una notificación de error
        toast.error("Error fetching data");
      }
    };

    fetchData(); // Realiza la primera solicitud cuando se monta el componente

    setInterval(fetchData, 5000); // Fetch data every 10 seconds

    // No hay intervalo, la solicitud se realizará solo cuando datosgenerales cambie

  }, [datosgenerales.temperatura]);

  return (
    <div className="overflow-x-auto w-full border rounded-xl bg-white shadow-md">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2"> Ubicacion </th>
            <th className="px-4 py-2">Temperatura</th>
            <th className="px-4 py-2">Bateria</th>
          </tr>
        </thead> 
        <tbody className="text-center">
         
            <tr className="cursor-pointer border divide-x">
            {datosgenerales?.map((data) => (
              <td key={data.idDevice}>{data.idDevice}</td>
              ))}
              <td>
              {datosgenerales?.map((data) => (
                <div key={data.idDevice}>
              {data.state === 1 ? (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="h-[10px] w-[10px] mt-[2px] bg-green-500 rounded-full"></div>
                    <span> Activo</span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="h-[10px] w-[10px] mt-[2px] bg-red-500 rounded-full"></div>
                    <span> Inactivo</span>
                  </div>
                )}
                </div>
                ))}
              </td>
              <td> <Link className="flex  items-center justify-center gap-2" to={'/mapa'}> <RiMapPinLine className="text-red-800" /> Ubicacion </Link> </td>
              <td>
                {datosgenerales?.map((data) => (
                  <CardTemp key={data.idDevice} temperature={parseInt(data.temperatura)} />
                ))}
              </td>
              <td>
                <CardBat Battery={100} />
              </td>
            </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default TablaAlerts;
