import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth,Configuracion,Categorias,Movimientos,Informes } from "../index";
export function MyRoutes() {
  const { user } = UserAuth();
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/configurar" element={<Configuracion />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/informes" element={<Informes />} />
        </Route>
      </Routes>
  
  );
}
