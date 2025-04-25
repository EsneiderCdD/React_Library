
import {useState} from 'react';

function Estados () {

    const cajas = {
        azul: {background : "#add8e6", height: "200px", width: "200px"},
        azulOscuro: {background :"#001f3f", height: "200px", width: "200px"},
    }

    const [mensaje, setMensaje] = useState("");
    const [mensajeGuardado, setMensajeGuardado] = useState("");

    const [modoOscuro, setModoOscuro] = useState(false);


    const validarMensaje = () => {
        return mensaje.trim() !== ""
    };

    

    const handleGuardarClick = () => {
        if (!validarMensaje()) {
            alert("El mensaje no puede estar vacío");
            return;
        }
        setMensajeGuardado(mensaje);
        console.log("Mensaje Guardado", mensaje)

    }


    const handleMensaje = (e) => {
        setMensaje(e.target.value)
    }

    const toggleModo = () => {
        setModoOscuro(prev => !prev)
    }

    return (
        <div style= {{}}>
            <p>Input Controlado</p>
            <input 
                type="text"
                value= {mensaje}
                onChange= {handleMensaje} 
            />
            <button onClick={handleGuardarClick}></button>

            <p>Mensaje: {mensaje}</p>
          
            <p>Mensaje Guardado: {mensajeGuardado}</p>
            
        </div>
    );
}
export default Estados
