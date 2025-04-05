// EventosBasicos.jsx
import { useState } from "react";

const EventosBasicos = () => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");

  const manejarClick = () => {
    setMensaje("¡Hiciste clic en el botón! 🚀");
  };

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); // evita que recargue la página
    setMensaje(`Formulario enviado. Hola, ${nombre}! 😄`);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2>Eventos Básicos</h2>

      <button onClick={manejarClick}>Haz clic aquí</button>

      <form onSubmit={manejarEnvio} style={{ marginTop: "12px" }}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={manejarCambio}
        />
        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default EventosBasicos;
