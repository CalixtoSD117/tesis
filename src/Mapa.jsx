import { Outlet } from "react-router-dom";
import { GoogleMap, Marker, LoadScript,InfoWindow  } from "@react-google-maps/api";
import { Header, Sidebar, Tabla } from "./components";
import { useState } from "react";


const Mapa = () => {

  const mapStyles = {        
    height: "80vh",
    width: "100%",
    borderRadius: 20};
  
  const defaultCenter = {
    lat: 19.116945, lng:-104.3456304
  }

  const markerPosition = {
    lat: 19.116945, // Latitud del marcador
    lng: -104.3456304, // Longitud del marcador
  };

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
  };

  return (
    <div className="bg-slate-50">
    <div className='min-h-screen'>
        {/* Sidebar */}
       
       <Sidebar/>

        {/* Header */}
        <Header title="Mapa"/>
        {/* Main */}

        <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28">
        <div className="pl-8 pr-8">

        <div className="lg:w-full ">
                <LoadScript
                googleMapsApiKey="AIzaSyB912pXLDOGB1PyJI5Q6hDzBGit3p-S-M4">
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                >
                  <Marker position={markerPosition} onClick={handleMarkerClick} />
                {isInfoWindowOpen && (
                  <InfoWindow
                    position={markerPosition}
                    onCloseClick={handleInfoWindowClose}
                  >
                    <div>
                      <p>Contenedor AD1</p>
                      <p>DEVKIT 170</p>
                    </div>
                  </InfoWindow>
                )}

                </GoogleMap>
                </LoadScript>
            
        </div>
        <div className="pt-4 mb-10">
            <Tabla/>
        </div> 
        


        </div>
        
        </main>
        <Outlet/>
    </div>
    </div>
  )
}

export default Mapa;