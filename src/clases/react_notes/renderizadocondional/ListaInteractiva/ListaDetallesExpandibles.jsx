import { useState } from "react";

const ListaDetallesExpandibles = () => {
  const [detalleActivo, setDetalleActivo] = useState(null);

  const productos = [
    { id: 1, nombre: "Monitor", precio: 300, descripcion: "27 pulgadas, Full HD" },
    { id: 2, nombre: "Auriculares", precio: 80, descripcion: "Cancelación de ruido activa" },
    { id: 3, nombre: "Impresora", precio: 150, descripcion: "Multifuncional con WiFi" }
  ];

  const toggleDetalle = (id) => {
    setDetalleActivo(detalleActivo === id ? null : id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Lista con Detalles Expandibles</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((prod) => (
          <li key={prod.id} style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{prod.nombre}</strong>
              <button onClick={() => toggleDetalle(prod.id)}>
                {detalleActivo === prod.id ? "Ocultar" : "Ver más"}
              </button>
            </div>

            {detalleActivo === prod.id && (
              <div style={{ marginTop: "10px" }}>
                <p>💲 Precio: ${prod.precio}</p>
                <p>📌 Descripción: {prod.descripcion}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDetallesExpandibles;
