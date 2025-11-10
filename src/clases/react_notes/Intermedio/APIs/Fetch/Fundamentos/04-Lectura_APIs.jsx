// Leer y Comprender Datos de una API
// Cuando haces un fetch(...), lo que recibes suele ser un JSON. Y ese JSON puede tener:
// | Tipo de estructura        | Ejemplo en JavaScript                            |
// | ------------------------- | ------------------------------------------------ |
// | Lista (array de objetos)  | `[ { id: 1, nombre: "Juan" }, { id: 2, ... } ]`  |
// | Objeto plano              | `{ nombre: "Juan", edad: 30 }`                   |
// | Objeto con datos anidados | `{ usuario: { nombre: "Ana", ciudad: "Lima" } }` |
// | Array de arrays           | `[ [1,2], [3,4] ]` *(poco común, pero existe)*   |
// | URL de imágenes           | `"https://fotos.com/perfil.jpg"`  

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "city": "Gwenborough"
//   },
//   "company": {
//     "name": "Romaguera-Crona"
//   }
// }

// Cómo acceder a cada parte

// data.name        // "Leanne Graham"
// data.email       // "Sincere@april.biz"
// data.address.city  // "Gwenborough"
// data.company.name  // "Romaguera-Crona"

import { useState, useEffect } from 'react';

export default function Usuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar el usuario');
        return res.json();
      })
      .then(data => setUsuario(data))
      .catch(err => console.error(err));
  }, []);

  if (!usuario) return <p>Cargando usuario...</p>;

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
      <p>Ciudad: {usuario.address.city}</p>
      <p>Empresa: {usuario.company.name}</p>
    </div>
  );
}
