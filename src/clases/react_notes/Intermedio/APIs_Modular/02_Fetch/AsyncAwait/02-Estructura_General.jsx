import { useState, useEffect } from 'react';

function Personaje() {
//🧠 1. Estado para guardar los datos
  const [personaje, setPersonaje] = useState(null);

//🌀 2. Estado para loading (estamos cargando?)
  const [loading, setLoading] = useState(true);

//⚠️ 3. Estado para error (algo salió mal?)
  const [error, setError] = useState(null);

//🧠 4. useEffect al montar el componente
  useEffect(() => {
//Declaramos una función async porque queremos usar await
    async function obtenerPersonaje() {
      try {
        // Indicamos que estamos empezando a cargar
        setLoading(true);

        const res = await fetch('https://rickandmortyapi.com/api/character/1');

        // ⚠️ Verificamos si hubo un error en la respuesta
        if (!res.ok) {
          throw new Error('No se pudo cargar el personaje');
        }

        const data = await res.json(); // Obtenemos los datos como objeto JS
        setPersonaje(data);            // Guardamos los datos en el estado
      } catch (err) {
        setError(err.message);        // Guardamos el mensaje de error
      } finally {
        setLoading(false);            // Apagamos el estado de carga SIEMPRE
      }
    }

    // Llamamos a la función dentro de useEffect
    obtenerPersonaje();
  }, []); // Solo se ejecuta 1 vez al montar el componente

  // 🔁 5. Renderizado condicional
  if (loading) return <p>Cargando personaje...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{personaje.name}</h2>
      <img src={personaje.image} alt={personaje.name} width="200" />
      <p><strong>Estado:</strong> {personaje.status}</p>
      <p><strong>Especie:</strong> {personaje.species}</p>
      <p><strong>Origen:</strong> {personaje.origin.name}</p>
    </div>
  );
}

export default Personaje;