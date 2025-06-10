import { useState } from "react";

function EstadosYEventos () {

    const [efectosSeleccionados, setEfectosSeleccionados] = useState([]);
    const [cajasSeleccionadas, setCajasSeleccionadas] = useState([]);
    const [mensaje, setMensaje] = useState("");

    const toggleCajasSleccionadas = (id) => {
        if (cajasSeleccionadas.includes(id)) {
            setCajasSeleccionadas(cajasSeleccionadas.filter((e) => e !== id));
        } else {
            setCajasSeleccionadas ([...cajasSeleccionadas, id])
        };        
    }
    const Boton = ({texto, descripcion}) => {
        return (
            <div style={{
                height: "50px",
                width: "200px",
               
            }}>
                <div><button>{texto}</button></div>
                <span>{descripcion}</span>
            </div>
            

        );
    }
    const Caja = ({}) => {
        return (
            <div style={{
                background: "red",
                height: "200px",
                width: "200px",
                
            }}>
            </div>
        );
    }
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Estados y Eventos</h1>
            <div style={{display: "flex" }}>
                <Boton texto="Boton 1" descripcion="Descripcion del Boton 1"/>
                <Boton texto="Boton 2"/>
            </div> 
            <div style={{display: "flex" }}>
                <Caja/>
                <Caja/>
            </div> 
        </div>

    );
}
export default EstadosYEventos