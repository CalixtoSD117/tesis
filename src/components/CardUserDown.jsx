import React, { useState, useEffect } from "react";
import { p } from "../assets";

const CardUserDown = () => {
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
    <>
      {userData.map((data) => (
        <div key={data.id} className="flex ml-4 items-center gap-4">
          <img
            src={p}
            alt="example"
            className="w-8 h-8 object-cover rounded-full ring-4 ring-blue-500 "
          />
          <div>
            <h5 className=" text-white font-medium">{data.fname}</h5>
            <p className="text-gray-300 text-sm">{data.lname}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardUserDown;
