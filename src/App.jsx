import { Routes, Route, Navigate } from "react-router-dom";
import Alertas from "./Alertas";
import Bienvenida from "./Bienvenida";
import { Navbarr } from "./components"
import Dashboard from "./Dashboard";
import Loginp from "./Loginp";
import Mapa from "./Mapa";
import Perfil from "./Perfil";
import Reportes from "./Reportes";
import Landing from "./Landing";
import PrivateRoute from "./routes/Privateroutes";
import Approutes from "./routes/Approutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Loginp />}/>
          
          <Route path="/*" element={<PrivateRoute>
            <Approutes />
          </PrivateRoute>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;