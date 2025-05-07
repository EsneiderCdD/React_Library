import { useState, useEffect } from "react";

// Componente NombreEditable separado correctamente
const NombreEditable = ({ nombreInicial }) => {
  const [nombre, setNombre] = useState(nombreInicial);

  // Actualización del estado si cambia el prop
  useEffect(() => {
    setNombre(nombreInicial);
  }, [nombreInicial]);

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Nombre actual: {nombre}</p>
    </div>
  );
};


const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    mensaje: "",
  });




const manejarCambio = (e) => {
  const { name, value } = e.target;
  setFormulario((prev) => ({
    ...prev,
    [name]: value,
  }));
}; 


const manejarEnvio = (e) => {
  e.preventDefault();
  alert(`Nombre; ${formulario.nombre}, Mensaje: ${formulario.mensaje}`)
};

  return (
    <form onSubmit={manejarEnvio}>
      <input 
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          placeholder="Tu nombre"
      />
      <textarea 
          name="mensaje"
          value={formulario.mensaje}
          onChange={manejarCambio}
          placeholder="Tu mensaje"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};



function App() {
  return (
    <div>
      <h1>Editar nombre</h1>
      <NombreEditable nombreInicial="Juan" />
      <h2>Formulario de contacto</h2>
      <Formulario />
    </div>
  );
}

export default App;
