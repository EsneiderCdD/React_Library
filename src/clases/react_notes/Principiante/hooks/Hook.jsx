//Los Hooks son funciones especiales +
//Hooks Populares: 
//useState -> manejar el estado local de un componente
//useEffect -> efectos secundarios (peticiones, timers, DOM, etc.)
//useRef -> referencia a elementos o valores persistentes 
//useContext -> manejo de contextos
//useReducer -> manejo de estados complejos
//useMemo -> Optimización de rendimiento

//Otros Hooks:
//useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useId,useTransition,useCallback 

//Reglas: 
//1. Solo llama los Hooks en el orden superior (no dentro de condicionales, bucles o funciones anidadas
function Componente() {
  if (true) {
    const [estado, setEstado] = useState(0); // ❌ NO permitido
  }
  return <p>Hola</p>;
}
//2. Solo llama los Hooks desde funciones React (componentes funcionales , Custom Hooks) 
// ❌  No uses Hooks dentro de clases, callbacks externos, funciones normales de JS

//3. Llamar Hooks en el mismo orden. React internamente lleva un registro del orden de los Hooks. Cambiarlo rompe el componente o causa errores invisibles.


//📌 Tip: Usa el ESLint Plugin oficial
//npm install eslint-plugin-react-hooks --save-dev
// Y en tu .eslintrc: 
// {
//   "plugins": ["react-hooks"],
//   "rules": {
//     "react-hooks/rules-of-hooks": "error"
//   }
// }

// ✅ useEffect 