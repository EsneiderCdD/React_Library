// 🧠 ¿Qué hace?
// Muestra dos formas de actualizar el estado: una con riesgo y otra segura.
// Enseña por qué es mejor usar la versión basada en función cuando se depende del valor anterior.

import { useState } from "react";

const StateUpdate = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar (riesgo)</button>
      <button onClick={() => setContador(prev => prev + 1)}>Sumar (seguro)</button>
    </div>
  );
};

export default StateUpdate;
