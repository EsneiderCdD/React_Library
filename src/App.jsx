import { useState } from "react";
function Eventos() {
    const [mensaje, setMensaje] = useState("");

    const [seleccionadas, setSeleccionadas] = useState(Array(6).fill(false)); // [false, false, ...]

    const [contenidoCajas, setContenidoCajas] = useState(Array(6).fill(""));   // ["", "", ...]

    const toggleSeleccionCaja = (index) => {
    const nuevas = [...seleccionadas];
    nuevas[index] = !nuevas[index];
    setSeleccionadas(nuevas);
  };
  const procesar = () => {
    const nuevoContenido = [...contenidoCajas];
    seleccionadas.forEach((seleccionada, index) => {
      if (seleccionada) {
        nuevoContenido[index] = mensaje;
      }
    });
    setContenidoCajas(nuevoContenido);
  };


    const Boton = ({ texto, descripcion}) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button
                    style={{
                        background: "#cccccc",
                        height: "50px",
                        width: "200px",
                        marginBottom: "1rem"
                    }}
                >
                    {texto}
                </button>
                <span>{descripcion}</span>
                
            </div>
        );
    };

    const Caja = ({ color, index }) => {
        const borde = seleccionadas[index] ? "5px solid black" : "none";
        return (
            <div
                onClick={() => toggleSeleccionCaja(index)}
                style={{
                    background: color,
                    height: "200px",
                    width: "200px",
                    border: borde

                }}
            >
                <span style={{ color: color === "white" ? "white" : "black" }}>{contenidoCajas[index]} </span>  
            </div>
        );
    };

    return (
        <div
            style={{
                background: "#add8e6",
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h1>Eventos</h1>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem"  }}>
                <div>
                    <Boton
                        texto="Boton 1"
                        descripcion="Primer Boton: Input Controlado"
                        id={0}
                       
                    >
                    
                    </Boton>
                    <input
                        type="text"
                        placeholder="Escribe algo..."
                        style={{width:"126px"}}
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />

                    <button onClick={procesar}>Procesar</button>
                </div>
                        
                        
                       

                <Boton texto="Boton 2"
                         />
                <Boton texto="Boton 3"
                         />
                <Boton texto="Boton 4"
                         />
                <Boton texto="Boton 5"
                         />
                <Boton texto="Boton 6"
                         />
            </div>

               <div style={{ display: "flex", gap: "1rem" }}>
                    <Caja color="red" index={0} />
                    <Caja color="green" index={1} />
                    <Caja color="blue" index={2} />
                    <Caja color="yellow" index={3} />
                    <Caja color="black" index={4} />
                    <Caja color="white" index={5} />
                </div>
        </div>
    );
}

export default Eventos;





























// import {useState} from 'react';
// function Eventos () {
//     const cajas = {
//         azul: {background : "#add8e6", height: "200px", width: "200px"},
//         azulOscuro: {background :"#001f3f", height: "200px", width: "200px"},
//     }
//     const [mensaje, setMensaje] = useState("");
//     const [mensajeGuardado, setMensajeGuardado] = useState("");
//     const [modoOscuro, setModoOscuro] = useState(false);
//     const validarMensaje = () => {
//         return mensaje.trim() !== ""
//     };

//     const handleGuardarClick = () => {
//         if (!validarMensaje()) {
//             alert("El mensaje no puede estar vacío");
//             return;
//         }
//         setMensajeGuardado(mensaje);
//         console.log("Mensaje Guardado", mensaje)

//     }

//     const handleMensaje = (e) => {
//         setMensaje(e.target.value)
//     }

//     const toggleModo = () => {
//         setModoOscuro(prev => !prev)
//     }

//     const handleTeclado = (e) => {
//         if (e.key === "Enter") {
//             handleGuardarClick()
//         }
//     }

//     return (
//         <div>
//             <div style= {{}}>
//                 <p>Input Controlado</p>
//                 <input
//                     type="text"
//                     value= {mensaje}
//                     onChange= {handleMensaje}
//                     onKeyDown={handleTeclado} // Detectar tecla Enter
//                 />
//                 <button onClick={handleGuardarClick}>Guardar</button>
//                 <p>Mensaje: {mensaje}</p>

//                 <p>Mensaje Guardado: {mensajeGuardado}</p>
//             </div>

//             <div style={ modoOscuro ? cajas.azulOscuro : cajas.azul}>
//                 <p> {modoOscuro ? "Modo Oscuro" : "Modo Claro"} </p>
//                 <button onClick={toggleModo}>Cambiar</button>
        
//             </div>
//             <CajaSecundaria
//                 mensaje={mensaje}
//                 onMensajeChange={setMensaje}/>
//             <CajaConEstadoInterno mensajeInicial={mensajeGuardado} />

//         </div>
        
//     );
// }
// export default Eventos

// function CajaSecundaria ({ mensaje, onMensajeChange}) {
//     return (
//         <div>
//             <p>Caja Secundaria</p>
//             <input
//                 type="text"
//                 value= {mensaje}
//                 onChange={(e) => onMensajeChange(e.target.value) }  />
//         </div>
//     );
// }

// function CajaConEstadoInterno ({mensajeInicial}) {
//     const [mensajeInterno, setMensajeInterno] = useState(mensajeInicial);
//     return (
//         <div>
//             <p>Caja con estado Interno (state from props)</p>
//             <input type="text" 
//                 value={mensajeInterno}
//                 onChange= {(e) => setMensajeInterno(e.target.value)}
//                 />
//                 <p>Local: {mensajeInterno}</p>
//                 <p>Inicial (prop): {mensajeInicial}</p>
//         </div>
//     )
// }