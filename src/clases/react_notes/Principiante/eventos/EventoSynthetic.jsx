//React no usa directamente los eventos nativos del navegador. 
//En su lugar, usa un sistema llamado Synthetic Event (evento sintético), 
//que es un envoltorio (wrapper) del evento nativo del navegador.


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


  //Algunos eventos son:
// onClick => Evento de clic
// onChange => Evento de cambio (en inputs)
// onKeyDown => Evento de tecla presionada 
// onMouseOver => Evento de pasar el mouse por encima
// onFocus => Evento de enfoque (en inputs)
// onBlur => Evento de desenfoque (cuando se sale de un input)
// onSubmit => Evento de envío (en formularios)
// onLoad => Evento de carga (en imágenes o componentes)
// onScroll => Evento de desplazamiento (en contenedores con scroll)
// onResize => Evento de cambio de tamaño (en ventanas o elementos)
// onContextMenu => Evento de menú contextual (clic derecho)
// onDoubleClick => Evento de doble clic
// onTouchStart => Evento de inicio de toque (en dispositivos táctiles)
// onTouchEnd => Evento de finalización de toque (en dispositivos táctiles)
// onDrag => Evento de arrastre (drag)
// onDrop => Evento de soltar (drop)
//... y muchos más.
  

//Metodos de los eventos sintéticos
// stopPropagation() => Detiene la propagación del evento hacia arriba en el DOM.
// preventDefault() => Evita que el comportamiento por defecto del navegador se ejecute.  
// e.target => El elemento que disparó el evento.
// e.currentTarget => El elemento al que se le asignó el evento.
// e.type => El tipo de evento (click, change, etc.). 

