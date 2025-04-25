import React from 'react';
const CondicionalIf = ({ isLoggedIn }) => {
    let content;
  
    // 1️⃣ Fuera del return, usamos if para decidir qué mostrar.
    if (isLoggedIn) {
      content = <p>Bienvenido de nuevo, usuario 🤓</p>;
    } else {
      content = <p>Por favor inicia sesión 🔒</p>;
    }
  
    // 2️⃣ Dentro del return, sólo usamos la variable que contiene JSX.
    return (
      <div>
        <h2>Renderizado con IF</h2>
        {content}
      </div>
    );
  };
  
  export default CondicionalIf;
  