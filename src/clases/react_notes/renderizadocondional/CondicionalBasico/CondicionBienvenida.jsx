import { useState } from "react";

const CondicionBienvenida = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{isLoggedIn ? "¡Bienvenido de nuevo!" : "Por favor, inicia sesión"}</h2>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default CondicionBienvenida;
