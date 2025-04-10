// 📌 ¿Para qué sirve?
// Permite alternar entre dos estados booleanos. Ideal para mostrar/ocultar cosas, activar/desactivar, etc.

import { useState } from "react";

const BooleanToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>🧪 Ejemplo: BooleanToggle</h2>
      <button onClick={toggleVisible}>
        {visible ? "Ocultar" : "Mostrar"} mensaje
      </button>

      {visible && <p>🎉 ¡Este es un mensaje secreto!</p>}
    </div>
  );
};

export default BooleanToggle;
