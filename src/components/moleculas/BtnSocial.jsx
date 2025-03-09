export function SocialIcon({ funcion, icono: Icon }) {
  return (
    <a
      onClick={funcion}
      className="social-icon"
    >
       <Icon size={20} />
    </a>
  );
}


