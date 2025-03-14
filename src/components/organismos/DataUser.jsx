import styled from "styled-components";
import {
  UserAuth,
  BtnCircular,
  v,
  ListaMenuDesplegable,
  DesplegableUser,
  useAuthStore,
  useAdminStore,
  fotoUser,
} from "../../index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signout } = useAuthStore();
  const [img, setUserImg] = useState(null);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const esAdmin = async () => {
      const adminStatus = await useAdminStore(); 
      setAdmin(adminStatus); 
    };
    esAdmin(); 

    const getUserPhoto = async () => {
      const img = await fotoUser(); 
      setUserImg(img); 
    };
    getUserPhoto(); 
  }, []); 

  
  const funcionXtipo = async (p) => {
   
    if (p.tipo === "cerrarsesion") {
     
      await signout();
    }
    if (p.tipo === "configuracion") {
     
      navigate("/configurar");
    }
    if (p.tipo === "perfil") {
     
       navigate("/perfil");
    }
  };
  return (
    <Container onClick={stateConfig.setState}>
      <div className="imgContainer">
        <img src={img} />
      </div>
      {admin && (
        <BtnCircular
          icono={<v.iconocorona />}
          width="25px"
          height="25px"
          bgcolor={`linear-gradient(15deg, rgba(255, 88, 58, 0.86) 9%, #f8bf5b 100%);`}
          textcolor="#ffffff"
          fontsize="11px"
          translatex="-50px"
          translatey="-12px"
        />
      )}
      <span className="nombre">{user.name}</span>
      {stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="62px"
          funcion={(p)=>funcionXtipo(p)}
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
