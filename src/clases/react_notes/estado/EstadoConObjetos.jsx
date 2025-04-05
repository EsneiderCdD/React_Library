// EstadoConObjetos.jsx
import { useState } from "react";

const EstadoConObjetos = () => {
  const [usuario, setUsuario] = useState({
    nombre: "Esneider",
    edad: 25,
    ciudad: "Medellín"
  });

  const actualizarNombre = () => {
    setUsuario({ ...usuario, nombre: "CoderPro" });
  };

  const aumentarEdad = () => {
    setUsuario({ ...usuario, edad: usuario.edad + 1 });
  };

  const cambiarCiudad = () => {
    setUsuario({ ...usuario, ciudad: "Bogotá" });
  };

  return (
    <div style={{ padding: "16px", border: "2px dashed #007bff", borderRadius: "10px" }}>
      <h2>Estado con Objetos</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>
      <p><strong>Ciudad:</strong> {usuario.ciudad}</p>

      <button onClick={actualizarNombre}>Cambiar Nombre</button>
      <button onClick={aumentarEdad}>Aumentar Edad</button>
      <button onClick={cambiarCiudad}>Cambiar Ciudad</button>
    </div>
  );
};

export default EstadoConObjetos;
