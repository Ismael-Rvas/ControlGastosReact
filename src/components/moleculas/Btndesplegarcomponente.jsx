import React, { useState } from "react";
import styled from "styled-components";
import { v } from "../../index";

export function BtndesplegableComponente({ children, bgcolor, textcolor }) {
  // Estado para controlar si el desplegable está abierto
  const [isOpen, setIsOpen] = useState(false);

  // Alternar el estado de isOpen (abierto o cerrado)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón para abrir o cerrar el desplegable */}
      <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={toggleDropdown}>
        <span className="containerText">Mostrar/ocultar contenido</span>
      </Container>

      {/* Solo mostramos el contenido cuando isOpen es true */}
      {isOpen && (
        <DropdownContent>
          {children} {/* Aquí se renderiza el componente o contenido cuando está abierto */}
        </DropdownContent>
      )}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$textcolor};
  font-weight: 500;
  font-size: 23px;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: #fff;
  }
`;

const DropdownContent = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
