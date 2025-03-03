import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContent";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo={"/login"} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
