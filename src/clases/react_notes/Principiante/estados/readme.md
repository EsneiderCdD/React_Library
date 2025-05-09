# 🧠 React Masterclass Series – Módulo: Estados (`state`)

## 1. ¿Qué es el estado?

El **estado** en React es el mecanismo que permite a los componentes almacenar información interna que puede cambiar durante el tiempo de vida del componente. React gestiona este estado de forma declarativa: cuando el estado cambia, React vuelve a renderizar automáticamente la interfaz para reflejar ese nuevo estado.

Técnicamente, el estado es una variable reactiva controlada por React a través de hooks como `useState`, `useReducer`, etc. Es **transitorio**, **local** al componente (a menos que se eleve o globalice), y **nunca se debe modificar directamente**.

---

## 2. Niveles y temas

Cada archivo `.jsx` representa una mini masterclass que incluye código y explicación. El orden sigue una progresión pedagógica, desde lo más básico hasta técnicas avanzadas.

### 🟢 Nivel Básico

| Archivo                | Concepto                                   |
|------------------------|---------------------------------------------|
| `StateBasic.jsx`       | Introducción al estado con `useState` y renderizado reactivo. |
| `StateUpdate.jsx`      | Cómo actualizar estado correctamente, incluyendo funciones y asincronía. |
| `StateReset.jsx`       | Cómo reiniciar el estado a su valor inicial. |
| `StateMultiple.jsx`    | Manejo de múltiples `useState` en un componente. |

---

### 🟡 Nivel Intermedio

| Archivo                  | Concepto                                        |
|--------------------------|--------------------------------------------------|
| `DerivedState.jsx`       | Estado derivado: cómo calcular valores en función de otros estados. |
| `ObjectState.jsx`        | Manejo de estado estructurado (objetos y arrays). |
| `ControlledInputs.jsx`   | Inputs controlados con estado (`form inputs`). |
| `UseEffectWithState.jsx` | Relación entre `useEffect` y el estado: efectos colaterales. |

---

### 🔴 Nivel Avanzado

| Archivo                  | Concepto                                         |
|--------------------------|--------------------------------------------------|
| `UseReducerBasic.jsx`    | Introducción a `useReducer` para lógica compleja de estado. |
| `CustomHookState.jsx`    | Crear hooks personalizados para encapsular lógica de estado reutilizable. |
| `StatePerformance.jsx`   | Optimización de rendimiento: evitar renders innecesarios, `useMemo`, `useCallback`. |
| `GlobalStateIntro.jsx`   | Introducción al estado global con `Context API`. |

---

## 3. Navegación Modular

> Este repositorio está organizado por **módulos temáticos**. Cada módulo (como `Estado`, `Eventos`, `Renderizado`, etc.) sigue la misma estructura de niveles: básico, intermedio y avanzado, con archivos individuales por concepto.

---

## 🔜 Siguientes módulos previstos

- **Props**: Comunicación entre componentes
- **Eventos**: Manejo de eventos nativos y personalizados
- **Renderizado Condicional**: `if`, ternarios, `&&`, componentes nulos
- **Listas y Claves**: `map`, `key`, optimización
- **Ciclo de Vida**: `useEffect` avanzado
- **Estado Global**: Context API, Zustand, Redux
- **APIs y Async**: Fetch, Axios, React Query
- **Componentes controlados y no controlados**
- **Testing de estado y hooks personalizados**

---

## 🛠 Requisitos

- React 18+
- Conocimiento básico de JavaScript ES6
- Vite o Create React App para correr los ejemplos localmente

---

## 🚀 Empecemos por lo primero…

### 🟢 `StateBasic.jsx` – La base del estado en React

> **A continuación, te explico esta primera masterclass con lujo de detalles.**
