// // Empiezas a dominar la lectura de APIs con humildad.
// //🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋  GET -> 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋

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


// // 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋 GET -> ¿ Y si fueran varios ? 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋

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
//             {personajes.map((p) => (      // ( ͡👁️ ͜ʖ ͡👁️)  Mapear, LLave y Pintar
//                 <div key={p.id}>
//                     <img src={p.image} alt="Fetch con 5" />
//                     <p>{p.name}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default Personajes;

// // **PLUS[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅])PLUS** GET -> Objeto y Propiedades **PLUS[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅])PLUS**

// import { useEffect } from 'react'

// function Personaje() {
//     useEffect(() => {
//         async function obtenerPersonaje() {
//             const res = await fetch('https://rickandmortyapi.com/api/character/');
//             const data = await res.json();

//             console.log('--> Objeto Completo: ', data);
//             console.log('--> Propiedades Principales: ', Object.keys(data));
//             console.log('--> Primer Personaje: ', data.results[0]);
//             console.log('--> Propiedades del primer personaje: ', Object.keys(data.results[0]))
//         };
//         obtenerPersonaje();
//     }, []);

//     return (
//         <></>
//     );

// }
// export default Personaje


// // 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋 GET -> Ahora, seleccionaremos selectivamente (conociendo el indice) 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋

// import { useState, useEffect } from 'react'

// function Personaje() {

//     const [personaje, setPersonaje] = useState([]);
//     const [loading, setLoading] = useState('');
//     const [error, setError] = useState('');


//     useEffect(() => {
//         async function obtenerPersonaje() {
//             try {
//                 setLoading(true);
//                 const res = await fetch('https://rickandmortyapi.com/api/character/');

//                 if (!res.ok) {
//                     throw new Error('!Houston');
//                 }
//                 const data = await res.json();
//                 setPersonaje([data.results[0], data.results[3], data.results[5]]);  // ( ͡👁️ ͜ʖ ͡👁️)  Indice del array
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         obtenerPersonaje();
//     }, []);

//     if (loading) return <span>Cargando...</span>
//     if (error) return <span>Error: {error} </span>

//     return (
//         <div>
//             {personaje.map((p) => (
//                 <div key={p.id}>
//                     <h2>{p.name}</h2>
//                     <img src={p.image} alt="Imagen" width={250} />
//                 </div>
//             ))
//             }
//         </div>
//     );
// }
// export default Personaje;


// // 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋 GET ->Seleccionaremos selectivamente (sin saber indice, hay que buscarlo) 🥋 ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) 🥋

// import { useState, useEffect } from "react";

// function Personaje() {
//     const [personaje, setPersonaje] = useState([]);
//     const [loading, setLoading] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         async function obtenerPersonaje() {
//             try {
//                 setLoading(true);
//                 const res = await fetch('https://rickandmortyapi.com/api/character/');
//                 if (!res.ok) {
//                     throw new Error('Houston');
//                 }
//                 const data = await res.json();
//                 const ricky = data.results.find(p => p.name === 'Rick Sanchez'); // ( ͡👁️ ͜ʖ ͡👁️)  Asi buscamos
//                 const morty = data.results.find(p => p.name === 'Morty Smith'); 
//                 setPersonaje([ricky, morty]);  // ( ͡👁️ ͜ʖ ͡👁️)  
//             } catch (err) {
//                 setError(err.menssage);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         obtenerPersonaje();
//     }, []);


//     if (loading) return <p>Cargando...</p>
//     if (error) return <p>Error: {error} </p>

//     return (
//         <div>
//             {personaje.map((p) => (
//                 <div key={p.id}>
//                     <h1> {p.name} </h1>
//                     <img src={p.image} alt="Fetch" />
//                 </div>
//             )
//             )}
//         </div>
//     );
// }
// export default Personaje;


// // **PLUS[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅])PLUS** GET -> ¿Y si quiero saber un indice ? **PLUS[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅])PLUS**

// import { useEffect } from "react";

// function Index() {
//     useEffect(() => {
//         async function Buscar() {
//             const res = await fetch('https://rickandmortyapi.com/api/character/');
//             const data = await res.json();
//             const indexAD = data.results.findIndex(p => p.name === 'Agency Director')
//             console.log('El indice es: ', indexAD)

//         }
//         Buscar();
//     }, []);

//     return (
//         <>
//         </>
//     )
// }
// export default Index;