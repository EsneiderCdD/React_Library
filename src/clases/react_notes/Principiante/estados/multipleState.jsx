import { useState } from "react";

const MultipleVsGroupedState = () => {
  // ✔️ Caso A: Estados separados
  const [nombre, setNombre] = useState("Ana");
  const [email, setEmail] = useState("ana@example.com");

  // ✔️ Caso B: Estado agrupado
  const [tarea, setTarea] = useState({
    titulo: "Aprender React",
    completada: false,
  });

  return (
    <div>
      <h3>Ejemplo A - Estado separado</h3>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      <button onClick={() => setNombre("Luis")}>Cambiar nombre</button>

      <hr />

      <h3>Ejemplo B - Estado agrupado</h3>
      <p>{tarea.titulo} - {tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</p>
      <button onClick={() => setTarea(prev => ({ ...prev, completada: true }))}>
        Marcar como completada
      </button>
    </div>
  );
};

export default MultipleVsGroupedState;
