# 🧠 React Masterclass Series – Módulo: APIs Externas (`External APIs`)

## 1. ¿Qué son las APIs externas?

Las **APIs externas** son interfaces que permiten que tu aplicación React se comunique con servicios externos para obtener o enviar datos. Estos servicios pueden incluir APIs REST, GraphQL, WebSockets, entre otros. React utiliza herramientas como `fetch` o bibliotecas como `axios` para realizar peticiones HTTP a estas APIs.

Las peticiones pueden ser **sincrónicas o asincrónicas**, y el manejo adecuado de los datos es fundamental para garantizar una buena experiencia de usuario.

---

## 2. Niveles y temas

Cada archivo `.jsx` representa una mini masterclass que incluye código y explicación. El orden sigue una progresión pedagógica, desde lo más básico hasta técnicas avanzadas.

### 🟢 Nivel Básico

| Archivo                  | Concepto                                        |
|--------------------------|--------------------------------------------------|
| `FetchBasic.jsx`          | Introducción a la realización de peticiones HTTP con `fetch`. |
| `FetchPost.jsx`           | Cómo hacer una solicitud POST para enviar datos a una API. |
| `FetchErrorHandling.jsx`  | Manejo de errores en solicitudes HTTP: cómo capturar y gestionar fallos. |
| `FetchLoadingState.jsx`   | Cómo mostrar un estado de carga mientras se espera la respuesta de la API. |

---

### 🟡 Nivel Intermedio

| Archivo                      | Concepto                                           |
|------------------------------|-----------------------------------------------------|
| `AxiosBasic.jsx`              | Introducción al uso de `axios` para realizar peticiones HTTP más complejas. |
| `AxiosWithParams.jsx`        | Uso de parámetros en las peticiones `GET` con `axios`. |
| `FetchWithState.jsx`         | Manejo del estado local con `useState` y peticiones a APIs. |
| `FetchWithUseEffect.jsx`     | Uso de `useEffect` para realizar peticiones a la API cuando el componente se monta. |

---

### 🔴 Nivel Avanzado

| Archivo                      | Concepto                                           |
|------------------------------|-----------------------------------------------------|
| `AxiosErrorHandling.jsx`      | Manejo avanzado de errores en peticiones HTTP con `axios`, incluyendo reintentos y validación de respuestas. |
| `FetchWithPagination.jsx`     | Implementación de paginación en solicitudes de API con `fetch`. |
| `ConcurrentRequests.jsx`     | Realización de múltiples peticiones API concurrentes utilizando `Promise.all`. |
| `OptimizedAPICalls.jsx`      | Técnicas de optimización de llamadas API: evitar solicitudes innecesarias con `useMemo` y `useCallback`. |

---

## 3. Navegación Modular

> Este repositorio está organizado por **módulos temáticos**. Cada módulo (como `Estado`, `Eventos`, `Renderizado`, etc.) sigue la misma estructura de niveles: básico, intermedio y avanzado, con archivos individuales por concepto.

| Módulo | Título                                          | Contenido clave                                                                                                                              |
| :----: | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
|    1   | **Introducción a las APIs y HTTP**              | • ¿Qué es una API?<br>• Métodos HTTP (GET, POST, PUT, DELETE)<br>• Formato JSON                                                              |
|    2   | **Fetch() en JavaScript puro**                  | • Sintaxis básica de `fetch`<br>• Promesas: `then()` y `catch()`<br>• Leer y convertir JSON                                                  |
|    3   | **Integración en React con useEffect/useState** | • Estado de datos (`useState`)<br>• Efectos en montaje (`useEffect` con `[]`)<br>• Flujo de carga y renderizado condicional                  |
|    4   | **Manejo de estados: loading y error**          | • Patrones de 3 estados (cargando, datos, error)<br>• Mostrar spinners y mensajes de error                                                   |
|    5   | **Async/Await en React**                        | • Reescribir `fetch` con `async`/`await`<br>• Estructura `try/catch/finally`                                                                 |
|    6   | **GET avanzado: renderizado de listas**         | • Mapear arrays de datos<br>• Claves únicas (`key`)<br>• Diferentes tipos de datos (texto, imágenes)                                         |
|    7   | **POST de datos**                               | • Enviar datos al servidor<br>• Configurar `fetch` con `method`, `headers` y `body` (JSON.stringify)<br>• Leer respuesta del POST            |
|    8   | **Buenas prácticas y organización**             | • Extraer llamadas a API en funciones/servicios separados<br>• Variables de entorno (API keys)<br>• Limpieza de efectos (abortar peticiones) |
