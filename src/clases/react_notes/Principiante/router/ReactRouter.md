# 📘 React Router - Plan de Aprendizaje

Este repositorio contiene una ruta de aprendizaje estructurada para dominar **React Router**, dividida en tres niveles: **Principiante**, **Intermedio** y **Avanzado**. Cada unidad representa un concepto o técnica clave, y puede ser trabajada de forma modular mediante archivos `.jsx`.

---

## 🟢 Nivel Principiante

### 1. `01-browser-router.jsx`
**Tema:** Introducción a `BrowserRouter`  
**Descripción:** Aprende cómo envolver tu aplicación en `<BrowserRouter>` para habilitar el enrutamiento de React.

### 2. `02-routes-route.jsx`
**Tema:** Uso básico de `<Routes>` y `<Route>`  
**Descripción:** Aprende a definir rutas y asociarlas con componentes específicos.

### 3. `03-link-navegacion.jsx`
**Tema:** Enlaces con `<Link>`  
**Descripción:** Implementa navegación entre rutas usando enlaces que no recargan la página.

### 4. `04-navegacion-basica.jsx`
**Tema:** Navegación simple con múltiples páginas  
**Descripción:** Ejemplo simple de SPA con Home y About conectadas por enlaces.

---

## 🟡 Nivel Intermedio

### 5. `05-parametros-ruta.jsx`
**Tema:** Parámetros dinámicos en rutas (`:id`)  
**Descripción:** Aprende a capturar datos dinámicos desde la URL y usarlos en tus componentes.

### 6. `06-useparams.jsx`
**Tema:** Hook `useParams()`  
**Descripción:** Aprende a acceder a los parámetros definidos en la ruta actual.

### 7. `07-usenavigate.jsx`
**Tema:** Navegación programática con `useNavigate()`  
**Descripción:** Redirige usuarios desde tu código JS sin necesidad de hacer clic en enlaces.

### 8. `08-navigate-state.jsx`
**Tema:** Enviar estado entre rutas  
**Descripción:** Aprende cómo enviar datos entre páginas al navegar.

---

## 🔴 Nivel Avanzado

### 9. `09-nested-routes.jsx`
**Tema:** Rutas anidadas  
**Descripción:** Organiza rutas jerárquicamente y muestra componentes hijos dentro de padres.

### 10. `10-layout-route.jsx`
**Tema:** Layouts compartidos  
**Descripción:** Define un layout general que se mantiene mientras cambian los componentes internos.

### 11. `11-not-found-route.jsx`
**Tema:** Ruta 404 personalizada  
**Descripción:** Aprende a manejar rutas inexistentes mostrando una página personalizada.

### 12. `12-protected-routes.jsx`
**Tema:** Rutas protegidas (Private Routes)  
**Descripción:** Restringe acceso a ciertas páginas si el usuario no está autenticado.

### 13. `13-lazy-loading.jsx`
**Tema:** Lazy Loading con `React.lazy()`  
**Descripción:** Carga componentes de forma dinámica solo cuando se necesitan, para optimizar el rendimiento.

---

## 🧠 Extras recomendados (Complementarios)

### 14. `14-query-params.jsx`
**Tema:** Query Params en la URL  
**Descripción:** Aprende a leer y manipular parámetros de consulta como `?sort=asc`.

### 15. `15-scroll-restoration.jsx`
**Tema:** Restauración de scroll  
**Descripción:** Mantén o ajusta la posición del scroll al navegar entre rutas.

---

## 📦 Estructura recomendada del proyecto