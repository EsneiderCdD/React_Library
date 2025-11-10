# Fundamentos: Conceptos

  ## ¿Qué es una API?
  API significa Application Programming Interface. Es una interfaz (una forma de comunicarse) entre dos sistemas.

  ## ¿Qué es HTTP?
  HTTP (HyperText Transfer Protocol) es el lenguaje en que se comunican el navegador y los servidores.

    GET	
    Obtener datos	Mostrar lista de usuarios

    POST	
    Enviar datos nuevos	Crear un nuevo comentario

    PUT	
    Reemplazar datos existentes	Editar el perfil de usuario

    DELETE	
    Eliminar un recurso	Borrar un post

    Un recurso es cualquier entidad de datos a la que accedemos vía una URL en la API: 
    https://jsonplaceholder.typicode.com/users

  ## JSON (JavaScript Object Notation) 
  es el formato más común para intercambiar datos en la web.

  ## Flujo básico en React

  | Componente       | Rol                                       |
  | ---------------- | ----------------------------------------- |
  | React (frontend) | Quiere datos                              |
  | `fetch()`        | Hace una solicitud HTTP a una URL         |
  | API              | Procesa la solicitud y devuelve los datos |
  | JSON             | Es el formato en que vienen esos datos    |
  | React            | Muestra esos datos al usuario             |