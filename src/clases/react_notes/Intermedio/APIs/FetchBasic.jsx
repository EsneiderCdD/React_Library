// 🎓 FETCH 
//  Es una función nativa de JavaScript que nos permite hacer solicitudes HTTP a servidores y obtener (o enviar) datos. 

// SINTAXIS BASICA
fetch("https://api.example.com/datos")
  .then(res => res.json())
  .then(data => {
    // Aquí tienes los datos
  })
  .catch(error => {
    // Manejo de errores
  });

// SINTAXIS MAS MODERNA
const res = await fetch("https://api.example.com/datos");
const data = await res.json();



