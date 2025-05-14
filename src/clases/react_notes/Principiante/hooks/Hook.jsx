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

// ✅ useEffect: useEffect es el Hook que te permite ejecutar efectos secundarios en un componente funcional.

//Sintaxis Basica
useEffect(() => {
  // Código que se ejecuta DESPUÉS del render
});

// El efecto se ejecuta:
// Después de que React haya pintado el componente
// Cada vez que el componente se renderiza
import { useEffect, useState } from 'react';
function EfectoEjemplo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Renderizado o actualizado');
  });

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
// ⚙️ useEffect con dependencias . Puedes controlar cuándo se ejecuta usando el array de dependencias:
useEffect(() => {
  console.log('Se ejecuta solo una vez');
}, []); // ← Vacío = solo al montar el componente
//
useEffect(() => {
  console.log('Se ejecuta cuando cambia "count"');
}, [count]);
// useEffect para temporizadores
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Hola después de 2 segundos');
  }, 2000);
}, []);
// useEffect para peticiones
useEffect(() => {
  fetch('https://api.example.com/datos')
    .then(res => res.json())
    .then(data => {
      console.log('Datos recibidos:', data);
    });
}, []);
//⚠️ Importante: los efectos no deben ser bloqueantes. Por eso se usa .then, no await. -> PREGUNTAR POR ESTO EN UN FUTURO ***
//⚠️ useEffect sirve para ejecutar código que NO forma parte del renderizado visual del componente. Es decir, código que ocurre "después" del render o que no se puede hacer directamente en el return.
//⚠️  React quiere separar el render visual de los efectos colaterales.

// SE EJECUTA 1 SOLA vez
useEffect(() => {
  console.log('Solo una vez');
}, []);
// SE EJECUTA EN CADA RENDER
useEffect(() => {
  console.log('Cada render');
});
// SE EJECUTA CUANDO CAMBIA UNA DE LAS DEPENDENCIAS
useEffect(() => {
  console.log('Cambia la variable');
}, [variable]);
// SE EJECUTA CUANDO CAMBIA MULTIPLES DEPENDENCIAS
useEffect(() => {
  console.log('Cambia la variable y otra dependencia');
}, [variable, otraDependencia]);


// "CleanUp en useEffect
// Algunos efectos crean suscripciones, timers, listeners, que siguen activos incluso cuando el componente ya no lo nececita. Estos se siguen ejecutando innecesariamente o intentando actualizar un componente que ya no existe generarndo warning o errores graves (memory leaks)
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(timer); // ✅ Limpieza
  };
}, []);

// Event listeners
useEffect(() => {
  const handleScroll = () => {
    console.log('Scroll...');
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll); // ✅ Limpieza
  };
}, []);

// 🧼 Si no limpias, se acumulan los listeners cada vez que montas el componente.

// WebSockets, suscripciones o librerías externas

useEffect(() => {
  const socket = new WebSocket('wss://...');
  socket.onmessage = () => { /* ... */ };

  return () => {
    socket.close(); // ✅ Cierra conexión al desmontar
  };
}, []);




