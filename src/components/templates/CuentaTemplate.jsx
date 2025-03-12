import { useState, useEffect } from "react";
import styled from "styled-components";
import { v } from "../../index";
import { Header, UserAuth } from "../../index";
import { useCuentaStore, useUsuariosStore } from "../../index";
import { useQuery } from "@tanstack/react-query";
export function CuentaTemplate() {
  const { idusuario } = useUsuariosStore();
  const { datacuentas, mostrarCuentas } = useCuentaStore();
  const [state, setState] = useState(false);
  const { user } = UserAuth();
  useQuery({
    queryKey: ["mostrar cuentas", idusuario],
    queryFn: () => mostrarCuentas({ idusuario }),
    refetchOnWindowFocus: false,
  });
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area2">
        <h1>{datacuentas?.descripcion}</h1>
        <ContentCard>
          {datacuentas && (
            <CardContainer>
              <CardFlipper>
                <CardFront>
                  <CardHeader>
                    <h2>{user.name}</h2>
                    <img src={v.logo} className="logoWallet" />
                  </CardHeader>
                  <CardNumber>{datacuentas?.idusuario}</CardNumber>
                  <CardFooter>
                    <span>
                      Cuenta de {datacuentas?.tipo_cuenta} {datacuentas?.icono}
                    </span>
                    <span
                      className={datacuentas?.estado ? "activa" : "desactivada"}
                    ></span>
                  </CardFooter>
                </CardFront>

                <CardBack>
                <CardBackHeading>Saldo actual:</CardBackHeading>
                <CardBackSpan>{datacuentas?.saldo_actual} €</CardBackSpan>
                </CardBack>
              </CardFlipper>
            </CardContainer>
          )}
        </ContentCard>
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
    "area2" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 50px;
    }
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 350px;
  height: 200px;
  perspective: 1000px; /* Añadido para habilitar el efecto 3D */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFlipper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.2s ease-in-out;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 15px;
  background-color: #f5b947;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 15px;
  background-color: #f5b947;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardBackHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff; 
  text-align: center;
`;

const CardBackSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: #ffffcc; 
  text-align: center;
  display: block; 
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;

    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const CardNumber = styled.div`
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  .activa {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00ff00;
  }

  .desactivada {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ff0000;
  }
`;
