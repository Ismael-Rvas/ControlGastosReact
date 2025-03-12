import { create } from "zustand";
import { EliminarSaldoCuenta, MostrarCuentas } from "../index";
export const useCuentaStore = create((set, get) => ({
  cuentaItemSelect: [],
  datacuentas: [],
  mostrarCuentas: async (p) => {
    const response = await MostrarCuentas(p);
    set({ datacuentas: response });
    set({ cuentaItemSelect: response });
    return response;
  },
  eliminarSaldoCuenta: async (p) => {
      await EliminarSaldoCuenta(p);
      const { mostrarCuentas } = get();
      set(mostrarCuentas(p));
    },
}));
