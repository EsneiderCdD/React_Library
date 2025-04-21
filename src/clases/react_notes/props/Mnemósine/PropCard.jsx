import React from "react";

function PropCard ({nombre, edad, descripcion, imagen }) {
    return (
        <div>
            <p>{nombre}</p>
            <p>{edad}</p>
            <p>{descripcion}</p>
            <img src={imagen} alt="Imagen" />
        </div>
    );
}

export default PropCard

{/* 

import PropCard from "./clases/react_notes/props/Mnemósine/PropCard";


function App() {

    return (

    <PropCard 
        nombre= "Mnemósine"
        edad= {20}   
        descripcion= "El Dios de la memoria ha regresado de nuevo"
        imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfkmb9u3Gr-TSt1Gz6zRb4v-65xb1WMfJRg&s"
    />  

    )
}

export default App


    
    
    */}