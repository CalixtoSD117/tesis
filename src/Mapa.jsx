import React from "react";
import { Outlet } from "react-router-dom";
import { GoogleMap, Marker, LoadScript, InfoWindow, MarkerF, InfoWindowF, PolygonF, useJsApiLoader } from "@react-google-maps/api";
import { Header, Sidebar, Tabla } from "./components";
import { useEffect, useState } from "react";
import { carga } from "./assets";
import { Zoom } from "react-toastify";


const Mapa = () => {

  const [location, setlocation] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null);

  const userId = localStorage.getItem("userId");

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  // const handleMarkerClick = () => {
  //   setIsInfoWindowOpen(true);
  // };

  // const handleInfoWindowClose = () => {
  //   setIsInfoWindowOpen(false);
  // };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://contenlocator.com/api/temperatureData.php?user_id=${userId}`);
      const location = await data.json();

      setlocation(location);
      console.log(location);

    };

    const interval = setInterval(fetchData, 1000); // Fetch data every 10 seconds

    return () => clearInterval(interval);
  }, [userId]);


  const markerPosition = {
    lat: parseFloat(location.latitud),
    lng: parseFloat(location.longitud)
  };


  const polygonCoords = [
    { lat: 19.193414438513255, lng: -104.48872422343506 }, // Esquina superior izquierda
    { lat: 19.19942517416523, lng: -104.14923176234865 }, // Esquina inferior izquierda
    { lat: 18.93234733234944, lng: -103.92880037724849 }, // Esquina inferior izquierda
    { lat: 18.87722638165199, lng: -104.11427348101118 }, // Esquina inferior izquierda
    { lat: 18.94061390775024, lng: -104.37840271778319 }, // Esquina inferior izquierda
    { lat: 19.0260111939581, lng: -104.5745575186212 }, // Esquina inferior izquierda
    { lat: 19.193414438513255, lng: -104.48872422343506 }, // Esquina superior izquierda

  ];

  // 18.93234733234944, -103.92880037724849


  const mapStyles = {
    height: "80vh",
    width: "100%",
    borderRadius: 20
  };

  const center = {
    lat: 19.1149872,
    lng: -104.3054158
  }

  return (
    <div className="bg-slate-50">
      <div className='min-h-screen'>
        {/* Sidebar */}

        <Sidebar />

        {/* Header */}
        <Header title="Cobertura" />
        {/* Main */}

        <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28">
          <div className="pl-8 pr-8">

            <div className="lg:w-full ">
              <LoadScript
                googleMapsApiKey="AIzaSyB912pXLDOGB1PyJI5Q6hDzBGit3p-S-M4">
                <GoogleMap

                  mapContainerStyle={mapStyles}
                  zoom={12}
                  onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    // Añadir puntos alrededor del centro para definir los límites
                    bounds.extend(new window.google.maps.LatLng(center.lat + 0.1, center.lng + 0.1));
                    bounds.extend(new window.google.maps.LatLng(center.lat - 0.1, center.lng - 0.1));
                    map.fitBounds(bounds);

                    const listener = window.google.maps.event.addListener(map, "idle", () => {
                      if (map.getZoom() > 12) map.setZoom(12);
                      window.google.maps.event.removeListener(listener);
                    });
                  }}
                  onUnmount={map => {
                    // do your stuff before map is unmounted
                  }}
                >
                  <PolygonF
                    paths={polygonCoords}
                    options={{
                      fillColor: '#1653EB',
                      fillOpacity: 0.35,
                      strokeColor: '#1653EB',
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                    }}
                  />
                  {location.map((location) => (
                    <MarkerF
                      key={location.idDevice}
                      icon={carga}
                      position={{ lat: parseFloat(location.latitud), lng: parseFloat(location.longitud) }}
                      onClick={() => handleMarkerClick(location)}
                    />
                  ))}
                  {selectedMarker && (
                    <InfoWindowF
                      position={{ lat: parseFloat(selectedMarker.latitud), lng: parseFloat(selectedMarker.longitud) }}
                      onCloseClick={handleInfoWindowClose}
                    >
                      <div>
                        <h1 className="text-xl">Contenedor</h1>
                        <p>id: {selectedMarker.idDevice}</p>
                        <p>latitud: {selectedMarker.latitud}</p>
                        <p>longitud: {selectedMarker.longitud}</p>
                        <p>temperatura: {selectedMarker.temperatura}</p>
                      </div>
                    </InfoWindowF>
                  )}
                </GoogleMap>
              </LoadScript>

            </div>
            <div className="pt-4 mb-10">
              <Tabla />
            </div>



          </div>

        </main>
        <Outlet />
      </div>
    </div>
  )
}

export default React.memo(Mapa);



