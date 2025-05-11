
// useState es un hook (una función especial de React) que te permite añadir estado local a tus componentes funcionales.

// ⚠️ Importaciones : import { useState } from "react";

const [valor, setValor] = useState(valorInicial);

// valor: el dato actual almacenado en el estado.
// setValor: función que actualiza ese dato.
// valorInicial: valor con el que arranca el estado.

// 📌 Inmutabilidad: El estado no no debe modificarse directamente
// 📌 Asincronico: El estado no se actualiza inmediatamente

// 1. ¿Qué necesito recordar entre renders?
// 2. ¿De qué tipo es el dato? (booleano, número, string, array, objeto)
// 3. ¿Con qué valor empieza?
// 4. ¿Cómo cambia ese valor?
// 5. ¿Qué debe pasar en la UI cuando cambia?

// [Valor inicial] --> [Render inicial] 
//        |
// [Usuario interactúa] --> [setEstado(valorNuevo)] 
//        |
// [React detecta cambio] --> [Marca componente como "dirty"] 
//        |
// [Renderiza de nuevo] --> [UI se actualiza con nuevo valor]


// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚


// Actualizar el estado es modificar el valor actual de una variable reactiva mediante su función de actualización (setEstado).

const [contador, setContador] = useState(0);

setContador(contador + 1); 

//❗ setContador no actualiza el estado al instante.
// Usá setEstado(prev => ...) si dependés del valor anterior
setContador(prev => prev + 1);


// 🎯 7. Casos reales de actualización

// Incrementar contador	setC(prev => prev + 1)
// Agregar elemento a array	setArr(prev => [...prev, nuevo])
// Cambiar propiedad en objeto	setObj(prev => ({ ...prev, key: value }))

// prev	Valor actual del estado en el momento del cambio
// prev => prev + 1	Función que devuelve el nuevo valor
// ¿Cuándo usarlo?	Cuando el nuevo valor depende del anterior



// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚

// Resetear el estado es simplemente volverlo a su valor inicial, como si el componente acabara de montarse.

// 📊 Comparativa rápida de estrategias
// Estrategia	Cuándo usarla
// setValor(valorInicial)	Casos simples, pocos estados
// useRef(props.valorInicial)	Valor inicial basado en props
// useReducer	Estado complejo, múltiples propiedades
// hook personalizado	Querés reusar lógica de reset fácilmente
// reset on unmount (useEffect)	Limpiar estado al desmontar

const [otroContador, setOtroContador] = useState(0);

const resetContador = () => {
  setOtroContador(0);
};



// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚

//Saber cuándo separar y cuándo agrupar estado te da el control total sobre la estructura y el comportamiento del componente.


const [estado, setEstado] = useState({ nombre: "", edad: 0 });

const actualizarCampo = (campo, valor) => {
  setEstado(prev => ({
    ...prev,
    [campo]: valor,
  }));
};

// Uso:

actualizarCampo("edad", 31);
// “Ey React, quiero actualizar el estado.
// Usá el valor actual del estado (lo llamo prev).
// Hacé una copia de todas sus propiedades (...prev).
// Pero sobrescribí la propiedad edad con el nuevo valor: 26.”

// 🧠 ¿Qué pasa si hago esto?

setForm({ edad: 26 });

// Esto reemplaza completamente el objeto, y perdés nombre y email.

form = { edad: 26 } // 🔥 PERDISTE TODO LO DEMÁS




// [Estado A]   [Estado B]   [Estado C]
//   |            |            |
//   |   ← No se afectan entre sí →  ✅ useState separados

// [EstadoForm = { a, b, c }]
//   |     |     |
//   | ← relacionados/actualizados juntos → ✅ estado objeto


// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚


