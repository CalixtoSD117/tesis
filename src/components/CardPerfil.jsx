import React, { useEffect, useState } from "react";
import {p} from "../assets"

const CardPerfil = () => {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://contenlocator.com/api/userData.php?id=${userId}`
      );
      const user = await data.json();
      // Check if the fetched data is an array before setting it in state
      if (Array.isArray(user)) {
        setUserData(user);
      } else {
        console.error("Fetched data is not an array:", user);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {userData.map((user) => (
        <div key={user.id} className="text-center">
          {/* centramos la un div con una imagen */}
          <div className="bg-white m-2 pt-8 rounded-lg">
            <div className="flex justify-center items-center">
              <div>
                <button>
                  <img
                    src={p}
                    alt="Perfil Photo"
                    className="rounded-full w-32 h-32 lg:w-44 lg:h-44 ring-8 ring-gray-300 object-cover hover:translate-y-[-10px] transition-all duration-300 "
                  />
                </button>
              </div>
            </div>

            <div className="lg:flex lg:flex-row flex flex-col ml-10 mr-10 gap-3 justify-center pt-10 pb-10">
              <div className="mt-2 flex items-center justify-between lg:justify-center">
                <label className="p-2 relative">Nombres: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer 
             outline-none focus:ring-gray-400"
                >
                  {user.fname}
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between lg:justify-center ">
                <label className="p-2 relative">Apellidos: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer "
                >
                  {user.lname}{" "}
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between  lg:justify-center">
                <label className="p-2 relative">Empresa: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-48 relative rounded peer "
                >
                  {user.company}{" "}
                </label>
              </div>
            </div>
            {/*  */}

            <div className="lg:flex lg:flex-row flex flex-col gap-3 mr-10 ml-10 justify-center pb-10">
              <div className="mt-2 flex items-center justify-between  lg:justify-center">
                <label className="p-2 relative">N° de dispositivos: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-32  lg:w-52 relative rounded peer 
             outline-none focus:ring-gray-400"
                >
                  {0}{" "}
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between  lg:justify-center">
                <label className="p-2 relative">Puerto: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer "
                >
                  {user.patio}{" "}
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between  lg:justify-center">
                <label className="p-2 relative">Area: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer "
                >
                  {user.area}{" "}
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between lg:hidden lg:justify-center">
                <label className="p-2 relative">Gmail: </label>
                <label
                  type="text"
                  className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer "
                >
                  {user.correo_electronico}{" "}
                </label>
              </div>
            </div>

            <div className="mt-2 lg:flex items-center justify-between hidden  lg:justify-center">
              <label className="p-2 relative">Gmail: </label>
              <label
                type="text"
                className="bg-transparent ring-1 ring-gray-300 w-52 relative rounded peer "
              >
                {user.correo_electronico}{" "}
              </label>
            </div>

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPerfil;
