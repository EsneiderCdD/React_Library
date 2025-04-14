// 🧠 Composición de eventos: dividir la lógica de un evento en funciones reutilizables
// Mejora claridad, facilita testing y separación de responsabilidades

import { useState } from "react";

const EventoComposicion = () => {
  const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");

  const validarNombre = () => {
    if (!nombre.trim()) {
      alert("Por favor, escribe un nombre");
      return false;
    }
    return true;
  };

  const generarSaludo = () => {
    setSaludo(`Hola, ${nombre}!`);
  };

  const logAccion = () => {
    console.log("Saludo generado para:", nombre);
  };

  const handleClick = () => {
    if (!validarNombre()) return;
    generarSaludo();
    logAccion();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        Saludar
      </button>
      <p>{saludo}</p>
    </div>
  );
};

export default EventoComposicion;
