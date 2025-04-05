import { useState } from "react";

const ListaVistaAlterna = () => {
  const [vistaTabla, setVistaTabla] = useState(false);

  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Teclado", precio: 40 },
    { id: 3, nombre: "Mouse", precio: 25 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔀 Vista Alterna de Productos</h2>

      <button
        onClick={() => setVistaTabla(!vistaTabla)}
        style={{ marginBottom: "20px" }}
      >
        Cambiar a vista {vistaTabla ? "Lista" : "Tabla"}
      </button>

      {vistaTabla ? (
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio ($)</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul>
          {productos.map((prod) => (
            <li key={prod.id}>
              💻 {prod.nombre} - ${prod.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaVistaAlterna;
