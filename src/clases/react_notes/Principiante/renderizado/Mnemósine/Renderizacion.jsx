import React, { useState } from "react";

function Renderizacion () {

    const [ nombre, setNombre ] = useState("");
    const [ edad, setEdad ] = useState("");
    const [ aceptado, setAceptado ] = useState(false);

    const handleNombre = (e) => {
        setNombre(e.target.value);
    };

    
    const handleEdad = (e) => {
        setEdad(e.target.value);
    };

    const handleAceptado = (e) => {
        setAceptado(e.target.checked);
    };


    let contenido;

    if (nombre === "" || edad === "") {
        contenido = <p>Por favor completa los campos.</p>;
    } else if (isNaN(edad) || edad <= 0) {
        contenido = <p>Edad Inválida. Debe ser un numero positivo</p>;
    } else if (!aceptado) {
        contenido = <p>Debes aceptar los terminos y condiciones </p>;
    } else if (Number(edad) < 18) {
        contenido = <p>Hola {nombre}, eres menor de edad. Acceso Denegado.</p>;
    } else {
        contenido = <p>Hola {nombre}, eres mayor de edad. ¡Bienvenido! </p>
    }
    
    


    return (
        <div style={{ border: "2px solid #888", padding: "10px", borderRadius: "10px", width: "300px" }}>
            <h2>Renderización Condicional</h2>
            <input 
                type="text" 
                value={nombre}
                onChange={handleNombre}
                style={{ display: "block", marginBottom: "10px" }}
            />
            <input 
                type="number"
                value={edad}
                onChange={handleEdad} 
                style={{ display: "block", marginBottom: "10px" }}/>


            <label >
                <input
                    type="checkbox"
                    checked={aceptado}
                    onChange={handleAceptado} />
                    Acepto los terminos y condiciones
            </label>
            <div style={{ marginTop: "15px" }}>
                {contenido}
            </div>


        </div>

    );
}
export default Renderizacion