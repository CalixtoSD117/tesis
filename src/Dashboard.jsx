import { Outlet } from "react-router-dom";
import { GoogleMap, Marker, LoadScript  } from "@react-google-maps/api";
import { CardDash, Header, Sidebar } from "./components";
  
  
  const Dashboard = () => {

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

    
    return (
      <div className="bg-slate-50">
      <div className='min-h-screen '>
          {/* Sidebar */}
          
          <Sidebar/>
  
          {/* Header */}
          <Header title="Dashboard"/>
          {/* Main */}
  
          <main className="lg:pl-[248px] pt-36 md:pt-24 lg:pt-28 ">
            <div className="pl-8 pr-8 lg:flex items-center justify-center gap-12">

            <CardDash/>

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
                  <Marker position={markerPosition} />
                </GoogleMap>
                </LoadScript>
            
            </div>
  
              
          </main>
          <Outlet/>
      </div>
      </div>
    )
  }

 
  
  export default Dashboard;