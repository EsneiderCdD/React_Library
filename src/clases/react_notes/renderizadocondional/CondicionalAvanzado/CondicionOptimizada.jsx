import { useState } from "react";

const Premium = () => <p>🌟 Contenido Premium</p>;
const Gratuito = () => <p>🔓 Contenido Gratuito</p>;

const CondicionOptimizada = () => {
  const [esPremium, setEsPremium] = useState(false);
  const [logueado, setLogueado] = useState(true);

  // Variable intermedia que contiene el componente a mostrar
  let contenido;

  if (!logueado) {
    contenido = <p>⛔ Debes iniciar sesión</p>;
  } else if (esPremium) {
    contenido = <Premium />;
  } else {
    contenido = <Gratuito />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Renderización Optimizada</h2>

      {/* Renderizado usando variable intermedia */}
      {contenido}

      <br /><br />
      <label>
        <input
          type="checkbox"
          checked={logueado}
          onChange={() => setLogueado(!logueado)}
        />
        Usuario Logueado
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={esPremium}
          onChange={() => setEsPremium(!esPremium)}
        />
        Usuario Premium
      </label>
    </div>
  );
};

export default CondicionOptimizada;
