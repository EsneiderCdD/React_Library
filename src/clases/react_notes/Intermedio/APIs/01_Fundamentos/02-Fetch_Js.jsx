// fetch() en JavaScript puro -> para entender cómo se hace una solicitud HTTP

// fetch() es una función nativa de JavaScript para hacer solicitudes HTTP desde el navegador.
// Es parte del estándar web moderno. No necesitas instalar nada.
fetch(URL)
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos);
  });

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