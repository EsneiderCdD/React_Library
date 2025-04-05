import { useState, useEffect } from "react";

const ListaEstadosSistema = () => {
  const [estado, setEstado] = useState("loading"); // "loading", "error", "vacio", "ok"
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const resultado = Math.floor(Math.random() * 4); // Simula distintas respuestas
      switch (resultado) {
        case 0:
          setEstado("loading");
          break;
        case 1:
          setEstado("error");
          break;
        case 2:
          setEstado("vacio");
          setUsuarios([]);
          break;
        case 3:
        default:
          setEstado("ok");
          setUsuarios([
            { id: 1, nombre: "Alice" },
            { id: 2, nombre: "Bob" },
            { id: 3, nombre: "Charlie" }
          ]);
          break;
      }
    }, 1500);
  }, []);

  if (estado === "loading") return <p>⏳ Cargando usuarios...</p>;
  if (estado === "error") return <p>❌ Error al cargar los datos.</p>;
  if (estado === "vacio") return <p>📭 No hay usuarios disponibles.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Usuarios cargados correctamente</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>✅ {user.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEstadosSistema;
