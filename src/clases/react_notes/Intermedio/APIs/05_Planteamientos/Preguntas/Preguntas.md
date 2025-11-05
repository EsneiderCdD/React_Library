# Preguntas y respuestas (profundización sobre 02_Fetch)

1) ¿Por qué validar `res.ok` si `fetch` no lanza error ante respuestas 4xx/5xx?
- Porque `fetch` solo falla ante errores de red. Si no verificas `res.ok`, podrías tratar una respuesta con error (p. ej., 404/500) como éxito y pintar datos inconsistentes.

2) ¿Cuándo elegir `async/await` en componentes en vez de `.then()`?
- Cuando buscas un flujo más legible y unificado con `try/catch/finally`. En React, lo usual es definir una función async dentro de `useEffect` y llamarla, evitando poner `async` directamente en el callback del efecto.

3) ¿Cómo distinguir un “error de red” de un “error del servidor” en la UI?
- Red: el `fetch` lanza excepción (sin llegar a `res`). Servidor: `res.ok === false` y tienes un `status` (p. ej., 404/500). La UI puede mostrar mensajes distintos para cada caso.

4) ¿Qué implica no controlar el arreglo de dependencias de `useEffect` al hacer fetch?
- Repetir solicitudes en cada render o cuando cambian valores sin necesidad. Define dependencias explícitas y considera cómo los cambios de estado afectan nuevas cargas.

5) ¿Qué cuidados tener al parsear JSON de una respuesta?
- Verificar `res.ok` antes de `res.json()`. Si el servidor responde vacío (p. ej., DELETE 204), no intentes parsear JSON; maneja ese caso por separado.

6) ¿Cómo enviar JSON correctamente en `POST`/`PUT`?
- Usa `headers: { 'Content-Type': 'application/json' }` y `body: JSON.stringify(payload)`. Asegura que el servidor espera JSON y entiende el formato.

7) ¿Por qué es importante mostrar estados `loading/error/data`?
- Porque el usuario necesita saber qué está pasando: que se está cargando, si hubo fallo, o cuándo hay datos. Evita pantallas en blanco o interacciones sin feedback.

8) ¿Cómo evitar que un detalle con campos anidados rompa el render?
- Usa render condicional y evita acceder a propiedades antes de tener datos (o usa optional chaining). Asegura el orden: primero datos, después su render.

9) ¿Qué diferencia práctica hay entre actualizar un recurso con `PUT` vs tu propio enfoque de “actualización parcial”?
- `PUT` suele reemplazar el recurso completo. Si tu “actualización parcial” envía solo algunos campos, documenta la expectativa con la API o usa un contrato claro para que no haya sorpresas.

10) ¿Cómo estructurar las llamadas para no repetir código sin usar librerías?
- Crea helpers simples: función `fetchJson(url, options)` que internamente valide `res.ok`, parsee JSON, y maneje errores. Mantiene DRY y el componente queda más limpio.