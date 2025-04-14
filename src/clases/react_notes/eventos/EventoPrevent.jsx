// ✋ preventDefault() detiene acciones como recarga o navegación.
// ✅ Útil en formularios y enlaces para tener control total.
// 🔄 React usa Synthetic Events: mismo API que el DOM pero optimizado.
// 🧠 preventDefault() evita que el navegador ejecute el comportamiento por defecto.
// Se usa mucho en formularios para evitar recargas de página.

const EventoPrevent = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Formulario enviado (sin recargar la página)");
    };
  
    return (
      <div>
        <h2>Formulario controlado con preventDefault</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Escribe algo..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default EventoPrevent;
  