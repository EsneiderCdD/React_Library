
// 📌 ¿Para qué sirve?
// Permite iniciar un estado usando una prop. Ideal cuando el componente necesita empezar con cierto valor,
// pero luego quiere tener el control completo del estado internamente (como un input editable).

import { useState } from "react";

const StateFromProps = ({ nombreInicial }) => {
  const [nombre, setNombre] = useState(nombreInicial);

  return (
    <div>
      <h2>🧪 Ejemplo: StateFromProps</h2>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Nombre: {nombre}</p>
    </div>
  );
};

export default StateFromProps;

