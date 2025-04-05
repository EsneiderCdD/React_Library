import { useState } from "react";

const productosIniciales = [
  { id: 1, nombre: "Camisa", stock: 10 },
  { id: 2, nombre: "Pantalón", stock: 0 },
  { id: 3, nombre: "Zapatos", stock: 5 },
];

const ListaFiltrada = () => {
  const [productos] = useState(productosIniciales);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Productos Disponibles</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((item) =>
          item.stock > 0 ? (
            <li key={item.id}>
              ✅ {item.nombre} - Stock: {item.stock}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ListaFiltrada;
