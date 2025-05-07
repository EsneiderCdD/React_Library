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