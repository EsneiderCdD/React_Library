import { useState, useEffect } from "react";

// ✅ Caso 1: Inicializa con prop, pero controla internamente
const NombreEditable = ({ nombreInicial }) => {
  const [nombre, setNombre] = useState(nombreInicial);

  useEffect(() => {
    setNombre(nombreInicial);
  }, [nombreInicial]);

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem" }}>
      <h3>🧪 NombreEditable (estado interno)</h3>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <p>Nombre actual: {nombre}</p>
    </div>
  );
};

// ✅ Caso 2: Totalmente controlado desde el padre
const NombreControlado = ({ nombre, onNombreChange }) => {
  return (
    <div style={{ border: "1px solid green", padding: "1rem" }}>
      <h3>✅ NombreControlado (estado externo)</h3>
      <input value={nombre} onChange={(e) => onNombreChange(e.target.value)} />
      <p>Nombre actual: {nombre}</p>
    </div>
  );
};

export default function App() {
  const [nombre, setNombre] = useState("Carlos");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Comparación: State From Props vs Estado Controlado</h2>

      {/* Componente con estado interno que reacciona a cambios de prop inicial */}
      <NombreEditable nombreInicial={nombre} />

      {/* Componente completamente controlado */}
      <NombreControlado nombre={nombre} onNombreChange={setNombre} />

      <button onClick={() => setNombre("Ana")}>Cambiar a "Ana"</button>
      <button onClick={() => setNombre("Carlos")}>Resetear a "Carlos"</button>
    </div>
  );
}
