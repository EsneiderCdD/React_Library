
// 📌 ¿Para qué sirve?
// Este patrón permite pasarle una función a useState que calcule el estado inicial solo una vez.
// Es útil cuando esa función es costosa, accede al localStorage, o genera datos que no deben recalcularse en cada render.

// 🧠 ¿Por qué no usar directamente la función como argumento?
// Si hacés esto:
//    const [valor, setValor] = useState(calcularValorLento()); // ❌ se ejecuta SIEMPRE
// React ejecuta `calcularValorLento()` cada vez que el componente se renderiza, aunque ya no sea necesario.

// ✅ Solución:
//    const [valor, setValor] = useState(() => calcularValorLento()); // ✅ se ejecuta SOLO UNA VEZ
// React llama la función una sola vez (en el primer render), guarda el resultado, y no la vuelve a ejecutar.

import { useState } from "react";

// 🔧 Esta función simula un cálculo costoso (puede ser obtener datos, leer del localStorage, etc)
const calcularInicial = () => {
  console.log("📦 Generando estado inicial...");
  return Math.floor(Math.random() * 1000);
};

const InitialStateFunction = () => {
  const [numero, setNumero] = useState(() => calcularInicial());

  return (
    <div>
      <h2>🧪 Ejemplo: InitialStateFunction</h2>
      <p>Número aleatorio inicial: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
    </div>
  );
};

export default InitialStateFunction;

