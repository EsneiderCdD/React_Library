// 🧠 Los eventos disparan actualizaciones de estado.
// setState no actualiza de inmediato (es asincrónico).
// Ideal para clicks, toggles, contadores, cambios de visualización.
// 🔁 Eventos actualizan estado con setState
// ⚠️ setState es asincrónico: usar prev => ... si dependés del valor anterior
// 🚦 El estado controla lo que se ve, no el evento directamente


import { useState } from "react";

const EventoEstado = () => {
  const [activo, setActivo] = useState(false);

  const toggleEstado = () => {
    setActivo(prev => !prev);
  };

  return (
    <div>
      <h2>Actualizar estado desde evento</h2>
      <button onClick={toggleEstado}>
        {activo ? "Desactivar" : "Activar"}
      </button>
      <p>Estado actual: {activo ? "Activo ✅" : "Inactivo ❌"}</p>
    </div>
  );
};

export default EventoEstado;
