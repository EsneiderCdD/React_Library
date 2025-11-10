# Sugerencias: Fetch Intermedio

Notas breves para temas a explorar más adelante. No desarrollar ahora.

## Ideas de contenido (lista abierta)
- Buenas prácticas y patrones básicos:
  - Validar `res.ok`, manejo de `loading/error/data`, mensajes de error.
  - `try/catch/finally` y flujo claro de estados.
  - Uso básico de `AbortController` para cancelar peticiones.
- Organización del código:
  - DRY: servicios/clients reutilizables (separar URL base, headers, parseo).
  - Centralizar `fetch` en utilidades simples.
- Axios (nivel intermedio):
  - ¿Por qué usarlo? Diferencias con `fetch` y cuándo conviene.
  - Configuración base, instancia, headers por defecto.
  - Interceptors (mencionarlos, no implementarlos aún).
- Formularios y envío de datos:
  - `Content-Type: application/json` vs `FormData`.
  - Validaciones mínimas antes de enviar.
- Paginación y filtros:
  - Query params: `?page=1&search=texto`.
  - Estructuras simples para controlar página y resultados.
- Autenticación sencilla:
  - Tokens en headers (`Authorization: Bearer <token>`), sin implementar.
- Pruebas ligeras:
  - Ideas para testear componentes que consumen APIs.
- UX y accesibilidad:
  - Indicadores de carga, Skeletons, manejo de foco y anuncios de estado.

## Mini ejemplo ilustrativo (no desarrollar)
```js
// AbortController básico
const controller = new AbortController();
fetch('/api', { signal: controller.signal })
  .then(r => r.json())
  .catch(err => console.error(err));
// controller.abort(); // cancelar si es necesario
```