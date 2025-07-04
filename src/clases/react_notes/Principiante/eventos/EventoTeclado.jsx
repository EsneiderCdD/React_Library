// 🧠 Eventos de teclado permiten detectar teclas específicas.
// Usar event.key para capturar la tecla presionada.
// Ideal para Enter, Escape, accesibilidad o shortcuts.
// ⌨️ onKeyDown detecta teclas presionadas
// ❗ event.key es el nombre de la tecla: "Enter", "Escape", etc.
// 📍 Útil para accesibilidad, validaciones, atajos
//  Permiten que los usuarios interactúen rápidamente con la interfaz, ya sea validando formularios, reaccionando a atajos de teclado o mejorando la accesibilidad. 
// //React proporciona una forma sencilla de manejar estos eventos con onKeyDown, onKeyUp, y onKeyPress


import { useState } from "react";

const EventoTeclado = () => {
  const [mensaje, setMensaje] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setMensaje("¡Presionaste Enter!");
    } else if (event.key === "Escape") {
      setMensaje("Cancelado con Escape.");
    } else {
      setMensaje(`Tecla presionada: ${event.key}`);
    }
  };

  return (
    <div>
      <h2>Detectar teclas del teclado</h2>
      <input
        type="text"
        placeholder="Escribe algo y presiona una tecla"
        onKeyDown={handleKeyDown}
      />
      <p>{mensaje}</p>
    </div>
  );
};

export default EventoTeclado;
