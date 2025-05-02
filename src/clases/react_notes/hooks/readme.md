# 🧠 Biblioteca de Estudio: React Hooks

Esta biblioteca contiene una serie de ejemplos prácticos y explicaciones paso a paso para aprender React Hooks. Cada archivo `.jsx` corresponde a un concepto clave que será explorado en profundidad en clases individuales. El objetivo es dominar Hooks desde lo más básico hasta su uso personalizado, con un enfoque progresivo, práctico y reflexivo.

---

## 🧩 BIBLIOTECA PRINCIPAL (BÁSICO e INTERMEDIO)

| Archivo | Tema | Descripción breve |
|--------|------|--------------------|
| `HookUseState.jsx` | `useState` | Introducción al hook más básico para manejar estado en componentes funcionales. |
| `HookUseEffect.jsx` | `useEffect` | Cómo manejar efectos secundarios como peticiones, timers o cambios en el DOM. |
| `HookRules.jsx` | Reglas de los Hooks | Qué se puede hacer y qué no al usar Hooks (top level, funciones React, etc.). |
| `HookMultipleStates.jsx` | Múltiples estados con `useState` | Cómo dividir la lógica usando múltiples `useState` en un solo componente. |
| `HookUseEffectCondicional.jsx` | `useEffect` con dependencias | Controlar cuándo se ejecuta un efecto usando el array de dependencias. |
| `HookCleanup.jsx` | Limpieza de efectos | Cómo evitar fugas de memoria con funciones de limpieza (`return` en `useEffect`). |

---

## 🚀 FUNCIONALIDADES INTERMEDIAS

| Archivo | Tema | Descripción breve |
|--------|------|--------------------|
| `HookCustomUseCounter.jsx` | Hook personalizado: contador | Crear un Hook reutilizable para manejar contadores. |
| `HookCustomUseFetch.jsx` | Hook personalizado: fetch de datos | Abstraer lógica de peticiones en un Hook reutilizable. |
| `HookCustomUseLocalStorage.jsx` | Hook personalizado: `localStorage` | Guardar estado en localStorage y mantenerlo persistente. |
| `HookMultipleUseEffect.jsx` | Múltiples efectos | Separar efectos por responsabilidades dentro de un mismo componente. |

---

## 🧠 NIVEL AVANZADO (SOLO REFERENCIA)

- `useReducer` para lógica de estado compleja  
- `useCallback` y `useMemo` para optimización  
- `useContext` para compartir estado entre componentes sin prop drilling  
- Composición de múltiples Hooks personalizados  
- Pruebas y testeo de Hooks  

---

💡 *Sugerencia:* cada archivo debe entenderse como una unidad de aprendizaje. Primero comprende el "para qué" sirve el Hook, luego "cómo" se implementa, y finalmente "cuándo" y "por qué" usarlo según el contexto.

