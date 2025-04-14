// 🧠 React usa SyntheticEvent: un wrapper del evento nativo
// Permite comportamiento consistente entre navegadores
// En React 17+ ya no hay pooling de eventos
// 🧬 SyntheticEvent: evento que React usa internamente
// 🎯 Igual para todos los navegadores, previene bugs de compatibilidad
// 🔍 e.nativeEvent permite acceder al evento DOM puro


const EventoSynthetic = () => {
    const handleClick = (e) => {
      console.log("SyntheticEvent:", e);
      console.log("Tipo:", e.type);
      console.log("Elemento objetivo:", e.target.tagName);
      console.log("Evento nativo:", e.nativeEvent);
    };
  
    return (
      <button onClick={handleClick}>
        Haz click para ver detalles del evento
      </button>
    );
  };
  
  export default EventoSynthetic;
  