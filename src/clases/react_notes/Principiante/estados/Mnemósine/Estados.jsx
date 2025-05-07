import {useState, useEffect } from "react";

const NombreEditable = ({nombreInicial}) => {
    const [nombre, setNombre] = useState(nombreInicial);

    //actualizacion del estado
    useEffect(() => {
        setNombre(nombreInicial);
    }, [nombreInicial]);


    return (
        <div>
            <input 
                value= {nombre}
                onChange= {(e) => setNombre(e.target.value)}/>
            <p>Nombre actual: {nombre} </p>
        </div>
    );
};