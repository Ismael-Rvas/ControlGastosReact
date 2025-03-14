import styled from "styled-components";
import { Carousel, Btnsave, v, Header, UserAuth} from "../../index";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
export function HomeTemplate() {
  const [state, setState] = useState(false);
  const { user } = UserAuth()
  const navigate = useNavigate();
  return (
    <Main>
      <header className="header">
        {user ? (
          <Header stateConfig={{ state, setState: () => setState(!state) }} />
        ) : (
          <ContentButton>
          <button
            onClick={() => navigate("/login")}
            className="btnlogin"
          >
            Iniciar Sesión
          </button>
          </ContentButton>
        )}
      </header>

      <Container>
        <Box>
          <Carousel />
        </Box>
        <Title>
          Bienvenido a EcoControl <br />
        </Title>
        <SubText>
          EcoControl es un proyecto de práctica, donde se busca crear una
          herramienta gratuita y sencilla para controlar gastos e ingresos.
          <br />
        </SubText>
        <ContainerAutor>
          <div className="contentImg">
            <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1740398826/d22446f5-3bb2-4385-84bd-f85a0c91ddf0_shczmg.jpg" />
          </div>
          <div className="contentDescripcion">
            <b>Ismael Rivas Cano</b>
          </div>
        </ContainerAutor>
        <ButtonContainer>
          <Btnsave
            url="https://github.com/Ismael-Rvas"
            titulo="Github"
            bgcolor="#BF94FF"
            icono={<v.iconoreact />}
          />
        </ButtonContainer>
      </Container>
    </Main>
  );
}
const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area2" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #8e8c86;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const ContainerAutor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .contentImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .contentDescripcion {
    display: flex;
    flex-direction: column;
    b {
      color: ${(props) => props.theme.text};
    }
    span {
      color: #8c8c8c;
    }
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 20px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;

const ContentButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;

  .btnlogin {
    background-color: #2ecc71;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #1abc9c;
    }
`;
