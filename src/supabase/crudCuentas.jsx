import { supabase } from "../index";
export async function MostrarCuentas(p) {
  try {
    const { data } = await supabase
      .from("cuenta")
      .select()
      .eq("idusuario", p.idusuario)
      .maybeSingle();
  
      if (data) {
        return data;
      }
    return data;
  } catch (error) {
    console.error("Error en la consulta de cuentas:", error);
  }
}

export async function EliminarSaldoCuenta(p) {
  try {
    console.log("ID Usuario:", p.idusuario);
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

