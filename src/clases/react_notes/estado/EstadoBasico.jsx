import { useState } from "react";

const EstadoBasico = () => {
  // 🔹 Creamos una variable de estado llamada "contador" con un valor inicial de 0.
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Estado Básico en React</h2>
      <p>Valor actual: {contador}</p>
      {/* Al hacer clic, actualizamos el estado con setContador */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default EstadoBasico;
