// 📌 ¿Para qué sirve?
// Para calcular un valor a partir de props o estados existentes, en vez de almacenarlo como estado separado.

import { useState } from "react";

const DerivedState = ({ precioBase }) => {
  const [cantidad, setCantidad] = useState(1);

  // Estado derivado: no se guarda, se calcula
  const precioFinal = precioBase * cantidad;

  return (
    <div>
      <h2>🧪 Ejemplo: DerivedState</h2>
      <p>Precio base: ${precioBase}</p>
      <p>Cantidad: {cantidad}</p>
      <p>Total: ${precioFinal}</p>
      <button onClick={() => setCantidad((prev) => prev + 1)}>Agregar uno más</button>
    </div>
  );
};

export default DerivedState;
