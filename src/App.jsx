
// import { useState, useEffect} from 'react';

// function Productoo () {
//     const [productoo, setProductoo] = useState (null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState (null); 

//     useEffect (() => {
//         fetch('https://fakestoreapi.com/products/1')
//         .then (res => {
//             if (!res.ok) throw new Error ('Lo sentimos, no pudimos cargar el producto');
//             return res.json();
//         })
//         .then (data => {
//             setProductoo(data);
//             setLoading (false);
//         })
//         .cath (err => {
//             setError (err.message);
//             setLoading (false);
//         });
//         }, []);

//         if (loading) return <p>Cargando producto...</p>
//         if (error) return <p>Error: {error}</p>

//         return (
//             <div>
//                 <h2>{productoo.title}</h2>
//                 <p>${productoo.price}</p>
//                 <img src={productoo.image} alt={productoo.title} width="100" />
//                 <p>{productoo.description}</p>
//                 <p><strong>Categoria:</strong> {productoo.category}</p>
//             </div>
//         );

//         }

//         export default Productoo






// import { useState, useEffect} from 'react';

// function Productoo () {
//     const [productoo, setProductoo] = useState (null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState (null); 

//     useEffect (() => {
//         fetch('https://fakestoreapi.com/products/1')
//         .then (res => {
//             if (!res.ok) throw new Error ('Lo sentimos, no pudimos cargar el producto');
//             return res.json();
//         })
//         .then (data => {
//             setProductoo(data);
//             setLoading (false);
//         })
//         .catch (err => {
//             setError (err.message);
//             setLoading (false);
//         });
//         }, []);

//         if (loading) return <p>Cargando producto...</p>
//         if (error) return <p>Error: {error}</p>

//         return (
//             <div>
//                 <h2>{productoo.title}</h2>
//                 <p>${productoo.price}</p>
//                 <img src={productoo.image} alt={productoo.title} width="100" />
//                 <p>{productoo.description}</p>
//                 <p><strong>Categoria:</strong> {productoo.category}</p>
//             </div>
//         );

//         }

//         export default Productoo


import { useState , useEffect} from 'react';


function ImagenBasica() {
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImagen(data.message));
  }, []);

  return (
    <div>
      <h2>Perro aleatorio 🐶</h2>
      {imagen && <img src={imagen} alt="Perro aleatorio" width="300" />}
    </div>
  );
}

export default ImagenBasica;





