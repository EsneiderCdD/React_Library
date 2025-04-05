import { useState } from "react";

const ListaVaciaMensaje = () => {
  const [productos, setProductos] = useState([]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Inventario</h2>

      {productos.length === 0 ? (
        <p>📭 No hay productos disponibles en este momento.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {productos.map((item, index) => (
            <li key={index}>📦 {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaVaciaMensaje;
