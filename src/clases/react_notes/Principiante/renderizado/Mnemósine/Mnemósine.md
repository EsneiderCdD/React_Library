<!-- 1. CategoriasYProductos.jsx
🧠 Lista dentro de otra lista (listas anidadas)
Renderiza una lista de categorías, y dentro de cada una, los productos asociados.

jsx
Copiar
Editar
import { useState } from "react";

export default function CategoriasYProductos() {
  const [categorias] = useState([
    {
      nombre: "Bebidas",
      productos: ["Café", "Té", "Jugo"]
    },
    {
      nombre: "Comidas",
      productos: ["Hamburguesa", "Pizza"]
    }
  ]);

  return (
    <div>
      {categorias.map((cat, i) => (
        <div key={i}>
          <h3>{cat.nombre}</h3>
          <ul>
            {cat.productos.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
🧩 Este ejercicio entrena cómo navegar estructuras más profundas y renderizar listas dentro de listas. Ideal para datos jerárquicos.

2. GaleriaDeImagenes.jsx
🧠 .map() con imágenes (tipos de datos visuales)
Renderiza una galería de miniaturas a partir de una lista de URLs de imágenes.

jsx
Copiar
Editar
import { useState } from "react";

export default function GaleriaDeImagenes() {
  const [imagenes] = useState([
    "https://via.placeholder.com/100x100?text=1",
    "https://via.placeholder.com/100x100?text=2",
    "https://via.placeholder.com/100x100?text=3"
  ]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {imagenes.map((url, i) => (
        <img key={i} src={url} alt={`Imagen ${i + 1}`} />
      ))}
    </div>
  );
}
🎨 Esto demuestra cómo .map() puede ser usado para generar componentes visuales dinámicos como imágenes, íconos, etc.

3. PreguntasFrecuentes.jsx
🧠 Renderizado condicional por elemento individual (toggle por ítem)
Lista de preguntas, al hacer clic en una se muestra su respuesta. Usa useState para recordar cuál está abierta.

jsx
Copiar
Editar
import { useState } from "react";

const datos = [
  { id: 1, pregunta: "¿Qué es React?", respuesta: "Una biblioteca de JavaScript." },
  { id: 2, pregunta: "¿Qué es un componente?", respuesta: "Una función que devuelve JSX." }
];

export default function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState(null);

  return (
    <div>
      {datos.map((item) => (
        <div key={item.id}>
          <p onClick={() => setAbierta(abierta === item.id ? null : item.id)}>
            <strong>{item.pregunta}</strong>
          </p>
          {abierta === item.id && <p>{item.respuesta}</p>}
        </div>
      ))}
    </div>
  );
}
🤓 Aquí practicamos un patrón común de UX: abrir/cerrar contenido, gestionado con estados y condicionales por item.

4. ListaDeComponentes.jsx
🧠 .map() que renderiza componentes personalizados
Renderiza una lista donde cada ítem es un componente React con props distintas.

jsx
Copiar
Editar
function Usuario({ nombre, edad }) {
  return <li>{nombre} tiene {edad} años</li>;
}

export default function ListaDeComponentes() {
  const usuarios = [
    { id: 1, nombre: "Ana", edad: 23 },
    { id: 2, nombre: "Luis", edad: 30 }
  ];

  return (
    <ul>
      {usuarios.map((u) => (
        <Usuario key={u.id} nombre={u.nombre} edad={u.edad} />
      ))}
    </ul>
  );
}
🧩 Usar .map() para renderizar componentes nos abre las puertas a arquitecturas más limpias y reutilizables.

5. FiltrarPorCategoria.jsx
🧠 Renderizar lista filtrada por categoría (condición + lista)
Renderiza productos solo si coinciden con la categoría activa. Usa selectores para cambiar.

jsx
Copiar
Editar
import { useState } from "react";

const productos = [
  { id: 1, nombre: "Pan", categoria: "Comida" },
  { id: 2, nombre: "Coca-Cola", categoria: "Bebida" },
  { id: 3, nombre: "Agua", categoria: "Bebida" }
];

export default function FiltrarPorCategoria() {
  const [categoria, setCategoria] = useState("Todas");

  const filtrados =
    categoria === "Todas"
      ? productos
      : productos.filter(p => p.categoria === categoria);

  return (
    <div>
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Comida">Comida</option>
        <option value="Bebida">Bebida</option>
      </select>

      <ul>
        {filtrados.map(p => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
🔄 Este ejercicio introduce filtrado dinámico, aplicando todo: estado, condicional, listas, selectores.
 -->
