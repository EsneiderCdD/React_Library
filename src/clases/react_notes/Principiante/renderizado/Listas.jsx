
// 📌📌📌📌📌 Listas 📌📌📌📌📌

// En React, renderizar una lista significa convertir un array de datos en una colección de elementos visuales JSX (por ejemplo, li, div, o componentes).
// La forma más común de hacerlo es usando el método .map() de JavaScript. Este método recorre el array y devuelve una estructura JSX por cada elemento, lo que React convierte en algo visible en la pantalla.
// .map():
// No modifica el array original
// Devuelve un nuevo array con los resultados de aplicar una función a cada elemento

function ListaConMap() {
  const nombres = ['Ada', 'Grace', 'Linus', 'Alan'];

  return (
    <div>
      <h1>👥 Lista de personas</h1>

      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>👤 {nombre}</li>
        ))}
      </ul>
    </div>
  );
}

// ⚠️ Consideraciones importantes
// Siempre necesitás una key
// No uses map directamente sobre objetos sin transformarlos antes a un array.

const productoss = [
  { id: 1, nombre: 'Café', precio: 5 },
  { id: 2, nombre: 'Té', precio: 3 },
];

{productoss.map(p => (
  <li key={p.id}>
    {p.nombre} - ${p.precio}
  </li>
))}

// Café - $5
// Té - $3


// Usá index como key solo si se cumplen TODAS estas condiciones:
// 🔁 El array nunca cambia de orden.
// ➕➖ Los elementos no se agregan ni eliminan.
// 🧠 Los elementos no tienen estado interno (inputs, toggles, animaciones, etc.).
// 🧱 El contenido es estático o puramente visual (por ejemplo, una tabla de solo lectura).


// Una key es un identificador especial que React utiliza para distinguir entre los elementos de una lista cuando se renderizan dinámicamente con .map(). Ayuda a React a saber qué cambió, qué se agregó y qué se eliminó sin tener que destruir y reconstruir toda la lista en el DOM.

<ul>
  {frutas.map((fruta, index) => (
    <li key={index}>{fruta}</li>
  ))}
</ul>
//Pero ¡ojo! Esto solo es seguro si la lista es estática, como vimos antes.

const rutas = [
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Banana' },
  { id: 3, nombre: 'Pera' }
];

<ul>
  {frutas.map((fruta) => (
    <li key={fruta.id}>{fruta.nombre}</li>
  ))}
</ul>
// ✅ ¡Perfecto! Ahora React puede diferenciar cada <li> aunque cambien de orden o se eliminen.
// ❌ Error común: usar el índice como key en listas dinámicas

{tareas.map((tarea, index) => (
  <li key={index}>{tarea.texto}</li>
))}


// ejemplo
const ListaConKeys = () => {
  const libros = [
    { id: 'a1', titulo: 'React Básico' },
    { id: 'a2', titulo: 'JavaScript Moderno' },
    { id: 'a3', titulo: 'CSS en Profundidad' }
  ];

  return (
    <ul>
      {libros.map((libro) => (
        <li key={libro.id}>{libro.titulo}</li>
      ))}
    </ul>
  );
};

//Ultimo ejemplo// Lista simple con .map()
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

// // 📌📌📌📌📌 Listas Condicional Vacia 📌📌📌📌📌
// Mostrar un mensaje o contenido alternativo cuando la lista está vacía es fundamental para la experiencia de usuario (UX).

const ListaCondicionalVacia = () => {
  const [usuarios, setUsuarios] = useState([]);

  return (
    <div>
      <h2>Usuarios Registrados</h2>

      {usuarios.length === 0 ? (
        <p>No hay usuarios aún.</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nombre}</li>
          ))}
        </ul>
      )}

      <button
        onClick={() =>
          setUsuarios([
            { id: 1, nombre: 'Lucía' },
            { id: 2, nombre: 'Marcos' }
          ])
        }
      >
        Cargar Usuarios
      </button>
    </div>
  );
};




// Analiza el siguiente ejemplo sobre 📌📌📌 LISTA RENDERIZADO CONDICONAL  📌📌📌

import React, { useState } from 'react';

const ListaRenderizadoCondicional = () => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = () => {
    setProductos([
      { id: 1, nombre: 'Laptop' },
      { id: 2, nombre: 'Mouse' },
      { id: 3, nombre: 'Teclado' }
    ]);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      {productos.length > 0 && (
        <ul>
          {productos.map((p) => (
            <li key={p.id}>{p.nombre}</li>
          ))}
        </ul>
      )}

      <button onClick={cargarProductos}>Cargar Productos</button>
    </div>
  );
};


