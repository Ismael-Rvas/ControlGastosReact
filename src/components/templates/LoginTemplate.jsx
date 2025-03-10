import { v, useAuthStore } from "../../index";
import "./loginRegister.css";
import { useState } from "react";
import { SocialIcon } from "../moleculas/BtnSocial";

export function LoginTemplate() {
  const { signInWithGoogle } = useAuthStore();
  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUp = () => setSignUpMode(true);
  const handleSignIn = () => setSignUpMode(false);

  return (
    <div className={`containerlogin ${signUpMode ? "sign-up-mode" : ""}`}>
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
              <SocialIcon icono={v.google} funcion={signInWithGoogle}/>
              <SocialIcon icono={v.discord} />
              <SocialIcon icono={v.github} />
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
            <h3>¿Nuevo aquí?</h3>
            <p>
              ¡Únete a nuestra comunidad y comienza a disfrutar de todos los beneficios! Regístrate ahora y descubre como organizar tu dinero de manera eficiente. 
            </p>
            <button className="btn transparent" onClick={handleSignUp}>
              Inscribirse
            </button>
          </div>
          <img src={v.reportes} className="image" alt="Reportes" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>¿Uno de nosotros?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignIn}>
              Iniciar sesión
            </button>
          </div>
          <img src={v.billetera} className="image" alt="Billetera"  />
        </div>
      </div>
    </div>
  );
}


