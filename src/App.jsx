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