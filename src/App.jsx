import { useEffect, useState } from "react";

function RickMorty() {
    const [busqueda, setBusqueda] = useState('');
    const [personaje, setPersonaje] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function buscarPersonaje(e) {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`);

            if (!res.ok) {
                throw new Error('No se pudo cargar el personaje');
            }

            const data = await res.json();
            setPersonaje(data.results);
        } catch (err) {
            setError(err.message);
            setPersonaje([]);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <h2> Buscar Personaje</h2>

            <form onSubmit={buscarPersonaje}>
                <input type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>

            {loading && <p>Cargando personaje...</p>}

            {error && <p>Error: {error}</p>}

            <ul>
                {personaje.map(p => (

                    <li key={p.id}>
                        <h3>{p.name}</h3>
                        <img src={p.image} alt={p.name} />
                    </li>

                ))}
            </ul>
        </div>
    );

}

export default RickMorty