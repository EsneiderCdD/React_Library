# Sugerencias: Fetch Avanzado

Ideas potenciales para nivel avanzado. No implementar todavía.

## Temas propuestos (lista abierta)
- Arquitectura de servicios/repositorios:
  - DRY avanzado, separación por dominio, reutilización extrema.
  - Configuración por entorno (URLs, claves) y middlewares de red.
- Cancelación y control de concurrencia:
  - `AbortController` avanzado (múltiples solicitudes, limpieza en efectos).
  - `Promise.all`, `race`, manejo de tiempos y timeouts.
- Retries y resiliencia:
  - Backoff exponencial, circuit breaker (sólo idea), reintentos condicionados.
- Caché y sincronización de datos:
  - Librerías como React Query/SWR (mencionar, no usar ahora).
  - Estrategias manuales de caché por clave.
- Tiempo real:
  - WebSockets, Server-Sent Events (SSE), eventos y reconexión.
- Streaming de respuestas:
  - `ReadableStream` y procesamiento paulatino.
- GraphQL y clientes:
  - Esquemas, queries, mutaciones, clientes (Apollo/urql) como referencia.
- Limitación y batching:
  - Rate limiting, throttling/debounce, agrupación de solicitudes.
- Seguridad y políticas:
  - CORS avanzado, CSRF, sanitización y validación.
- Mocking y entornos de desarrollo:
  - MSW (Mock Service Worker), servidores de prueba y fixtures.
- “Servidor” y APIs propias (ideas):
  - Mini API con Node/Express, uso de proxy en Vite.
  - Separar frontend/backend y probar integraciones locales.

## Mini ejemplo ilustrativo (no desarrollar)
```js
// Esbozo de retry con backoff exponencial
async function fetchConRetry(url, intentos = 3) {
  let espera = 300;
  for (let i = 0; i < intentos; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP');
      return await res.json();
    } catch (e) {
      await new Promise(r => setTimeout(r, espera));
      espera *= 2;
    }
  }
  throw new Error('Sin éxito tras reintentos');
}
```