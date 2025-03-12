import { CuentaTemplate,
  useCuentaStore,
  useOperaciones,
  useUsuariosStore,
  SpinnerLoader,} from "../index";

import { useQuery } from "@tanstack/react-query";
export function Cuenta() {
  const { tipo } = useOperaciones();
    const { datacuentas, mostrarCuentas } = useCuentaStore();
    const { datausuarios } = useUsuariosStore();
    const { isLoading, error } = useQuery({
      queryKey: ["mostrar cuentas", tipo],
      queryFn: () =>
        mostrarCuentas({ idusuario: datausuarios.id, tipo: tipo }),
    });
    if (isLoading) {
      return <SpinnerLoader />;
    }
    if (error) {
      return <h1>Error...</h1>;
    }
  
    return (
      <><CuentaTemplate data={datacuentas}></CuentaTemplate></>
    );}
