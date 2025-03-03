import './App.css'
import { AuthContextProvider } from './context/AuthContent'
import {MyRoutes} from './routers/routes'

function App() {

  return (
    <>
    <AuthContextProvider>
     <MyRoutes/>
    </AuthContextProvider>
    </>
  )
}

export default App
