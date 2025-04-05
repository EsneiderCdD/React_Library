{/*En React, el estado es inmutable directamente. No se modifica como una variable normal con =.
Para modificarlo, siempre usamos la función actualizadora que nos da useState. */}

// ActualizarEstado.jsx
import { useState } from "react";

const ActualizarEstado = () => {
  const [nombre, setNombre] = useState("Esneider");

  const cambiarNombre = () => {
    setNombre("Coder del Futuro 🚀");
  };

  return (
    <div style={{ padding: "16px", border: "2px dashed #ccc", borderRadius: "8px" }}>
      <h2>Actualizar Estado con Eventos</h2>
      <p>Nombre actual: <strong>{nombre}</strong></p>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
};

export default ActualizarEstado;
