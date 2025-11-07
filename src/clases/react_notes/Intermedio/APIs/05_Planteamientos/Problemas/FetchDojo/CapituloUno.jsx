// // Empiezas a dominar la lectura de APIs con humildad.🥋
// // GET ->

// import { useState, useEffect, use } from 'react'

// function Personaje() {
//     const [personaje, setPersonaje] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function obtenerPersonaje() {
//             try {
//                 setLoading(true);
//                 const res = await fetch('https://rickandmortyapi.com/api/character/747');
//                 if (!res.ok) {
//                     throw new Error('Houston! Houston tenemso un problema')
//                 }
//                 const data = await res.json();
//                 setPersonaje(data);

//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         obtenerPersonaje();
//     }, []);

//     if (loading) return <h1>Esperando...</h1>;
//     if (error) return <h1>la has cagado...{error}</h1>;

//     return (

//         <>
//             <img src={personaje.image} alt="Fetch" width={250} />
//         </>
//     );
// }
// export default Personaje;


// // GET -> ¿ Y si fueran varios ?

// import { useState, useEffect } from 'react'

// function Personajes() {
//     const [personajes, setPersonajes] = useState([]); // ( ͡👁️ ͜ʖ ͡👁️)  Ahora es un Array
//     const [loading, setLoading] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         async function obtenerPersonajes() {
//             try {
//                 setLoading(true);
//                 const res = await fetch('https://rickandmortyapi.com/api/character/');
//                 if (!res.ok) {
//                     throw new Error('Houston, Houston!');
//                 }
//                 const data = await res.json();
//                 setPersonajes(data.results.slice(0, 5)); // ( ͡👁️ ͜ʖ ͡👁️) Objeto(data) -> Propiedad(results) -> Extraemos.
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         obtenerPersonajes();

//     }, []);

//     if (error) return <h1> Ey! : {error}</h1>;
//     if (loading) return <h1> Esperando ... </h1>;

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column'}}>
//             <h1>Ahora somos 5</h1>
//             {personajes.map((p) => ( // ( ͡👁️ ͜ʖ ͡👁️)  Mapear, LLave y Pintar
//                 <div key={p.id}>
//                     <img src={p.image} alt="Fetch con 5" />
//                     <p>{p.name}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default Personajes;
