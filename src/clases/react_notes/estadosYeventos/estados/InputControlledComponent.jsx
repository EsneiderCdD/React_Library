// 📌 ¿Para qué sirve?
// Permite vincular un input de formulario con el estado de React. Así el componente "controla" lo que se escribe.
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Email: ${email} | Contraseña: ${contrasena}`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>🧪 Ejemplo: Formulario Controlado</h2>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario@example.com"
        />
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="••••••••"
        />
      </div>

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
