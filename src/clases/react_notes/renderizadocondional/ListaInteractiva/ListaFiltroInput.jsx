import { useState } from "react";

const ListaFiltroInput = () => {
  const [busqueda, setBusqueda] = useState("");
  const [productos] = useState([
    "Laptop",
    "Teclado",
    "Mouse",
    "Pantalla",
    "Silla",
    "Auriculares"
  ]);

  const productosFiltrados = productos.filter((item) =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Filtrar Productos</h2>

      <input
        type="text"
        placeholder="Escribe para filtrar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: "8px", width: "60%", marginBottom: "20px" }}
      />

      <ul>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((item, index) => (
            <li key={index}>🛒 {item}</li>
          ))
        ) : (
          <p>📭 No se encontraron productos</p>
        )}
      </ul>
    </div>
  );
};

export default ListaFiltroInput;
