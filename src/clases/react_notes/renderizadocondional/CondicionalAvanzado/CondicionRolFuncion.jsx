import { useState } from "react";

const AdminPanel = () => <p>🔐 Panel de administrador activo</p>;
const EditorPanel = () => <p>📝 Zona de edición habilitada</p>;
const VisitantePanel = () => <p>👋 Bienvenido, visitante. Acceso limitado.</p>;

const CondicionRolFuncion = () => {
  const [rol, setRol] = useState("visitante"); // "admin" | "editor" | "visitante"

  const getRolComponent = (rol) => {
    if (rol === "admin") return <AdminPanel />;
    if (rol === "editor") return <EditorPanel />;
    return <VisitantePanel />;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Renderizado basado en Rol</h2>
      <p>Rol actual: <strong>{rol}</strong></p>

      {/* Renderizado dinámico por función */}
      {getRolComponent(rol)}

      <br />
      <label>
        Cambiar Rol:
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="visitante">Visitante</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </label>
    </div>
  );
};

export default CondicionRolFuncion;
