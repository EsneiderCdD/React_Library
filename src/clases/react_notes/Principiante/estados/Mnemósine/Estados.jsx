
import {useState} from 'react';
function Eventos () {
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

    const handleTeclado = (e) => {
        if (e.key === "Enter") {
            handleGuardarClick()
        }
    }

    return (
        <div>
            <div style= {{}}>
                <p>Input Controlado</p>
                <input
                    type="text"
                    value= {mensaje}
                    onChange= {handleMensaje}
                    onKeyDown={handleTeclado} // Detectar tecla Enter
                />
                <button onClick={handleGuardarClick}>Guardar</button>
                <p>Mensaje: {mensaje}</p>

                <p>Mensaje Guardado: {mensajeGuardado}</p>
            </div>

            <div style={ modoOscuro ? cajas.azulOscuro : cajas.azul}>
                <p> {modoOscuro ? "Modo Oscuro" : "Modo Claro"} </p>
                <button onClick={toggleModo}>Cambiar</button>
        
            </div>
            <CajaSecundaria
                mensaje={mensaje}
                onMensajeChange={setMensaje}/>
            <CajaConEstadoInterno mensajeInicial={mensajeGuardado} />

        </div>
        
    );
}
export default Eventos

function CajaSecundaria ({ mensaje, onMensajeChange}) {
    return (
        <div>
            <p>Caja Secundaria</p>
            <input
                type="text"
                value= {mensaje}
                onChange={(e) => onMensajeChange(e.target.value) }  />
        </div>
    );
}

function CajaConEstadoInterno ({mensajeInicial}) {
    const [mensajeInterno, setMensajeInterno] = useState(mensajeInicial);
    return (
        <div>
            <p>Caja con estado Interno (state from props)</p>
            <input type="text" 
                value={mensajeInterno}
                onChange= {(e) => setMensajeInterno(e.target.value)}
                />
                <p>Local: {mensajeInterno}</p>
                <p>Inicial (prop): {mensajeInicial}</p>
        </div>
    )
}