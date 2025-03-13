import { Header, MostrarUsuarios, SpinnerLoader } from "../../index"; 
import { useEffect, useState } from "react";
import styled from "styled-components";
export function PerfilTemplate() {
    const [usuarioData, setUsuarioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [state, setState] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await MostrarUsuarios();
                setUsuarioData(data);
            } catch (err) {
                setError("Error loading user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);
    console.log(usuarioData)

    if (loading ) {
        return <SpinnerLoader/>;
      }

    return (
        <Container>
            <header className="header">
                <Header stateConfig={{ state, setState: () => setState(!state) }} />
            </header>
            <div className="area2">
                <h1>Perfil</h1>
            </div>
            <div className="main">
            <ProfileCard>
    <div className="profile-image">
        <img
            src={usuarioData?.foto}  
            alt="Profile"
        />
    </div>
    <div className="profile-info">
        <h3>{usuarioData?.nombres}</h3>  
        <p className="location">📍 {usuarioData?.direccion}</p>
        <div className="stats">
            <div>
                <span className="label">{usuarioData?.pais}</span>
            </div>
            <div>
                <span className="label">{usuarioData?.moneda}</span>
            </div>
            <div>
                <span className="label">{usuarioData?.id}</span>
            </div>
        </div>
        <p className="description">
            {usuarioData?.descripcion}
        </p>
        <p className="description">
          Tema  {usuarioData?.tema === "1" ? "oscuro" : "claro"}
        </p>
        <a href="#" className="follow">{usuarioData?.role}</a> 
    </div>
</ProfileCard>

            </div>
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
        "area2" 70px
        "main" auto;

    .header {
        grid-area: header;
        display: flex;
        align-items: center;
    }
    .area2 {
        grid-area: area2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 140px;
    }
    .main {
        grid-area: main;
        display: flex;
        justify-content: center;
    }
`;

const ProfileCard = styled.div`
    background: white;
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 30px; 
    position: relative;
    margin-top: 50px;
    height: 100%;
    max-height: 400px; 

    .profile-image {
        position: absolute;
        top: -70px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 120px;
        display: flex;
        justify-content: center;
        z-index: 1;
    }

    .profile-image img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        animation: flotar 1.7s ease-in-out infinite alternate;
    }

    @keyframes flotar {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 10px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }

    .profile-info h3 {
        font-size: 22px;
        font-weight: bold;
        margin-top: 90px; 
        color: black;
        margin-bottom: 20px; 
    }

    .location {
        font-size: 14px;
        color: #666;
        margin-bottom: 15px; 
    }

    .stats {
        display: flex;
        justify-content: space-around;
        margin: 20px 0; 
    }

    .stats div {
        text-align: center;
    }

    .label {
        font-size: 14px; 
        color: #777;
        margin-bottom: 8px; 
    }

    .description {
        font-size: 14px;
        color: #555;
        margin: 15px 0;
    }

    .follow {
        display: inline-block;
        background: #007bff;
        color: white;
        padding: 10px 20px; 
        border-radius: 20px;
        text-decoration: none;
        font-size: 14px;
        transition: 0.3s;
        margin-top: 15px;
    }

    .follow:hover {
        background: #0056b3;
    }
`;


