
import {useState} from 'react';

function Estados() {

    const [cajas, setCajas] = useState([
        { id: 1, mensaje: "", color: "red" },
        { id: 2, mensaje: "", color: "green" },
        
    ]);

    const [mensaje, setMensaje] = useState("");
    const [cajasSeleccionadas, setCajasSeleccionadas] = useState([]);
    const [efectosSeleccionados, setEfectosSeleccionados] = useState([]);

    
    const efectos = {
        1: (caja) => ({ ...caja, mensaje }), // Aplica el mensaje a la caja
    };

    const procesar = () => {
        const nuevasCajas = cajas.map((caja) => {
            if (!cajasSeleccionadas.includes(caja.id)) return caja;

            // Aplicar todos los efectos en orden    
            let cajaModificada = { ...caja };
            efectosSeleccionados.forEach((efectoId) => {
                const efecto = efectos[efectoId];
                if (efecto) {
                    cajaModificada = efecto(cajaModificada);
                }
            });
            return cajaModificada;
        });
        setCajas(nuevasCajas);
    };
    
    const toggleSeleccionCaja = (id) => {
        if (cajasSeleccionadas.includes(id)) {
            setCajasSeleccionadas(cajasSeleccionadas.filter((c) => c !== id));
        } else {
            setCajasSeleccionadas([...cajasSeleccionadas, id]);
        }
    };

    const toggleSeleccionEfecto = (efectoId) => {
        if (efectosSeleccionados.includes(efectoId)) {
            setEfectosSeleccionados(efectosSeleccionados.filter((e) => e !== efectoId));
        } else {
            setEfectosSeleccionados([...efectosSeleccionados, efectoId]);
        }
    };

    const Boton = ({ id, texto, descripcion }) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button 
                    onClick={() => toggleSeleccionEfecto(id)} 
                    style={{
                    background: "#cccccc",
                    height: "50px",
                    width: "200px",
                    marginBottom: "1rem"
                }}>
                {texto}
                </button>
                <span> {descripcion} </span>

            </div>
        );
    };
    
    const Caja = ({id, color, mensaje}) => {
        const seleccionada = cajasSeleccionadas.includes(id);
        const borde = seleccionada ? "5px solid black" : "none";
        const cajaBase = {
            background: color,
            height: "200px",
            width: "200px",
            border: borde,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        return (
            <div
                style={cajaBase}
                onClick={() => toggleSeleccionCaja(id)}
            >
                <span>{mensaje}</span>
            </div>
        );
    }

    return (

        <div 
            style={{
                background: "#add8e6",
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <h1>Estados</h1>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem"  }}>
                <Boton 
                    texto="Boton 1" 
                    descripcion="Primer Boton: Input Controlado" 
                    id={1}

                >   
                </Boton>
                
            </div>
                <input 
                    type="text"
                    placeholder="Escribe algo..."
                    style={{width:"200px"}}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)} 
                />

                <div style={{ display: "flex", gap: "1rem" }}>
                    {cajas.map((caja) => (
                        <Caja
                            key={caja.id}
                            id={caja.id}
                            color={caja.color}
                            mensaje={caja.mensaje}
                        />
                    ))}
                </div>

                <button
                    onClick={procesar}
                        style={{
                        marginTop: "2rem",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        background: "#4CAF50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        }}    
                    >
                        Procesar
                </button>

        </div>

    ); 
}
export default Estados;