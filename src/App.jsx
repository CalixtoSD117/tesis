import { Routes,Route } from "react-router-dom";
import Alertas from "./Alertas";
import Bienvenida from "./Bienvenida";
import { Navbarr } from "./components"
import Dashboard from "./Dashboard";
import Loginp from "./Loginp";
import Mapa from "./Mapa";
import Perfil from "./Perfil";
import Reportes from "./Reportes";
import Landing from "./Landing";


const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Loginp/>} />
            <Route path="/bienvenida" element={<Bienvenida/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/mapa" element={<Mapa/>} />
            <Route path="/alertas" element={<Alertas/>} />
            <Route path="/reportes" element={<Reportes/>} />
            <Route path="/perfil" element={<Perfil/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;