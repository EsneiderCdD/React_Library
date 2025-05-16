//API significa Application Programming Interface. Es una interfaz (una forma de comunicarse) entre dos sistemas.
//HTTP (HyperText Transfer Protocol) es el lenguaje en que se comunican el navegador y los servidores.

// GET	Obtener datos	Mostrar lista de usuarios
// POST	Enviar datos nuevos	Crear un nuevo comentario
// PUT	Reemplazar datos existentes	Editar el perfil de usuario
// DELETE	Eliminar un recurso	Borrar un post

// Un recurso es cualquier entidad de datos a la que accedemos vía una URL en la API: 
// https://jsonplaceholder.typicode.com/users

// JSON (JavaScript Object Notation) es el formato más común para intercambiar datos en la web.

// {
//   "id": 1,
//   "name": "Juan Pérez",
//   "email": "juanperez@email.com"
// }

// | Componente       | Rol                                       |
// | ---------------- | ----------------------------------------- |
// | React (frontend) | Quiere datos                              |
// | `fetch()`        | Hace una solicitud HTTP a una URL         |
// | API              | Procesa la solicitud y devuelve los datos |
// | JSON             | Es el formato en que vienen esos datos    |
// | React            | Muestra esos datos al usuario             |


// 🔧 MÓDULO 2: fetch() en JavaScript puro -> para entender cómo se hace una solicitud HTTP

// fetch() es una función nativa de JavaScript para hacer solicitudes HTTP desde el navegador.
// Es parte del estándar web moderno. No necesitas instalar nada.
fetch(URL)
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos);
  });


// 🔧
fetch('https://jsonplaceholder.typicode.com/posts')
// Hace una solicitud GET al endpoint.
// Es asíncrono: el navegador no se detiene mientras espera la respuesta.
.then(respuesta => respuesta.json())
//fetch devuelve una promesa con un objeto Response
//.json() también devuelve una promesa que convierte el cuerpo de la respuesta en un objeto JavaScript (parsea el JSON).
.then(datos => {
  console.log(datos);
});
// La promesa se resuelve con los datos JSON.


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => { });
  
// Aquí, res significa response (respuesta del servidor).
// Es un objeto que representa todo el paquete de la respuesta, no solo los datos.
// | Propiedad     | ¿Qué es?                                                |
// | ------------- | ------------------------------------------------------- |
// | `res.ok`      | `true` si la respuesta fue exitosa (código 200–299)     |
// | `res.status`  | El código HTTP: 200 (OK), 404 (no encontrado), etc.     |
// | `res.headers` | Los encabezados HTTP de la respuesta                    |
// | `res.json()`  | Método para **convertir el cuerpo** (body) en un objeto |

// .then(res => res.json())
// dame el contenido del cuerpo y conviértelo a objeto JavaScript

// ¿Qué es throw new Error(...)?
// Esto lanza un error manualmente para detener el flujo y que pase al .catch().
// Error es una clase nativa de JavaScript.
// Puedes personalizar el mensaje: new Error('No se pudo conectar').

// ¿Qué es .catch(err) y err.message?
// .catch(err => {
//   console.error(err.message);
// });
// .catch() captura cualquier error que ocurra en la cadena de promesas anterior.
// err es el objeto de error capturado.
// err.message es el texto que escribiste dentro del new Error().

// | Línea                   | Significado                                         |
// | ----------------------- | --------------------------------------------------- |
// | `useEffect(..., [])`    | Ejecuta `fetch()` al montar el componente           |
// | `setLoading(false)`     | Se desactiva la carga una vez que hayamos terminado |
// | `setError(err.message)` | Guarda el error para mostrarlo                      |
// | `posts.map(...)`        | Recorremos la lista de objetos recibida del API     |


function ListaDePosts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);    // Estado de carga
  const [error, setError] = useState(null);        // Estado de error

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('No se pudieron cargar los posts');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Se ejecuta solo una vez

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}



// 🧩 MÓDULO 4: Leer y Comprender Datos de una API
// Cuando haces un fetch(...), lo que recibes suele ser un JSON. Y ese JSON puede tener:
// | Tipo de estructura        | Ejemplo en JavaScript                            |
// | ------------------------- | ------------------------------------------------ |
// | Lista (array de objetos)  | `[ { id: 1, nombre: "Juan" }, { id: 2, ... } ]`  |
// | Objeto plano              | `{ nombre: "Juan", edad: 30 }`                   |
// | Objeto con datos anidados | `{ usuario: { nombre: "Ana", ciudad: "Lima" } }` |
// | Array de arrays           | `[ [1,2], [3,4] ]` *(poco común, pero existe)*   |
// | URL de imágenes           | `"https://fotos.com/perfil.jpg"`  

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "city": "Gwenborough"
//   },
//   "company": {
//     "name": "Romaguera-Crona"
//   }
// }

// Cómo acceder a cada parte

// data.name        // "Leanne Graham"
// data.email       // "Sincere@april.biz"
// data.address.city  // "Gwenborough"
// data.company.name  // "Romaguera-Crona"

import { useState, useEffect } from 'react';

function Usuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar el usuario');
        return res.json();
      })
      .then(data => setUsuario(data))
      .catch(err => console.error(err));
  }, []);

  if (!usuario) return <p>Cargando usuario...</p>;

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
      <p>Ciudad: {usuario.address.city}</p>
      <p>Empresa: {usuario.company.name}</p>
    </div>
  );
}
// 🧠 ¿Qué es async/await?
// Es una forma moderna y clara de trabajar con funciones asincrónicas en JavaScript.
// Sustituye a .then() y .catch() con una estructura más secuencial, parecida al código “normal”:
// Antes
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

  // Ahora
  async function cargarDatos() {
  try {
    const res = await fetch('url');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}



// ✅ Módulos que ya vimos:
// Introducción general + planificación
// Módulo 1 – ¿Qué es fetch y cómo funciona en la web?
// Módulo 2 – fetch con .then() y .catch()
// Módulo 3 – Estados: loading, error, data
// Módulo 4 – Leer estructuras JSON de la API
// Módulo 5 – async/await aplicado al fetch
// 📘 Módulos que faltan:
// Módulo 6 – Enviar datos con POST (y métodos como PUT, DELETE)
// Módulo 7 – Prácticas comunes: paginar, limitar, mapear listas grandes
// Módulo 8 – Simulación de APIs y testing local (ej: JSON Server o mock APIs)




