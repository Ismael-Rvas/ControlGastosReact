import "./App.css";
import { AuthContextProvider } from "./context/AuthContent";
import { MyRoutes } from "./routers/routes";
import {Sidebar } from "./components/sidebar/Sidebar";
import{MenuHambur } from "./components/MenuHambur";
import { useLocation} from "react-router-dom"
function App() {
  const { pathname } = useLocation();
  return (
    <>
      <AuthContextProvider>
        {
          pathname != "/login"?( <div className="container">
            <div className="ContentSidebar">
            <Sidebar/>
            </div>
            <div className="ContentMenuambur">
            <MenuHambur/>
            </div>
              <div className="containerRoutesBody">
                <MyRoutes />
              </div>
          </div>):(<MyRoutes />)
        }
        
       
      </AuthContextProvider>
    </>
  );
}

export default App;
