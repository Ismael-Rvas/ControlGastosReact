import React, { useState } from "react";
import styled from "styled-components";
import { v } from "../../index";

export function BtndesplegableComponente({ children, bgcolor, textcolor, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={toggleDropdown}>
        <span className="containerText">{title}{isOpen && <v.iconoFlechaup/> }{!isOpen && <v.iconoFlechabajo /> }</span>
      </Container>

      {isOpen && (
        <DropdownContent>
          {children} 
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
  padding: 0.9rem 2rem;
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
    background-color: rgba(75, 0, 130, 0.7);
  }
`;

const DropdownContent = styled.div`
  margin-top: 15px;
  padding: 20px;
`;
