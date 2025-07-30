import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../App"

export function HomePage({ sidebarOpen }) {
  const { setTheme, theme } = useContext(ThemeContext);
  const [content, setContent] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(response => {
        setContent(response.data);
      })
      .catch(error => {
        setError("Hubo un error al obtener los datos.");
        console.error(error);
      });
  }, []);

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <h2>Lista de pares de criptomonedas</h2>
      <div className="grid">
        <Grid>
          {error ? (
            <h2>{error}</h2>
          ) : (
            content.map(([key, value]) => (
              <Card key={key}>
                <h3>{key}</h3>
                <p>Criptomoneda: <strong>{value.base_currency}</strong></p>
                <p>Compra/venta min: <strong>{(value.min_order_size * Math.pow(10, -value.min_order_size_scale)).toFixed(4)}</strong></p>
                <p>Estado actual: <strong>{value.status}</strong></p>
                <form method="post" action="/get-price">
                  <button type="submit" name="informacion" value={key}>
                    Más información
                  </button>
                </form>
              </Card>
            ))
          )}
        </Grid>
      </div>
    </Container>
  );
}

//#region STYLED COMPONENTS
const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.text};
  height: auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bg5};
  color: ${({ theme }) => theme.text};
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas */
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
//#endregion