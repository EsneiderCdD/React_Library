
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

    <DiosesOlimpo 
        nombre= "Zeus"
        edad= {99}   
        descripcion= "Dios del olimpo"
        imagen= {Zeus}
        familia= {familia}
        
    />  

    )
}

export default App