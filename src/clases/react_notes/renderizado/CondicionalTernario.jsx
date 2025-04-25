{/*
    If: Estructura de control, no se puede usar directamente en JSX.
    &&: Operador lógico, se puede usar en JSX.
    ? : Ternario, se puede usar en JSX.
    
    */}

const CondicionalTernario = ({ isLoggedIn }) => {
    return (
      <div>
        <h2>Renderizado con Ternario ( ? : )</h2>
  
        {/* Usamos el ternario para decidir qué mostrar */}
        {isLoggedIn ? (
          <p>Bienvenido de nuevo, usuario 🤓</p>
        ) : (
          <p>Por favor, inicia sesión 🔒</p>
        )}
      </div>
    );
  };
  
  export default CondicionalTernario;
  