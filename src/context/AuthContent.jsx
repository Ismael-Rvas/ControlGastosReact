import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertarUsuarios} from "../index";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
    // Verificar si el usuario ya existe
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("idauth_supabase", idAuthSupabase);

    if (data.length === 0) {
      // Insertar solo si el usuario no existe
      const { error } = await InsertarUsuarios({
        nombres: dataProvider.name,
        foto: dataProvider.picture,
        idauth_supabase: idAuthSupabase,
      });
    } 
  };
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata,session?.user.id);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  // const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
  //   const p = {
  //     nombres: dataProvider.name,
  //     foto: dataProvider.picture,
  //     idauth_supabase: idAuthSupabase,
  //   };
  //   await InsertarUsuarios(p)

  // };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};