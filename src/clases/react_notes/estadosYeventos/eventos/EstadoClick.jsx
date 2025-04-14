// 🧠 ¿Qué hace?
// 🧠 Muestra cómo usar un evento onClick en React.
// 🛑 No usar paréntesis en onClick si no se necesita ejecutar inmediatamente.
// ✅ JSX usa camelCase: onClick, no onclick.


const EventoClick = () => {
    const handleClick = () => {
      console.log("¡Haz hecho clic en el botón!");
      alert("¡Hola! Este es un evento onClick en React.");
    };
  
    return (
      <div>
        <h2>Ejemplo de Evento Click</h2>
        <button onClick={handleClick}>Haz clic aquí</button>
      </div>
    );
  };
  
  export default EventoClick;
  