import styled from "styled-components";
import { CalendarioLineal, Header, Tabs,ContentFiltros ,Btndesplegable,ListaMenuDesplegable,DataDesplegableMovimientos,useOperaciones,} from "../../index";
import { useState } from "react";
import dayjs from "dayjs";
export function InformesTemplate() {
  const {
    setTipoMovimientos,
    colorCategoria,
    bgCategoria,
    tituloBtnDesMovimientos,
  } = useOperaciones();
  const [stateTipo, setStateTipo] = useState(false);
  const [state, setState] = useState(false);
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");
  function openTipo() {
    setStateTipo(!stateTipo);
    setState(false);
  }
  
  function cambiarTipo(p) {
    setTipoMovimientos(p);
    setStateTipo(!stateTipo);
    setState(false);
  }
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
      <ContentFiltros>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Btndesplegable
              textcolor={colorCategoria}
              bgcolor={bgCategoria}
              text={tituloBtnDesMovimientos}
              funcion={openTipo}
            />
            {stateTipo && (
              <ListaMenuDesplegable
                data={DataDesplegableMovimientos}
                top="112%"
                funcion={(p) => cambiarTipo(p)}
              />
            )}
          </div>
        </ContentFiltros>
      </section>
      <section className="area2">
        <CalendarioLineal  value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha}/>
      </section>
      <section className="main">
        <Tabs/>
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 70px
    "main" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    display: flex;
    gap:20px;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content:center;
    padding-bottom:20px;
  }
  .main {
    grid-area: main;
  }
    
`;
const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
