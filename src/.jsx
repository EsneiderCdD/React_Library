import { useState, useEffect } from 'react'
import PropCard from ''
import getData from ''

function Index() {
    const [devTools, setDevTools] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function Card() {
            try {
                setLoading(true);
                const data = await getData();

                setDevTools(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        Card();
    }, []);

    if (loading) return <h1>Cargando ...</h1>
    if (error) return <h1>Error : {error} </h1>

    return (
        <div>
            <h1>Parece que ya lo tienes.</h1>
            {devTools.map((tool) => (
                <PropCard
                    key={tool.id}
                    title={tool.title}
                    url={tool.url}
                    description={tool.description}
                    image={tool.image}
                >
                </PropCard>
            ))
            }
        </div>
    )
}
export default Index
