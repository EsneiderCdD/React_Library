
import { useState } from "react";

const CondicionRolMultiple = () => {
  const [rol, setRol] = useState("usuario"); // "usuario" | "admin"
  const [estaSuscrito, setEstaSuscrito] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Área de Administración</h2>

      {rol === "admin" && estaSuscrito && (
        <p>✅ Acceso completo concedido. ¡Bienvenido, Admin Premium!</p>
      )}

      {(!estaSuscrito || rol !== "admin") && (
        <p>⚠️ Acceso limitado. Se requiere rol de admin y suscripción activa.</p>
      )}

      <br />

      {/* Controles para cambiar estado */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Rol:
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Suscripción:
          <input
            type="checkbox"
            checked={estaSuscrito}
            onChange={() => setEstaSuscrito(!estaSuscrito)}
          />
          Activa
        </label>
      </div>
    </div>
  );
};

export default CondicionRolMultiple;
