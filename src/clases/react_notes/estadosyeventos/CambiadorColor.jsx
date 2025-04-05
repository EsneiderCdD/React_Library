// CambiadorColor.jsx
import { useState } from "react";

const CambiadorColor = () => {
  const [color, setColor] = useState("white");

  const colores = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#845EC2"];

  const cambiarColor = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "40px",
        borderRadius: "10px",
        textAlign: "center",
        transition: "background-color 0.5s",
      }}
    >
      <h2>¡Haz clic para cambiar el color de fondo!</h2>
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
};

export default CambiadorColor;