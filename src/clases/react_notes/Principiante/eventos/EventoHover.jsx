// 🧠 Eventos del mouse: onMouseEnter/onMouseLeave permiten detectar
// cuando el puntero entra/sale de un elemento. Ideal para tooltips, efectos, etc.
// 🖱️ onMouseEnter/onMouseLeave detectan entrada/salida del puntero
// 🧠 onMouseOver incluye también elementos hijos (menos controlado)
// ⚠️ En móviles no funcionan: no hay cursor


import { useState } from "react";

const EventoHover = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "300px",
        height: "150px",
        backgroundColor: hover ? "#cfe2ff" : "#f8d7da",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        transition: "all 0.3s ease"
      }}
    >
      {hover ? "¡Estás encima! 🖱️" : "Pasa el mouse por aquí"}
    </div>
  );
};

export default EventoHover;
