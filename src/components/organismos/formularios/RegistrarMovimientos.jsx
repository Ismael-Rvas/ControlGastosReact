import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Switch } from "@mui/material";
import {
  useMovimientosStore,
  useCategoriasStore,
  useOperaciones,
  ListaGenerica,
  Selector,
  InputNumber,
  InputText,
  useCuentaStore,
  v,
  Btnsave,
  useUsuariosStore,
  EditarMovimientos,
} from "../../../index";
import { useEffect } from "react";
export function RegistrarMovimientos({ onClose, dataSelect, accion }) {
  const { datausuarios } = useUsuariosStore();
  const { cuentaItemSelect } = useCuentaStore();
  const { datacategoria, categoriaItemSelect, selectCategoria } =
    useCategoriasStore();
  const { tipo } = useOperaciones();
  const { insertarMovimientos, editarMovimiento } = useMovimientosStore();
  const [estadoProceso, setEstadoproceso] = useState(false);
  const [estado, setEstado] = useState(true);
  const [ignorar, setIgnorar] = useState(false);
  const [stateCategorias, setStateCategorias] = useState(false);
  const fechaactual = new Date();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const insertar = async (data) => {
    if (accion === "Editar") {
      const p = {
        tipo: tipo,
        estado: estado ? 1 : 0,
        fecha: data.fecha,
        descripcion: data.descripcion,
        idcuenta: cuentaItemSelect[0].id,
        valor: parseFloat(data.monto),
        idcategoria: categoriaItemSelect.id,
        id: dataSelect.id,
      };
      try {
        setEstadoproceso(true);
        console.log("entro");
        console.log(p);
        await editarMovimiento(p);
        setEstadoproceso(false);
        onClose();
      } catch (error) {
        console.error("Error al editar movimiento:", error);
      }
    } else {
      let estadoText = 0;
      if (estado) {
        estadoText = 1;
      }

      const p = {
        tipo: tipo,
        estado: estadoText,
        fecha: data.fecha,
        descripcion: data.descripcion,
        idcuenta: cuentaItemSelect[0].id,
        valor: parseFloat(data.monto),
        idcategoria: categoriaItemSelect.id,
      };

      try {
        await insertarMovimientos(p);
        onClose();
      } catch (err) {
        console.error("Error al insertar movimiento:", err);
      }
    }
  };
  function estadoControl(e) {
    setEstado(e.target.checked);
  }

  useEffect(() => {
    if (accion === "Editar") {
      setEstado(dataSelect.estado === 1);
    }
  }, []);
  return (
    <Container onClick={onClose}>
      <div
        className="sub-contenedor"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="encabezado">
          <div>
            <h1>
              {accion == "Editar"
                ? "Editar movimiento"
                : `Nuevo ${tipo == "i" ? "ingreso" : "gasto"}`}
            </h1>
          </div>
          <div>
            <span onClick={onClose}>{<v.iconocerrar />}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(insertar)} className="formulario">
          <section>
            <div>
              <label>Monto:</label>
              <div>
                <InputNumber
                  defaultValue={dataSelect.valor}
                  register={register}
                  placeholder="Ingrese cantidad"
                  errors={errors}
                  icono={<v.iconocalculadora />}
                />
              </div>
            </div>
            <ContainerFuepagado>
              <span>{<v.iconocheck />}</span>
              <label>Fue pagado:</label>
              <Switch
                onChange={estadoControl}
                checked={estado}
                color="warning"
              />
            </ContainerFuepagado>
            <ContainerFecha>
              <label>Fecha:</label>

              <input
                defaultValue={fechaactual.toJSON().slice(0, 10)}
                type="date"
                {...register("fecha", { required: true })}
              ></input>
              {errors.fecha?.type === "required" && (
                <p>El campo es requerido</p>
              )}
            </ContainerFecha>
            <div>
              <label>Descripción:</label>
              <InputText
                defaultValue={dataSelect.descripcion}
                register={register}
                placeholder="Ingrese una descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
                name="descripcion"
              />
            </div>
            <ContainerCategoria>
              <label>Categoria: </label>
              <Selector
                color="#e14e19"
                texto1={categoriaItemSelect?.icono}
                texto2={categoriaItemSelect?.descripcion}
                funcion={() => setStateCategorias(!stateCategorias)}
              />
            </ContainerCategoria>
          </section>
          {stateCategorias && (
            <ListaGenerica
              bottom="23%"
              scroll="scroll"
              setState={() => setStateCategorias(!stateCategorias)}
              data={datacategoria}
              funcion={selectCategoria}
            />
          )}

          <div className="contentBtnsave">
            <Btnsave
              titulo="Guardar"
              bgcolor="#DAC1FF"
              icono={<v.iconoguardar />}
              className="btnsave"
            />
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  color: black;

  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;
    color: ${({ theme }) => theme.text};
    label {
      font-weight: 550;
    }
    .encabezado {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-items: center;
      margin-bottom: 20px;
      h1 {
        font-size: 30px;
        font-weight: 700;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      .contentBtnsave {
        padding-top: 20px;
        display: flex;
        justify-content: center;
      }
      section {
        padding-top: 20px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
  @keyframes scale-up-bottom {
    0% {
      transform: scale(0.5);
      transform-origin: center bottom;
    }
    100% {
      transform: scale(1);
      transform-origin: center bottom;
    }
  }
`;
const ItemContainer = styled.section`
  gap: 10px;
  width: 50%;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.color};
  }
`;
const ContainerFuepagado = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ContainerCategoria = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ContainerFecha = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    appearance: none;
    color: ${({ theme }) => theme.text};
    font-family: “Helvetica”, arial, sans-serif;
    font-size: 17px;
    border: none;
    background: ${({ theme }) => theme.bgtotal};
    padding: 4px;
    display: inline-block;
    visibility: visible;
    width: 140px;
    cursor: pointer;
    &:focus {
      border-radius: 10px;

      outline: 0;
      /* box-shadow: 0 0 5px 0.4rem rgba(252, 252, 252, 0.25); */
    }
  }
`;
