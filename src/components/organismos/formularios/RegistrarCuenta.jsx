import styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  InputText,
  Btnsave,
  Spinner,
  useCuentaStore,
  useUsuariosStore,
  v,
  InputNumber,
} from "../../../index";
import Emojipicker from "emoji-picker-react";
import { Switch } from "@mui/material";

export function RegistrarCuenta({ onClose, dataSelect, accion }) {
  const { editarCuenta } = useCuentaStore();
  const { datausuarios } = useUsuariosStore();
  const [estado, setEstado] = useState(true);
  const [estadoProceso, setEstadoproceso] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [emojiselect, setEmojiselect] = useState("😻");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onEmojiClick = (emojiObject) => {
    setEmojiselect(emojiObject.emoji);
    setShowPicker(false);
  };

  const editar = async (data) => {
    const p = {
      saldo_actual: parseFloat(data.monto),
      icono: emojiselect,
      estado: estado ? 1 : 0,
      tipo_cuenta: data.tipo_cuenta,
      id: dataSelect[0].id,
      idusuario: datausuarios?.id,
    };
    console.log(p);

    try {
      setEstadoproceso(true);
      await editarCuenta(p);
      setEstadoproceso(false);
      onClose();
    } catch (error) {
      setEstadoproceso(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (accion === "Editar") {
      setEmojiselect(dataSelect[0].icono);
    }
  }, []);

  function estadoControl(e) {
    setEstado(e.target.checked);
  }

  useEffect(() => {
    if (accion === "Editar") {
      setEstado(!!dataSelect[0].estado);
    }
  }, []);

  return (
    <Container>
      {estadoProceso && <Spinner />}
      
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {accion === "Editar" ? "Editar Cuenta" : "Registrar nueva Cuenta"}
            </h1>
          </section>
          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit(editar)}>
          <section>
            <div>
              <label htmlFor="saldo" className="label">
                <br />
                Saldo:
                <br />
                <br />
              </label>

              <InputNumber
                defaultValue={dataSelect[0].saldo_actual}
                register={register}
                placeholder="Saldo actual"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>

            <div>
              <br />
              <ContentTitle>
                <input
                  readOnly
                  value={emojiselect}
                  type="text"
                  onClick={() => setShowPicker(!showPicker)}
                />
                <span>Icono</span>
              </ContentTitle>
              {showPicker && (
                <ContainerEmojiPicker>
                  <Emojipicker onEmojiClick={onEmojiClick} />
                </ContainerEmojiPicker>
              )}
            </div>

            <div>
              <label htmlFor="tipo" className="label">
                <br />
                Tipo Cuenta:
                <br />
                <br />
              </label>

              <InputText
                defaultValue={dataSelect[0].tipo_cuenta}
                register={register}
                placeholder="Tipo de cuenta"
                errors={errors}
                name="tipo_cuenta"
              />
            </div>

            <div>
              <span>{<v.iconocheck />}</span>
              <label>Activa:</label>
              <Switch
                onChange={estadoControl}
                checked={estado}
                color="warning"
              />
            </div>

            <div className="btnguardarContent">
              <Btnsave
                icono={<v.iconoguardar />}
                titulo="Guardar"
                bgcolor="#DAC1FF"
              />
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }

      span {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }

  input,
  select {
    border: none;
    outline: none;
    background: transparent;
    padding: 8px;
    font-size: 14px;
  }
`;

const ContainerEmojiPicker = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
