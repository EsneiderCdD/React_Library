// useEffect
// Cualquier operación que ocurra fuera del flujo de renderizado de React, como:
// - Llamadas a APIs, manipulación de DOM, suscripciones (Websocket, eventos), temporizadores(setTimeout, setInterval), Sincronizar acon algo externo como LocalStorage, etc.

//Sintaxis Basica
useEffect (() => {
    // Código del efecto
}, [dependencias]); // [] le dice a React cuadno ejecutar el efecto
 

//Ejecutar sin dependencias
useEffect(() => {
    console.log("Ejecutado sin dependencias")
})//se ejecuta en cada render del componente.

//Ejecutar solo al montar (una vez):
useEffect(() => {
    console.log("Solo una vez")
}, []); // [] le dice a React que no hay dependencias, por lo que solo se ejecuta al montar el componente

// Ejecutar cuando cambia una variable
useEffect(() => {
    console.log("Cambia la variable")
}, [variable]); // [] le dice a React que solo se ejecute cuando la variable cambie

//Múltiples dependencias
useEffect(() => {
    console.log("Cambia la variable y otra dependencia")
}, [variable, otraDependencia]);




//♻️ Limpieza de efectos (cleanup)
// función de limpieza (cleanup) que se encarga de deshacer o detener lo que el efecto hizo, cuando:
// - El componente se desmonta (sale de la pantalla)
// - El efecto se vuelve a ejecutar (cuando cambian las dependencias)



//Ejemplo:


import React, { useState, useEffect } from "react";

function Reloj() {
    const [tiempo, setTiempo] = useState(0);
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setTiempo((t) => t + 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalo);
        console.log("Reloj desmontado");
      };
    }, []);
  
    return <p>Tiempo: {tiempo} segundos</p>;
  }
  
  export default Reloj;  