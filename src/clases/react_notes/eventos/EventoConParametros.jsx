// EventoConParametros.jsx
const EventoConParametros = () => {
    const manejarSaludo = (nombre, e) => {
      console.log(e); // el evento, por si lo necesitas
      alert(`¡Hola, ${nombre}! 👋`);
    };
  
    return (
      <div style={{ padding: "16px" }}>
        <h2>Evento con Parámetros</h2>
  
        <button onClick={(e) => manejarSaludo("Esneider", e)}>
          Saludar a Esneider
        </button>
  
        <button onClick={(e) => manejarSaludo("React Developer", e)}>
          Saludar a React Dev
        </button>
      </div>
    );
  };
  
  export default EventoConParametros;
  