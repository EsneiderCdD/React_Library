// 📌📌📌📌📌 IF 📌📌📌📌📌

// estructura condicionales 
// Es útil cuando el contenido que se muestra depende de una lógica más extensa o compleja que no se puede expresar cómodamente con un ternario o un &&.

import React from 'react';

export default function CondicionalIf() {
  const user = {
    nombre: 'Juan',
    logueado: true, // Prueba cambiando esto a false
  };

  let contenido;

  if (user.logueado) {
    contenido = <h2>Bienvenido, {user.nombre}!</h2>;
  } else {
    contenido = <h2>Por favor, inicia sesión.</h2>;
  }

  return (
    <div>
      <h1>Renderizado con if</h1>
      {contenido}
    </div>
  );
}

// Variación común
// Podrías usar múltiples if/else if/else para distintas vistas

//-Ternario-> Logica simple
//-&&-> Condicion simple
//-if-> Logica compleja



// 📌📌📌📌📌 Ternario  📌📌📌📌📌


function CondicionalTernario() {
  const modoOscuro = true; // Prueba cambiando a false

  return (
    <div>
      <h1>Renderizado con Ternario</h1>
      <p>
        {modoOscuro ? '🌙 Modo oscuro activado' : '☀️ Modo claro activado'}
      </p>
    </div>
  );
}

const CondicionalTernario = ({ isLoggedIn }) => {
    return (
      <div>
        <h2>Renderizado con Ternario ( ? : )</h2>
  
        {isLoggedIn ? (
          <p>Bienvenido de nuevo, usuario 🤓</p>
        ) : (
          <p>Por favor, inicia sesión 🔒</p>
        )}
      </div>
    );
  };


// 📌📌📌📌📌 &&  📌📌📌📌📌

// ¿Cuándo usarlo?
// ✅ Cuando querés renderizar sólo si la condición es verdadera
// ❌ No lo uses si necesitás mostrar algo distinto cuando es falso (ahí conviene un ternario)


function CondicionalAND() {
  const estaLogueado = true; // Cambiá a false para probar

  return (
    <div>
      <h1>Renderizado con AND (&&)</h1>

      {estaLogueado && (
        <p>🔐 Bienvenido, usuario logueado.</p>
      )}
    </div>
  );
}



const CondicionalAND = ({ age }) => {
    return (
      <div>
        <h2>Renderizado con AND (&&)</h2>
  
        {age >= 18 && <p>Bienvenido a la plataforma 🧑‍💻</p>}
     
        {age < 18 && <p>Lo siento, necesitas ser mayor de 18 para acceder 🔞</p>}
      </div>
    );
  };
  
