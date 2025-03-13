import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertarUsuarios } from "../index";
import Swal from "sweetalert2";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata, session?.user.id);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
    const p = {
      nombres: dataProvider.name,
      foto: dataProvider.avatar_url,
      idauth_supabase: idAuthSupabase,
    };
    await InsertarUsuarios(p);
  };
  const InsertarUsuarios = async (data) => {
    try {
      const { data: existingUser, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('idauth_supabase', data.idauth_supabase)
        .single();
      
      if (existingUser) {
        return;
      }
      
      const { data: insertedUser, error: insertError } = await supabase
        .from('usuarios')
        .insert([data]);

      if (insertError) {
        console.error('Error al insertar usuario:', insertError);
      } else {
        console.log('Usuario insertado:', insertedUser);
      }
    } catch (error) {
      console.error('Error inesperado al insertar usuario:', error);
    }
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
