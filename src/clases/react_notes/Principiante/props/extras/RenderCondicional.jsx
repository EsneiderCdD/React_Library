const Notification = ({ show }) => {
    return (
      <div>
        <h2>Notificaciones</h2>
        {/* Solo se renderiza si show es true */}
        {show && <p>Tienes una nueva notificación.</p>}
      </div>
    );
  };
  
  export default Notification;
{/*
    Trampilla con && (Render Condicional Corto)
    📌 ¿Para qué sirve?
    Permite renderizar algo solo si una condición es true, sin necesidad de utilizar estructuras if o el operador ternario.
    
    import Notification from "./RenderCondicional";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Render Condicional con &&</h1>
        Muestra la notificación 
        <Notification show />
        No muestra la notificación 
        <Notification show={false} />
        </div>
    );
    }

    export default App;
 */}  