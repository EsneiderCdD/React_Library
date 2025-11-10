// import { useState, useEffect } from 'react'
// import Props from '@intermedio/PropType/Props/02_Planteamientos/Props.jsx'
// import { getDevTools } from '@intermedio/APIs/02_Planteamientos/Problemas/Soluciones/devTools.js'

// function Index() {
//     const [devTools, setDevTools] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         async function fetchData() {

//             try {
//                 setLoading(true);
//                 const data = await getDevTools();
//                 setDevTools(data);

//             } catch (err) {
//                 setError(err.message);

//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchData();
//     }, []);

//     if (loading) return <p>Cargando datos ... </p>;
//     if (error) return <p>Error: {error} </p>;

//     return (
//         <div>
//             <h1>Developer Tools</h1>

//             {devTools.map((tool) => (
//                 <Props
//                     key={tool.id}
//                     id={tool.id}
//                     title={tool.title}
//                     descripcion={tool.descripcion}
//                     url={tool.url}>
//                 </Props>
//             ))}
//         </div>
//     )

// }
// export default Index;


// (2)

// import { useState, useEffect, use } from "react";
// import getDevTools from "../APIs/02_Planteamientos/Problemas/Soluciones/devTools";
// import Props from '@intermedio/PropType/Props/02_Planteamientos/Props.jsx'

// function Index() {
//     const [developerTools, setDeveloperTools] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function devTool() {
//             try {
//                 setLoading(true);
//                 const data = await getDevTools();
//                 setDeveloperTools(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }

//         }
//         devTool();
//     }, []);

//     if (loading) return <h1>Cargando Rey...</h1>
//     if (error) return <h1>Error : {error}</h1>

//     return (
//         <div>
//             <h1>Hola Crack te felicito estas melo en react</h1>
//             <h2>Ya sabes que tienes que hacer</h2>
//             {developerTools.map((tool) => (
//             <Props
//                 key={tool.id}
//                 title={tool.title}
//                 url={tool.url}
//                 descripcion={tool.descripcion}
//             >
//             </Props>
//             ))}
//         </div>
//     )

// }
// export default Index;


import { useState, useEffect } from "react";
import fetchData from "../APIs/02_Planteamientos/Problemas/Soluciones/devTools";
import Props from "@intermedio/PropType/Props/02_Planteamientos/Props.jsx";

function Index() {
    const [devTools, setDevTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function Tools() {
            try {
                setLoading(true);
                const data = await fetchData();
                setDevTools(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        Tools();
    }, []);

    if (loading) return  <h1> Cargando ... </h1>;
    if (error) return <h2> error : {error} </h2>

    return (
        <div>
            <h1>Hola crack  </h1>
            <h2>Parece que empezar por el lado mas dificil tiene sus frutos</h2>
            {devTools.map((tool) => (
                <Props
                    key={tool.id}
                    title={tool.title}
                    url={tool.url}
                    descripcion={tool.descripcion}
                >

                </Props>
            ))}
        </div>
    )
}
export default Index;