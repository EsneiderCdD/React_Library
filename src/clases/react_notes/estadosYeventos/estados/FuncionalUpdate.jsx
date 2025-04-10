// 📌 ¿Para qué sirve?
// Para actualizar el estado usando su valor anterior de forma segura y confiable.

import { useState } from "react";

const FunctionalUpdates = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    // ✅ forma correcta: accede al valor más reciente
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <div>
      <h2>🧪 Ejemplo: FunctionalUpdates</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default FunctionalUpdates;
