import { supabase, ObtenerIdAuthSupabase } from "../index";

export const useAdminStore = async () => {
  const idAuthSupabase = await ObtenerIdAuthSupabase(); 
  if (idAuthSupabase) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('role')
        .eq('idauth_supabase', idAuthSupabase)
        .single(); 

      if (error) {
        throw new Error("Error al obtener el rol: " + error.message);
      }

      if (data && data.role === "ADMIN") {
        return true; 
      }

      return false; 
    } catch (error) {
      console.error("Error en la verificación del rol:", error);
      return false;
    }
  }

  return false; 
};

