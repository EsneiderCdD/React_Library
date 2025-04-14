// 🧠 Un componente puede manejar múltiples eventos simultáneamente.
// Ideal para interacciones complejas, accesibilidad o UX enriquecida.
// 🎯 Se pueden combinar varios eventos en un solo componente
// 🧩 Útil para UX compleja, animaciones, accesibilidad
// ⚙️ Cada evento debe tener su propia función para claridad


import { useState } from "react";

const EventoMultiple = () => {
  const [hovered, setHovered] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "1rem",
        backgroundColor: hovered ? "#d1e7dd" : "#f8d7da",
        cursor: "pointer",
        borderRadius: "8px",
        textAlign: "center"
      }}
    >
      <h2>Área Interactiva</h2>
      <p>{hovered ? "Estás encima 👀" : "Pasa el mouse por aquí"}</p>
      <p>Clicks registrados: {clicks}</p>
    </div>
  );
};

export default EventoMultiple;
