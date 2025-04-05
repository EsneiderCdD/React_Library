import { useState } from "react";

const CondicionPermisoBoton = () => {
  const [tienePermiso, setTienePermiso] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Panel de administración</h2>

      {/* Renderiza el botón solo si tienePermiso es true */}
      {tienePermiso && <button>Eliminar usuario</button>}

      <br /><br />
      <button onClick={() => setTienePermiso(!tienePermiso)}>
        {tienePermiso ? "Revocar permiso" : "Conceder permiso"}
      </button>
    </div>
  );
};

export default CondicionPermisoBoton;
