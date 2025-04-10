// 🧠 ¿Qué hace?
// Permite a React "recordar" un valor y actualizarlo cuando cambia.
// El componente se vuelve dinámico: reacciona al cambio del estado.

// 📦 Sintaxis: const [valor, setValor] = useState(valorInicial);

import { useState } from "react";

const UseStateBasic = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Click Count</h3>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default UseStateBasic;
