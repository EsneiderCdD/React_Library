import { useState } from "react";

// Subcomponentes
const MensajeLogin = () => <h2>Hola, estás logueado ✅</h2>;
const MensajeLogout = () => <h2>Por favor, inicia sesión ❌</h2>;

const CondicionComponentes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {isLoggedIn ? <MensajeLogin /> : <MensajeLogout />}
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default CondicionComponentes;
