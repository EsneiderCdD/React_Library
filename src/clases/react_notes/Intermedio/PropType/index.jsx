import { useState, useEffect } from 'react'
import Props from '@intermedio/PropType/Props/02_Planteamientos/Props.jsx'
import { getDevTools } from '@intermedio/APIs/02_Planteamientos/Problemas/Soluciones/devTools.js'



function Index() {
    const [devTools, setDevTools] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {


            try {
                setLoading(true);
                const data = await getDevTools();
                setDevTools(data);

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>Cargando datos ... </p>;
    if (error) return <p>Error: {error} </p>;


    return (
        <div>
            <h1>Developer Tools</h1>
            
            {devTools.map((tool) => (
                <Props
                    key={tool.id}
                    id={tool.id}
                    title={tool.title}
                    descripcion={tool.descripcion}
                    url={tool.url}

                >

                </Props>
            ))}



        </div>
    )

}
export default Index;