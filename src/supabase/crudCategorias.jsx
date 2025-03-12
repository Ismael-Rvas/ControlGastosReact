import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarCategorias(p) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe un registro con " + p.descripcion,
        footer: '<a href="/categorias">Agregue una nueva descripcion</a>',
      });
    }
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Categoria registrada",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    alert(error.error_description || error.message + " insertar categorias");
  }
}
export async function MostrarCategorias(p) {
  try {
    const { data } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", p.idusuario)
      .eq("tipo", p.tipo)
      .order("id", { ascending: false });
    return data;
  } catch (error) {}
}
export async function EliminarCategorias(p) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }else{Swal.fire({
      icon: "success",
      title: "Categoria eliminada",
      showConfirmButton: false,
      timer: 1500,
    });}
  } catch (error) {
    alert(error.error_description || error.message + " eliminar categorias");
  }
}
export async function EditarCategorias(p) {
  try {
    const {data, error } = await supabase
      .from("categorias")
      .update(p)
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar categoria", error);
    }else{Swal.fire({
      icon: "success",
      title: "Categoria actualizada",
      showConfirmButton: false,
      timer: 1500,
    });}
  } catch (error) {
    alert(error.error_description || error.message + " editar categorias");
  }
}
export async function EliminarCategoriasTodas(p) {
  try {
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", p.idusuario);
    if (error) {
      alert("Error al eliminar", error);
    }
    Swal.fire({
      icon: "success",
      title: "Datos reseteados",
      showConfirmButton: false,
      timer: 1000,
    });
  } catch (error) {
    alert(error.error_description || error.message + " eliminar categorias");
  }
}
