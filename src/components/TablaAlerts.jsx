import React from "react";
import { contenedor } from "../constants";
import CardBat from "./CardBat";
import CardTemp from "./CardTemp";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

const TablaAlerts = () => {
  const [temperature, setTemperature] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://contenlocator.com/api/temperatureData.php?user_id=${userId}`);
      const temperature = await data.json();
      setTemperature(temperature);
    };

    const interval = setInterval(fetchData, 1000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

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
                {data.state == 1 ? (
                  <div className="flex flex-row items-center justify-center gap-2 ">
                    {" "}
                    <div className="h-[10px] w-[10px] mt-[2px] bg-green-500 rounded-full"></div>{" "}
                    <span> Activo</span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center gap-2 ">
                    {" "}
                    <div className="h-[10px] w-[10px] mt-[2px] bg-red-500 rounded-full"></div>{" "}
                    <span> Inactivo</span>
                  </div>
                )}
              </td>
              <td>
                <CardTemp temperature={parseInt(data.temperatura)} />
              </td>
              <td>
                <CardBat Battery={13} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAlerts;
