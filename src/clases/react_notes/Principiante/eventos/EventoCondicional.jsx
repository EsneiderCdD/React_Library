// 🧠 Evento condicional: controlar si una acción debe ejecutarse según un estado
// Ideal para validaciones, flujos seguros, botones deshabilitados

import { useState } from "react";

const EventoCondicional = () => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = () => {
    if (!nombre.trim()) {
      alert("Por favor, escribe tu nombre");
      return;
    }
    alert(`Hola, ${nombre}!`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={!nombre.trim()}
        style={{
          marginLeft: "10px",
          backgroundColor: !nombre.trim() ? "#ccc" : "#0d6efd",
          color: "white",
          cursor: !nombre.trim() ? "not-allowed" : "pointer",
        }}
      >
        Saludar
      </button>
    </div>
  );
};

export default EventoCondicional;
