# Roadmap de Fetch — Básico, Intermedio y Avanzado

Marcadores de progreso (elige y coloca una etiqueta al inicio de cada tema):
- `VISTO`: tema ya estudiado.
- `INTERÉS`: próximo en la lista / prioridad.
- `PENDIENTE`: aún no visto.

Cómo usar los marcadores
- Cambia la etiqueta del inicio de cada línea según tu progreso.
- Ejemplo: `VISTO` GET — Peticiones de lectura y su manejo con `res.ok`.

---

## Nivel Básico

- `PENDIENTE` API y recursos: Qué es una API, qué es un recurso y cómo se identifica mediante URL.
- `PENDIENTE` HTTP y métodos: `GET`, `POST`, `PUT`, `DELETE`, códigos `2xx/4xx/5xx`, y `headers` como `Content-Type`.
- `PENDIENTE` JSON y parseo: Formato JSON y conversión con `res.json()` para obtener objetos JavaScript.
- `PENDIENTE` fetch() básico: Flujo `fetch → Response → res.ok/res.status`, lectura del cuerpo y errores comunes.
- `PENDIENTE` useEffect + fetch: Disparar peticiones al montar (`useEffect(..., [])`), estados `loading/error/data` y render condicional.
- `PENDIENTE` Async/Await: Reescritura de `then/catch` a `async/await` con `try/catch` y propagación de errores.
- `PENDIENTE` POST (JSON): Enviar datos con `method`, `headers` y `body` (JSON); manejar respuesta y errores.
- `PENDIENTE` Listas y `map()`: Renderizar colecciones recibidas de la API y claves (`key`) correctas.

---

## Nivel Intermedio

- `PENDIENTE` AbortController: Cancelar peticiones y limpiar en `useEffect` para evitar fugas al desmontar.
- `PENDIENTE` Timeouts manuales: Abortar tras X ms; integración con `AbortSignal` para prevenir esperas largas.
- `PENDIENTE` Servicios de datos: Extraer helpers/servicios para reutilizar lógica y unificar manejo de errores.
- `PENDIENTE` Paginación y filtros: `query params`, estado de página/orden, sincronización de UI y accesibilidad.
- `PENDIENTE` Autenticación: `Authorization` header (Bearer tokens), refresco, manejo de `401/403` y redirecciones.
- `PENDIENTE` FormData y archivos: Subidas con `multipart/form-data`, progreso y validación.
- `PENDIENTE` PUT vs PATCH: Diferencias de actualización total vs parcial e idempotencia.
- `PENDIENTE` Manejo de errores UX: Mensajes claros, reintentos simples y estados vacíos.
- `PENDIENTE` Axios vs fetch: Cuándo conviene usar Axios; diferencias de configuraciones y cancelaciones.
- `PENDIENTE` Testing de peticiones: Mock de `fetch` y pruebas de servicios/componentes.

---

## Nivel Avanzado

- `PENDIENTE` Retries con backoff: Reintentos exponenciales con jitter y límites de intentos.
- `PENDIENTE` Concurrencia y deduplicación: Coordinar múltiples peticiones (`Promise.all`), evitar duplicadas y colas de trabajo.
- `PENDIENTE` Cache y revalidación: TTL, invalidación, `stale-while-revalidate` y sincronización con UI.
- `PENDIENTE` Persistencia y offline: Cache local y reintentos diferidos cuando vuelve la conectividad.
- `PENDIENTE` Rate limiting: Respetar límites del API; respuesta a `429` con backoff y enfriamiento.
- `PENDIENTE` Streaming: Consumir `ReadableStream` para descargas/parsing progresivo y grandes volúmenes.
- `PENDIENTE` Tiempo real: SSE/WebSockets y comparación con polling; actualización de estado en vivo.
- `PENDIENTE` GraphQL y fetch: Peticiones POST con queries/mutations, headers y manejo de errores.
- `PENDIENTE` Seguridad: CORS, exposición de tokens, sanitización y validación de inputs.
- `PENDIENTE` Observabilidad: Logs, métricas de latencia/errores y trazas en servicios de datos.
- `PENDIENTE` Arquitectura de servicios: Capas (dominio/datos), adaptadores de transporte y puntos de extensión.

---

Sugerencia de uso
- Empieza por Básico y marca `VISTO` conforme avances.
- Mantén 2–3 temas con `INTERÉS` para enfocar estudio.
- Revisa interdependencias (p. ej., `AbortController` antes de `Timeouts`).