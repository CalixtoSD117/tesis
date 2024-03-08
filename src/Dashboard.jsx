import { Outlet } from "react-router-dom";
import { GoogleMap, Marker, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { CardDash, Header, Sidebar } from "./components";
import { useEffect, useState } from "react";
import CardsDashboard from "./components/CardsDashboard";
import { parse } from "postcss";
import { carga } from "./assets";

const Dashboard = () => {

  const [location, setlocation] = useState([])

  const userId = localStorage.getItem("userId");

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://contenlocator.com/api/temperatureData.php?user_id=${userId}`);
      const location = await data.json();

      setlocation(location);

    };

    const interval = setInterval(fetchData, 1000); // Fetch data every 10 seconds

    return () => clearInterval(interval);
  }, [userId]);

  
  const markerPosition = {
    lat: parseFloat(location.latitud),
    lng: parseFloat(location.longitud)
  };
  


  const mapStyles = {
    height: "80vh",
    width: "100%",
    borderRadius: 20
  };

  const defaultCenter = {
    lat: 19.124435, 
    lng: -104.34322
  }

  // const markerPosition = {
  //   lat: 19.116945, // Latitud del marcador
  //   lng: -104.3456304, // Longitud del marcador
  // };

  return (
    <div className="bg-slate-50">
      <div className='min-h-screen '>
        {/* Sidebar */}
        <Sidebar />
        {/* Header */}
        <Header title="Dashboard" />
        {/* Main */}
        <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28 ">
          <div className="pl-8 pr-8 lg:flex items-center justify-center gap-12">
            <CardsDashboard data={1} title="Dispositivos" text="Activos" />
            <CardsDashboard data={1} title="Contenedores" text="Disponibles" />
            <CardsDashboard data={0} title="Dispositivos" text="Inactivos" />
          </div>
          {/* mapa */}
          <div className="lg:w-full p-8">
            <LoadScript
              googleMapsApiKey="AIzaSyB912pXLDOGB1PyJI5Q6hDzBGit3p-S-M4">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              >
                {/* <MarkerF
                  position={markerPosition}
                /> */}
                {location.map((location) => (
                  <MarkerF
                  icon={carga}
                  onClick={handleMarkerClick}
                    key={location.idDevice}
                    position={{ lat: parseFloat(location.latitud), lng: parseFloat(location.longitud) }}
                    
                  />
                ))}
                {isInfoWindowOpen && (
                      <InfoWindowF
                        position={markerPosition}
                        onCloseClick={handleInfoWindowClose}
                      >
                        <div>
                          <h1 className="text-xl">Contenedor</h1>
                          <p>id: {location[0].idDevice}</p>
                          <p>latitud: {location[0].latitud}</p>
                          <p>longitud: {location[0].longitud}</p>
                          <p>temperatura: {location[0].temperatura}</p>
                        </div>
                      </InfoWindowF>
                    )}
              </GoogleMap>
            </LoadScript>
          </div>
        </main>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;