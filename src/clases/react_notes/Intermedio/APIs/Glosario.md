# Glosario — Fundamentos y Fetch (actual)

## A
- `API`: Interfaz para que dos sistemas se comuniquen mediante solicitudes y respuestas.
- `asincronía`: Ejecución que no bloquea el hilo principal; el flujo continúa mientras se espera una respuesta.
- `await`: Pausa la función `async` hasta que una promesa se resuelve o rechaza.

## B
- `body (cuerpo)`: Contenido de una solicitud o respuesta HTTP; p. ej., JSON enviado o recibido.

## C
- `catch`: Método de promesas que captura errores ocurridos en la cadena anterior.
- `código de estado (status)`: Número HTTP que indica resultado (200–299 éxito, 404 no encontrado, 500 error del servidor, etc.).
- `Content-Type`: Encabezado que especifica el formato del cuerpo; p. ej., `application/json`.

## D
- `DELETE`: Método HTTP para eliminar un recurso identificado por una URL.
- `dependencia (arreglo de)`: Segundo argumento de `useEffect`; controla cuándo se ejecuta el efecto. `[]` = “solo al montar”.

## E
- `endpoint`: Ruta específica de una API a la que se hace la solicitud, p. ej., `/posts`.
- `error (objeto)`: Representa fallos en ejecución; tiene propiedades como `message`.
- `err.message`: Texto descriptivo del error lanzado; útil para mostrar mensajes de fallo en UI.

## F
- `fetch()`: API nativa del navegador para solicitudes HTTP y trabajo con promesas.

## G
- `GET`: Método HTTP para obtener datos (lectura) desde una API.

## H
- `header (encabezado)`: Metadatos HTTP enviados/recibidos; incluyen `Content-Type`, autenticación, etc.
- `HTTP`: Protocolo de comunicación entre cliente (navegador) y servidor.

## J
- `JSON`: Formato de datos legible por humanos y máquinas; común en APIs web.
- `JSON.parse (contexto)`: Conversión de texto JSON a objeto; con `fetch`, lo estándar es `res.json()`.

## L
- `loading`: Estado que indica que una petición está en curso; se muestra un indicador de carga.

## M
- `map (React)`: Método para renderizar listas iterando un arreglo y devolviendo elementos.
- `montar (mount)`: Momento en que un componente React se inserta en el DOM; `useEffect(..., [])` corre aquí.

## O
- `ok (res.ok)`: Booleano en `Response` que indica éxito HTTP (200–299).

## P
- `POST`: Método HTTP para crear datos nuevos en un servidor.
- `preventDefault`: Método de eventos que evita el comportamiento por defecto (p. ej., envío de formulario).
- `promesa (Promise)`: Objeto que representa una operación asincrónica; tiene `then`, `catch`, `finally`.
- `PUT`: Método HTTP para reemplazar/actualizar un recurso completo.

## R
- `render condicional`: Mostrar distinto contenido según estado (`loading`, `error`, datos disponibles).
- `request (solicitud)`: Mensaje del cliente con método, URL, headers y body.
- `response (respuesta)`: Mensaje del servidor con código de estado, headers y (opcional) body.
- `res.headers`: Encabezados de la respuesta (metainformación como tipo de contenido).
- `res.json()`: Convierte el body en objeto JavaScript (promesa).
- `res.status`: Código HTTP numérico; útil para distinguir tipos de error.

## S
- `setState`: Función de React para actualizar estado; dispara nuevo render.
- `status text (contexto)`: Texto asociado al código de estado; no siempre se usa en UI.

## T
- `throw new Error`: Lanza un error manual y redirige el flujo al `catch`.

## U
- `URL`: Dirección única que identifica un recurso en la web o en una API.
- `useEffect`: Hook para efectos secundarios (p. ej., fetch); acepta función y arreglo de dependencias.
- `useState`: Hook para estado local (p. ej., `data`, `loading`, `error`).
- `usuario (entidad)`: Ejemplo de recurso típico en APIs (p. ej., `/users/1`).

## V
- `valor de retorno (res.json)`: Resultado de parsear JSON; se usa para poblar el estado y renderizar.

---