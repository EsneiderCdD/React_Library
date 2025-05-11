# 🧠 Biblioteca de Estudio: Renderizado Condicional y Listas en React

## 📌 Introducción al Renderizado en React

La **renderización** en React es el proceso mediante el cual el componente transforma datos en elementos visuales (`JSX`) para que el navegador los muestre. React es altamente dinámico: cambia lo que ves en función de los **datos y estados** que manejes.

### ¿Qué es el renderizado condicional?

Es la capacidad de **mostrar o no algo** en pantalla dependiendo de una condición. Se basa en `if`, `ternarios`, `&&`, entre otros. Esto permite controlar la experiencia del usuario: mostrar mensajes, contenidos, botones u opciones distintas según el contexto.

### ¿Qué son las listas renderizadas?

Se refiere a **generar múltiples elementos JSX a partir de un array de datos**, generalmente usando `.map()`. Esto se usa, por ejemplo, para mostrar productos, usuarios, tareas, etc.

---

## 🧩 Biblioteca Principal (Nivel Básico a Intermedio)

| Archivo                        | Tema                            | Descripción breve |
|:------------------------------|:--------------------------------|:------------------|
| `CondicionalIf.jsx`           | Renderizado con `if`            | Usar `if` fuera del JSX para decidir qué componente renderizar. Ideal cuando la lógica es más compleja. |
| `CondicionalTernario.jsx`     | Operador ternario               | Mostrar un valor u otro directamente en el JSX usando `? :`. |
| `CondicionalAND.jsx`          | Operador lógico `&&`            | Mostrar un contenido sólo si la condición es verdadera (`&&`). Es simple y elegante. |
| `ListaConMap.jsx`             | Renderizar lista con `.map()`   | Convertir un array en múltiples elementos JSX de forma dinámica. |
| `ListaConKeys.jsx`            | Keys en listas                  | Cómo darle a cada elemento un `key` único para que React maneje mejor los cambios. |
| `ListaCondicionalVacia.jsx`   | Manejo de listas vacías         | Mostrar un mensaje o actuar si la lista está vacía. (Ejemplo: "No hay elementos para mostrar") |
| `ListaRenderizadoCondicional.jsx` | Renderizado condicional de listas | Combinar condicionales y listas: mostrar lista solo si tiene elementos. |

---

## 🚀 Extras Recomendados (Intermedios, pero aptos para ahora)

| Archivo                        | Tema                            | Descripción breve |
|:------------------------------|:--------------------------------|:------------------|
| `CondicionalMultiple.jsx`     | Condicionales más complejos     | Cómo anidar múltiples ternarios o usar `switch` para renderizar varias opciones de salida. |
| `FragmentosEnListas.jsx`      | Uso de Fragmentos `<> </>`      | Evitar `div` innecesarios al renderizar múltiples elementos. Mejora el rendimiento y limpieza del DOM. |
| `ListaConComponenteInterno.jsx` | Lista que renderiza componentes | Cada elemento del array genera su propio componente interno, no sólo un `<li>`. Ideal para componentes reutilizables. |

---

## 🧠 Nivel Avanzado (📌 Referencial, para más adelante)

Estos temas requieren conocimiento profundo de componentes, patrones y optimización:

- Render Props
- Composición de componentes
- Higher Order Components (HOC)
- Lazy loading condicional de componentes
- Manejo avanzado de estados en listas dinámicas (con IDs, filtros, edición en línea, etc.)

---

