// PrevenirEventos.jsx
const PrevenirEventos = () => {
    const manejarEnvio = (e) => {
      e.preventDefault();
      alert("Formulario detenido 🛑, aquí puedes hacer validaciones o enviar data con fetch.");
    };
  
    const manejarClickPadre = () => {
      alert("Click en el CONTENEDOR");
    };
  
    const manejarClickHijo = (e) => {
      e.stopPropagation();
      alert("Click en el BOTÓN, pero evitamos que suba al contenedor 🚫");
    };
  
    return (
      <div style={{ padding: "16px" }}>
        <h2>Prevenir Eventos</h2>
  
        <form onSubmit={manejarEnvio}>
          <input type="text" placeholder="Tu nombre" />
          <button type="submit">Enviar</button>
        </form>
  
        <div onClick={manejarClickPadre} style={{ marginTop: "24px", padding: "12px", border: "1px solid gray" }}>
          <p>Contenedor</p>
          <button onClick={manejarClickHijo}>Botón hijo</button>
        </div>
      </div>
    );
  };
  
  export default PrevenirEventos;
  