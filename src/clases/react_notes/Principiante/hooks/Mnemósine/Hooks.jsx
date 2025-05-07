import {useState} from  "react";

export default function Hooks () {
    const [formulario, setFormulario] = useState({
        nombre: "",
        edad: "",
        email: "",
        

    });

    const handleChange = (e) => {
        const {name,value} = e.target; 
        setFormulario((prev) => ({...prev, [name]: value}));
    };

    return (
        <div style= {{ padding : "1rem"}}>
            <h2>🧪 Ejemplo: Hooks</h2>
            <input name="nombre" value={formulario.nombre} onChange={handleChange} placeholder="Nombre" />
            <input name="edad" value={formulario.edad} onChange= {handleChange} placeholder="Edad" />
            <input name="email" value={formulario.email} onChange={handleChange} placeholder="Email" />
            <pre>{JSON.stringify(formulario, null, 2)}</pre>

        </div>
    )
}