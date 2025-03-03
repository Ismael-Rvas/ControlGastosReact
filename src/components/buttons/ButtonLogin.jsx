export function ButtonLogin({ icono, titulo, funcion, clase }) {
  return (
    <div >
      <button className={clase} type="submit" onClick={funcion}>
        <span className="flex items-center">
          {icono} 
          <span className="ml-2">{titulo}</span>
        </span>
      </button>
    </div>
  );
}
