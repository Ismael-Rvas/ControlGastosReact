import { v, useAuthStore } from "../../index";
import "./loginRegister.css";
import { useState } from "react";
import { SocialIcon } from "../moleculas/BtnSocial";

export function LoginTemplate() {
  const { signInWithGoogle } = useAuthStore();
  const { signInWithDiscord } = useAuthStore();
  const { signInWithGithub } = useAuthStore();
  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUp = () => setSignUpMode(true);
  const handleSignIn = () => setSignUpMode(false);

  return (
    <div className={`containerlogin ${signUpMode ? "sign-up-mode" : ""}`}>
      <img src={v.logo} className="logoright"/>
      <img src={v.logo} className="logoleft"/>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Iniciar sesión</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nombre de usuario" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">O inicia sección con</p>
            <div className="social-media">
              <SocialIcon icono={v.google} funcion={signInWithGoogle} />
              <SocialIcon icono={v.discord} funcion={signInWithDiscord} />
              <SocialIcon icono={v.github} funcion={signInWithGithub} />
            </div>
          </form>
          <form className="sign-up-form">
            <h2 className="title">Inscribirse</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nombre de usuario" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Correo electrónico" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" className="btn" value="Registrarse" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿Quieres registrarte?</h3>
            <p>
              Regístrate ahora y descubre como organizar tu dinero de manera
              eficiente.
            </p>
            <button className="btn transparent" onClick={handleSignUp}>
              Registrarse
            </button>
          </div>
          <img src={v.reportes} className="image" alt="Reportes" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>¡Logueate desde aqui!</p>
            <button className="btn transparent" onClick={handleSignIn}>
              Iniciar sesión
            </button>
          </div>
          <img src={v.billetera} className="image" alt="Billetera" />
        </div>
      </div>
    </div>
  );
}
