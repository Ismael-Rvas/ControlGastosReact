import Swal from "sweetalert2";
import { supabase } from "../index";
export async function MostrarCuentas(p) {
  try {
    const { data } = await supabase
      .from("cuenta")
      .select()
      .eq("idusuario", p.idusuario)
      if (data) {
        return data;
      }
    return data;
  } catch (error) {
    console.error("Error en la consulta de cuentas:", error);s
  }
}

export async function EliminarSaldoCuenta(p) {
  try {
    const { error } = await supabase
      .from("cuenta")
      .update({ saldo_actual: 0 })
      .eq("idusuario", p.idusuario);
    if (error) {
      alert("Error al actualizar saldo", error);
    } else {
      
    }
  } catch (error) {
    alert(error.error_description || error.message + " actualizar saldo");
  }
}

export async function EditarCuenta(p) {
  try {
    const { data, error } = await supabase
      .from("cuenta")
      .update(p)
      .eq("idusuario", p.idusuario) 
      .eq("id", p.id)
      .select();

    if (error) {
      console.error("❌ Error al editar cuenta:", error);
    } else {
      Swal.fire({
        icon: "success",
        title: "Cuenta actualizada",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return data;
  } catch (error) {
    console.error("❌ Error en EditarCuenta:", error);
  }
}

