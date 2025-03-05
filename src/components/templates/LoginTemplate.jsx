import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { ButtonLogin } from "../buttons/ButtonLogin";
import {useAuthStore} from "../../store/AuthStore";

export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
  {/* Imagen de fondo */}
  <div className="containerLogin hidden md:block bg-cover bg-center min-h-screen"></div>

  {/* Formulario de Login */}
  <div className="flex flex-col items-center justify-center text-center py-12 px-6 sm:px-12 bg-gray-900">
    <h1 className="text-5xl sm:text-6xl text-green-200 font-extrabold mb-8 drop-shadow-lg flex items-center">
      EcoControl <div className="logo ml-2"></div>
    </h1>

    <p className="text-lg sm:text-2xl text-white mb-8 opacity-90">
      Controla tus gastos e ingresos de manera fácil y eficiente 💵
    </p>

    <ButtonLogin
      icono={<FaGoogle />}
      titulo="Iniciar sesión con Google"
      clase="bg-red-500 text-white hover:bg-red-700 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 mb-4"
      funcion={signInWithGoogle}
    />
    <ButtonLogin
      icono={<FaGithub />}
      titulo="Iniciar sesión con GitHub"
      clase="bg-gray-600 text-white hover:bg-gray-700 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 mb-4"
    />
    <ButtonLogin
      icono={<FaDiscord />}
      titulo="Iniciar sesión con Discord"
      clase="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    />

    <p className="text-lg text-white mt-8 opacity-80">
      ¿No tienes una cuenta?{" "}
      <a href="#" className="text-green-200 hover:text-green-400 underline">
        Regístrate
      </a>
    </p>
  </div>
</div>

  );
}
