import {
  MyRoutes,
  Sidebar,
  Device,
  Light,
  Dark,
  AuthContextProvider,
  Menuambur,
  useUsuariosStore,
  Login,
  SpinnerLoader,
} from "./index";
import { Navigate, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { styled } from "styled-components";
import { useQuery } from "@tanstack/react-query";
export const ThemeContext = createContext(null);

function App() {
  const { mostrarUsuarios, datausuarios } = useUsuariosStore();
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const theme = datausuarios?.tema === "0" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => mostrarUsuarios(),
  });


  if (isLoading ) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <h1>Error..</h1>;
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {pathname != "/login" ? (
              <Container className={sidebarOpen ? "active" : ""}>
                <div className="ContentSidebar">
                  <Sidebar
                    state={sidebarOpen}
                    setState={() => setSidebarOpen(!sidebarOpen)}
                  />
                </div>
                <div className="ContentMenuambur">
                  <Menuambur />
                </div>

                <Containerbody>
                  <MyRoutes />
                </Containerbody>
              </Container>
            ) : (
              <Login />
            )}
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.2s ease-in-out;

  .ContentSidebar {
    display: none;
  }
  .ContentMenuambur {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuambur {
      display: none;
    }
  }
`;
const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;
export default App;
