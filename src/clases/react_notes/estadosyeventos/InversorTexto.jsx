import { useState } from "react";

const InversorTexto = () => {
  const [texto, setTexto] = useState("");

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  const invertirTexto = (str) => {
    return str.split("").reverse().join("");
  };

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <h2>🔁 Inversor de Texto</h2>
      <input
        type="text"
        value={texto}
        onChange={manejarCambio}
        placeholder="Escribe algo..."
        style={{ padding: "8px", fontSize: "16px", width: "100%" }}
      />
      <p>🔄 Invertido: <strong>{invertirTexto(texto)}</strong></p>
    </div>
  );
};

export default InversorTexto;
