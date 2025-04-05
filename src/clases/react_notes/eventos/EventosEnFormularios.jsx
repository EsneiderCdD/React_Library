// EventosEnFormularios.jsx
import { useState } from "react";

const EventosEnFormularios = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre} | Correo: ${correo}`);
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="ejemplo@email.com"
            style={{ marginLeft: "8px" }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EventosEnFormularios;
