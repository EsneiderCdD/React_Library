// //Antes
// fetch('url')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// //Ahora
// async function cargarDatos() {
//   try {
//     const res = await fetch('url');
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// //React
// useEffect(() => {
//   async function obtenerDatos() {
//     try {
//       const res = await fetch('url');
//       const data = await res.json();
//       // setData(data), etc.
//     } catch (error) {
//       // setError(error.message), etc.
//     }
//   }

//   obtenerDatos(); // ¡Importante! Llamamos la función
// }, []);

;
import { div } from "framer-motion/client";
// import { useState, useEffect } from 'react';

// function Pelicula() {

//   const [pelicula, setPelicula] = useState(null);

//   useEffect(() => {
//     async function obtenerPelicula() {
//       const rest = await fetch('https://www.omdbapi.com/?apikey=thewdb&t=Inception');
//       const data = await rest.json();
//       setPelicula(data); // Guardamos la data en el estado

//     }

//     obtenerPelicula();
//   }, []);

//   return (
//     <div>
//       <h2>Datos de la pelicula</h2>
//       {pelicula && (
//         <div>
//           <h3>
//             {pelicula.Title}
//             <p><strong>Año: </strong> {pelicula.Year}</p>
//             <img src={pelicula.Poster} alt={pelicula.Title} 
//             width="300"/>
//           </h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Pelicula;


// useEffect(() => {
//   fetch('https://www.omdbapi.com/?apikey=thewdb&t=Inception')
//     .then(res => res.json())
//     .then(data => setPelicula(data));
// }, []);



// import { useState, useEffect } from 'react';

// function Personaje() {
//   // 🧠 1. Estado para guardar los datos
//   const [personaje, setPersonaje] = useState(null);

//   // 🌀 2. Estado para loading (estamos cargando?)
//   const [loading, setLoading] = useState(true);

//   // ⚠️ 3. Estado para error (algo salió mal?)
//   const [error, setError] = useState(null);

//   // 🧠 4. useEffect al montar el componente
//   useEffect(() => {
//     // Declaramos una función async porque queremos usar await
//     async function obtenerPersonaje() {
//       try {
//         // Indicamos que estamos empezando a cargar
//         setLoading(true);

//         const res = await fetch('https://rickandmortyapi.com/api/character/1');

//         // ⚠️ Verificamos si hubo un error en la respuesta
//         if (!res.ok) {
//           throw new Error('No se pudo cargar el personaje');
//         }

//         const data = await res.json(); // Obtenemos los datos como objeto JS
//         setPersonaje(data);            // Guardamos los datos en el estado
//       } catch (err) {
//         setError(err.message);        // Guardamos el mensaje de error
//       } finally {
//         setLoading(false);            // Apagamos el estado de carga SIEMPRE
//       }
//     }

//     // Llamamos a la función dentro de useEffect
//     obtenerPersonaje();
//   }, []); // Solo se ejecuta 1 vez al montar el componente

//   // 🔁 5. Renderizado condicional
//   if (loading) return <p>Cargando personaje...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>{personaje.name}</h2>
//       <img src={personaje.image} alt={personaje.name} width="200" />
//       <p><strong>Estado:</strong> {personaje.status}</p>
//       <p><strong>Especie:</strong> {personaje.species}</p>
//       <p><strong>Origen:</strong> {personaje.origin.name}</p>
//     </div>
//   );
// }

// export default Personaje;
// import { useEffect, useState } from "react";

// function Personaje () {
//   const [personaje, setPersonaje] =  useState(null);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null);
  
//   useEffect (() => {
//     async function obtenerPersonaje () {
//       try {
//         setLoading (true);
//         const res = await fetch('https://rickandmortyapi.com/api/character/1');
       

//           if (!res.ok) { throw new Error ('Lo sentimos, no pudimos cargar el personaje');
//       }

//         const data = await res.json();
//         setPersonaje(data); 
//     } catch (err) {
//       setError (err.message);
//     } finally {
//       setLoading (false);
//     }
  
//     }
          
//     obtenerPersonaje();
//     }, []);

//     if (loading) return <p>Cargando personaje...</p>
//     if (error) return <p>Error: {error}</p>

//     return (
//       <div>
//         <h2>{personaje.name}</h2>
//         <img src={personaje.image} alt={personaje.name} />
//         <p>{personaje.species}</p>
//         <p>{personaje.gender}</p>
//         <p>{personaje.status}</p>
//       </div>
//     );
//   }

//   export default Personaje


//   useEffect(() => {
//   fetch('https://rickandmortyapi.com/api/character/1')
//     .then(res => {
//       if (!res.ok) throw new Error('No se pudo cargar el personaje');
//       return res.json();
//     })
//     .then(data => {
//       setPersonaje(data);
//       setLoading(false);
//     })
//     .catch(err => {
//       setError(err.message);
//       setLoading(false);
//     });
// }, []);

import { useEffect, useState } from "react";

function RickMorty () {
  const [busqueda, setBusqueda] = useState ('');
  const [personaje, setPersonaje] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function buscarPersonaje (e) {
    e.preventDefault(); 

    setLoading (true);
    setError (null);

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`);

      if (!res.ok) {
        throw new Error ('No se pudo cargar el personaje');
      }

      const data = await res.json(); 
      setPersonaje(data.results);
    } catch (err) {
      setError (err.message);
      setPersonaje ([]);
    } finally {
      setLoading (false);
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