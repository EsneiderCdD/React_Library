# Ejercicios (menos a más) — 02_Fetch

1) GET — Lista básica
- Realiza una solicitud `GET` y renderiza una lista de elementos (p. ej., posts). Muestra título y contenido.

2) POST — Crear elemento
- Construye un formulario controlado y envía `POST` en JSON. Tras crear, muestra un mensaje de éxito y limpia el formulario.

3) DELETE — Eliminar por id
- Agrega un campo `id` y elimina un elemento con `DELETE`. Actualiza la UI para que refleje la desaparición.

4) PUT — Editar recurso
- Crea un formulario para editar un recurso completo con `PUT`. Muestra el resultado actualizado.

5) GET con filtro (query params)
- Agrega filtros (p. ej., `userId=1`) usando parámetros de consulta. Renderiza solo lo que cumpla el filtro.

6) Estados — loading/error/data visibles
- Implementa el patrón `loading/error/data` de forma explícita (indicador de carga, mensaje de error y lista de datos).

7) Async/Await — Reescritura de GET
- Reescribe el ejercicio 1 usando `async/await` con `try/catch/finally`. Mantén el manejo de `res.ok`.

8) Maestro-detalle
- Muestra una lista (maestro) y al hacer click carga el detalle (segunda solicitud). Controla estados en ambos niveles.

9) DELETE con respuesta vacía
- Maneja un `DELETE` que devuelve `200/204` sin cuerpo. No intentes `res.json()`; muestra un mensaje y actualiza el estado local.

10) Paginación simple
- Implementa paginación con `_page` y `_limit` en la URL. Muestra controles “Siguiente/Anterior” y evita recargar toda la página.

> Tip general: valida `res.ok` antes de parsear JSON, y gestiona `loading/error/data` en cada flujo.