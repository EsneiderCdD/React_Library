import { useState } from "react";

const ListaTareasCheck = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React", completada: false },
    { id: 2, texto: "Leer documentación de Vite", completada: false },
    { id: 3, texto: "Practicar ejercicios", completada: false }
  ]);

  const marcarComoCompletada = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
              marginBottom: "8px"
            }}
          >
            {tarea.texto}
            <button
              onClick={() => marcarComoCompletada(tarea.id)}
              style={{ marginLeft: "10px" }}
            >
              {tarea.completada ? "🔁 Desmarcar" : "✅ Completar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareasCheck;
