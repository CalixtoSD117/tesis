import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFetch } from "../hooks/useFetch";
import { contenedor } from "../constants";
import CardBat from "./CardBat";
import CardTemp from "./CardTemp";

const TablaAlerts = () => {
  const [temperature, setTemperature] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://contenlocator.com/api/temperatureData.php?user_id=${userId}`);
      const newTemperature = await data.json();

      if (newTemperature[0].temperatura !== temperature[0]?.temperatura) {
        setTemperature(newTemperature);

        if (newTemperature[0].temperatura >= 39) {
          toast.alert("Temperatura alta", { autoClose: 1500 });
        } else if (newTemperature[0].temperatura <= 30) {
          toast.success("Temperatura normal", { autoClose: 1500 });
        }
      }
    };

    const interval = setInterval(fetchData); // 10 seconds ,2000

    return () => clearInterval(interval);
  }, [temperature, userId]);

  return (
    <div className="overflow-x-auto w-full border rounded-xl bg-white shadow-md">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Temperatura</th>
            <th className="px-4 py-2">Bateria</th>
          </tr>
        </thead> 
        <tbody className="text-center">
          {temperature?.map((data) => (
            <tr key={data.id} className="cursor-pointer border divide-x">
              <td>{data.idDevice}</td>
              <td>
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
              </td>
              <td>
                <CardTemp temperature={parseInt(data.temperatura)} />
              </td>
              <td>
                <CardBat Battery={100} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAlerts;
