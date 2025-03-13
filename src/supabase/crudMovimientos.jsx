import { supabase } from "./supabase.config";
import Swal from "sweetalert2";
export const InsertarMovimientos = async (p) => {
  try {
    const { data, error } = await supabase
      .from("movimientos")
      .insert(p)
      .select();
      if (error) {
        if (error.message.includes("La cuenta está inhabilitada")) {
          Swal.fire({
            icon: "error",
            title: "Inavilitada",
            text: "La cuenta está inhabilitada. No se puede realizar el movimiento.",
            footer: '<a href="/cuenta">Cambie el estado de su cuenta</a>',
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La cuenta no puede quedar con un saldo negativo. No se puede realizar el movimiento.",
            footer: '<a href="/cuenta">Visualiza el saldo de la cuenta</a>',
          });
        }
      }
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Registrado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    alert(error.error_description || error.message + " insertar movimientos");
  }
};
export async function EliminarMovimientos(p) {
  try {
    const { error } = await supabase
      .from("movimientos")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }
  } catch (error) {
    alert(error.error_description || error.message + " eliminar movimientos");
  }
}

export async function EditarMovimientos(p) {
  try {
    const { error } = await supabase
      .from("movimientos")
      .update(p)
      .eq("id", p.id)
      .eq("idcuenta", p.idcuenta)
    if (error) {
      console.log("Error move", error);
    }
  } catch (error) {
    console.error("Error al editar movimiento:", error);
  }
}
export async function MostrarMovimientosPorMesAño(p) {
  try {
    const { data } = await supabase.rpc("mmovimientosmesanio", {
      anio: p.año,
      mes: p.mes,
      iduser: p.idusuario,
      tipocategoria: p.tipocategoria,
    });
    
    return data;
  } catch (error) {}
}
export async function RptMovimientosPorMesAño(p) {
  try {
    const { data } = await supabase.rpc("rptmovimientos_anio_mes", {
      anio: p.año,
      mes: p.mes,
      iduser: p.idusuario,
      tipocategoria: p.tipocategoria,
    });
    return data;
  } catch (error) {}
}
