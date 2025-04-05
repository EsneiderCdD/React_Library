// EstadoMultiple.jsx
import { useState } from "react";

const EstadoMultiple = () => {
  const [nombre, setNombre] = useState("Esneider");
  const [edad, setEdad] = useState(25);
  const [ciudad, setCiudad] = useState("Medellín");

  return (
    <div style={{ padding: "16px", border: "2px dotted #666", borderRadius: "8px" }}>
      <h2>Estado Múltiple (Separado)</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Ciudad:</strong> {ciudad}</p>

      <button onClick={() => setNombre("CoderPro")}>Cambiar Nombre</button>
      <button onClick={() => setEdad(edad + 1)}>Aumentar Edad</button>
      <button onClick={() => setCiudad("Bogotá")}>Cambiar Ciudad</button>
    </div>
  );
};

export default EstadoMultiple;

{/*const [usuario, setUsuario] = useState({
  nombre: "Esneider",
  edad: 25,
  ciudad: "Medellín"
});

// Para actualizar solo un campo:
setUsuario({ ...usuario, edad: usuario.edad + 1 });
 */}
