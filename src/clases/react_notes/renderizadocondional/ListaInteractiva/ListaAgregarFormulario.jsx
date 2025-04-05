import { useState } from "react";

const ListaAgregarFormulario = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React" },
    { id: 2, texto: "Practicar ejercicios" }
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;

    const nueva = {
      id: Date.now(),
      texto: nuevaTarea
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🆕 Lista con Formulario de Agregado</h2>

      <form onSubmit={agregarTarea} style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>✅ {tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAgregarFormulario;
