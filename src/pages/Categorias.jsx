import {
  CategoriasTemplate,
  useCategoriasStore,
  useOperaciones,
  useUsuariosStore,
  SpinnerLoader,
} from "../index";
import { useQuery } from "@tanstack/react-query";

export function Categorias() {
  const { tipo } = useOperaciones();
  const { datacategoria, mostrarCategorias } = useCategoriasStore();
  const { datausuarios } = useUsuariosStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar categorias", tipo],
    queryFn: () =>
      mostrarCategorias({ idusuario: datausuarios.id, tipo: tipo }),
  });
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <CategoriasTemplate data={datacategoria}></CategoriasTemplate>
    </>
  );
}
