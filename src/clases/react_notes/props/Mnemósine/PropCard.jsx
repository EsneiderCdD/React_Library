import React from "react";
import { useState } from "react";


function DiosesOlimpo ({imagen, nombre = "default", edad = 0, descripcion , familia = [], }) {

    const [ cambiarColor, setCambiarColor] = useState(false);

    const fondo = {
       fondo1: { backgroundColor: "black"},
        fondo2:{ backgroundColor: "blue"},
            
    }

    const togglebackground = () => {
        setCambiarColor( prev => !prev);

    }

    const handleClick = () => {
        alert("¡Hiciste clic en el nombre de Zeus!");
    }

    return (
        <div style = {cambiarColor ? fondo.fondo1 : fondo.fondo2}>
            <img src={imagen} style={{width: "250px", height: "250px",borderRadius: "50%" }} />
            <p onClick= {() => 
                {handleClick();
                togglebackground();     
                }} style={{cursor: "pointer"}}>{nombre} </p>
            <p>{edad} </p>
            <p>{descripcion} </p>
            {familia.map((mujer, index) => (
            <div key={index}>
                <h3>{mujer.pareja}</h3>
                <ul>
                {mujer.hijos.map((hijo, i) => (
                    <li key={i}>{hijo.nombre} - {hijo.rol}</li>
                ))}
                </ul>
            </div>
            ))}
        
                    </div>
                );
            }

            export default DiosesOlimpo



{/*
    
import DiosesOlimpo from "./clases/react_notes/props/Mnemósine/PropCard";
import Zeus from "./assets/imagenes/Zeus.png";



function App() {

    const familia = [
    { pareja: "Hera", 
        hijos: [
            { nombre: "Ares", rol: "XYZ"},
            { nombre: "Hebe", rol: "XYZ"},
            { nombre: "Hefesto", rol: "XYZ"},
            { nombre: "Heris", rol: "XYZ"},
        ]
    },
    { pareja: "Otras Diosas", 
        hijos: [
            { nombre: "Las nueve musas", rol: "XYZ" },
            { nombre: "Atenea", rol: "XYZ"}, 
            { nombre: "Apolo y Artemisa", rol: "XYZ"},
        ]
    },
    { pareja: "Humanas", 
        hijos: [
            { nombre: "Hercules", rol: "XYZ"}, 
            { nombre: "Helena de Troya", rol: "XYZ"}, 
            { nombre: "Dionisio", rol: "XYZ"},
        ]
    },
    ];

    return (

    <div>
        <DiosesOlimpo
            nombre= "Zeus"
            edad= {99}
            descripcion= "Dios del olimpo"
            imagen= {Zeus}
            familia= {familia}
            
        />
        <DiosesOlimpo></DiosesOlimpo>
    </div>
    )
}

export default App
 */}


