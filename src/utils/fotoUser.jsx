import { supabase, ObtenerIdAuthSupabase } from "../index";

// Función para sacar la foto del usuario de la bbd
export const fotoUser = async () => {
  const idAuthSupabase = await ObtenerIdAuthSupabase(); 
  if (idAuthSupabase) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('foto')
        .eq('idauth_supabase', idAuthSupabase)
        .single(); 

      if (error) {
        throw new Error("Error al obtener la foto: " + error.message);
      }
      return data.foto

    } catch (error) {
      console.error("Error no se pudo obtener la imagen:", error);
    }
  }
};

