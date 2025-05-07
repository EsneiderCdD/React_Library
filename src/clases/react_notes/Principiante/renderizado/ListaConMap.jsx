import React from "react";

// Lista simple con .map()
const frutas = ["🍎 Manzana", "🍌 Banana", "🍇 Uva"];

// Lista de objetos con key única
const tareas = [
  { id: "a1", texto: "Estudiar React" },
  { id: "b2", texto: "Practicar CSS" },
  { id: "c3", texto: "Leer documentación" },
];

// Lista con componentes personalizados
const productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Mouse", precio: 20 },
  { id: 3, nombre: "Monitor", precio: 300 },
];

function Producto({ nombre, precio }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "0.5rem", margin: "0.5rem 0" }}>
      <h4>{nombre}</h4>
      <p>Precio: ${precio}</p>
    </div>
  );
}

// Filter + map
const frutasFiltradas = ["Manzana", "Banana", "Pera", "Uva", "Sandía"];

export default function RenderizadoListas() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>🔢 Lista con .map()</h2>

      <h3>Frutas simples</h3>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>

      <h3>Lista de tareas con ID</h3>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>

      <h3>Productos (con componente personalizado)</h3>
      {productos.map((item) => (
        <Producto key={item.id} {...item} />
      ))}

      <h3>Frutas filtradas que contienen "a"</h3>
      <ul>
        {frutasFiltradas
          .filter((fruta) => fruta.toLowerCase().includes("a"))
          .map((fruta, i) => (
            <li key={i}>{fruta}</li>
          ))}
      </ul>
    </div>
  );
}