import { useState } from "react";

const productosIniciales = [
  { id: 1, nombre: "Camisa", precio: 25 },
  { id: 2, nombre: "Pantalón", precio: 40 },
  { id: 3, nombre: "Zapatos", precio: 60 },
];

const ListaBotonEliminar = () => {
  const [productos, setProductos] = useState(productosIniciales);

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((item) => item.id !== id);
    setProductos(nuevosProductos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Productos con Eliminar</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((item) => (
          <li key={item.id}>
            🛍️ {item.nombre} - ${item.precio}
            <button
              onClick={() => eliminarProducto(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaBotonEliminar;
