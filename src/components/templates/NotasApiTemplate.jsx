import { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../index";

const API_URL = "https://borrarrmaastarde-gxdw9hjm5-ismaels-projects-72fc12c2.vercel.app/api/notas";

export function NotasApiTemplate() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  const [notas, setNotas] = useState([]);
  const [error, setError] = useState(null);

  // Obtener todas las notas
  const fetchNotas = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNotas(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Crear una nueva nota
  const addNota = async (nota) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nota),
      });
      const newNota = await response.json();
      setNotas([...notas, newNota]);
    } catch (err) {
      setError(err);
    }
  };

  // Actualizar una nota
  const updateNota = async (id, updatedNota) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNota),
      });
      const result = await response.json();
      setNotas(notas.map(nota => (nota._id === id ? result : nota)));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchNotas();
  }, []);

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state, setState: () => setState(!state) }} />
      </header>
      <div className="area2">
        <h1>NotasApi</h1>
      </div>
      <main className="main">
        <NotesCard>
          {loading ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>Error al cargar notas</p>
          ) : (
            notas.map((nota) => (
              <div key={nota._id} className="note-item">
                <h3>{nota.name}</h3>
                <p>{nota.price}</p>
              </div>
            ))
          )}
        </NotesCard>
      </main>
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

const NotesCard = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 30px;
  margin-top: 50px;
  height: 100%;
  max-height: 300px;

  .note-item {
    margin-bottom: 20px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }

  .note-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .note-item p {
    font-size: 14px;
    color: #666;
  }
`;
