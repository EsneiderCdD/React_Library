import React from "react";

function DiosesOlimpo ({imagen, nombre, edad, descripcion, familia, }) {

    const estilos = {
        fontSize : "30px"
        
    }

    return (
        <div style = {{ width: "500px", height: "500px", backgroundColor:"gray", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", borderRadius: "35%"}}>
            <img src={imagen} alt="Imagen" className="img-dios" style={{width: "250px", height: "250px",borderRadius: "50%" }} />
            <p style={estilos}>{nombre} </p>
            <p style={estilos}>{edad} </p>
            <p style={estilos}>{descripcion} </p>
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
 */}


