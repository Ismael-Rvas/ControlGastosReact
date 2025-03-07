import { useState } from "react";

export function ConfiguracionTemplate() {
  const { datausuarios, editartemamonedauser } = useUsuariosStore();
  const [select, setSelect] = useState([]);
  const [selectTema, setSelecttema] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);
  //pais moneda
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = "🐷 " + moneda + " " + pais;
  //tema
  const iconobd = datausuarios.tema === "0" ? "🌞" : "🌚";
  const temabd = datausuarios.tema === "0" ? "light" : "dark";
  const temainicial = selectTema.tema ? selectTema.tema : temabd;
  const iconoinicial = selectTema.icono ? selectTema.icono : iconobd;
  const temaSeleccionado = iconoinicial + " " + temainicial;
  //funcion editar
  const editar = async () => {
    const themeElegido = selectTema.descripcion === "light" ? "0" : "1";
    const p = {
      tema: themeElegido,
      moneda: moneda,
      pais: pais,
      id: datausuarios.id,
    };
    await editartemamonedauser(p);
  };
  return (
    <div className="min-h-screen p-4 w-full" style={{ background: theme.bgtotal, color: theme.text, display: 'grid', gridTemplate: '"header" 100px "area2" auto' }}>
    
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area2">
        <h1>AJUSTES</h1>
        <div className="card">
          <span>Moneda:</span>
          <Selector
            state={stateListaPaises}
            color={v.colorselector}
            texto1={paisSeleccionado}
            funcion={() => setStateListaPaises(!stateListaPaises)}
          />
          {stateListaPaises && (
            <ListaPaises
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </div>
        <div className="card">
          <span>Tema:</span>
          <Selector
            texto1={temaSeleccionado}
            color={v.colorselector}
            state={stateListaTemas}
            funcion={() => setStateListaTemas(!stateListaTemas)}
          ></Selector>
          {stateListaTemas && (
            <ListaGenerica bottom="88%"
              data={TemasData}
              setState={() => setStateListaTemas(!stateListaTemas)}
              funcion={setSelecttema}
            />
          )}
        </div>
        <Btnsave
          titulo="Guardar"
          bgcolor={v.colorselector}
          icono={<v.iconoguardar />}
          funcion={editar}
        />
        <CardEliminarData/>
      </section>
    </div>
  );
}