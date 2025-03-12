import { create } from "zustand";
import { EditarCuenta, EliminarSaldoCuenta, MostrarCuentas } from "../index";
export const useCuentaStore = create((set, get) => ({
  cuentaItemSelect: [],
  datacuentas: [],
  parametros:{},
  mostrarCuentas: async (p) => {
    const response = await MostrarCuentas(p);
    set({parametros:p})
    set({ datacuentas: response });
    set({ cuentaItemSelect: response });
    return response;
  },
  eliminarSaldoCuenta: async (p) => {
      await EliminarSaldoCuenta(p);
      const { mostrarCuentas } = get();
      set(mostrarCuentas(p));
    },
    editarCuenta: async (p) => {
      await EditarCuenta(p); 
      const { mostrarCuentas } = get(); 
      const { parametros } = get(); 
      set(mostrarCuentas(parametros));  
    },
}));
