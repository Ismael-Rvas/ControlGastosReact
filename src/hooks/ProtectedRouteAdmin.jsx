import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdminStore } from "../index";
import Swal from "sweetalert2";

export const ProtectedRouteAdmin = ({ redirectTo, children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const adminStatus = await useAdminStore();
      setAdmin(adminStatus);
      setLoading(false);
    };
    checkAdminStatus();
  }, []);

  if (admin === false) {
    Swal.fire({
        toast: true,
        position: "top",
        timer: 4500,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
        title: "No tienes permiso",
        text: "Debes ser premium para acceder a este contenido",
        icon: "error",
      });
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
