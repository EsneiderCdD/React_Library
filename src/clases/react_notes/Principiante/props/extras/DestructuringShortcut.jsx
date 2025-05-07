const UserGreeting = ({ name, age }) => {
    return (
      <div>
        <p>Hola {name}, tienes {age} años.</p>
      </div>
    );
  };
  
  export default UserGreeting;

  {/*
    Atajo con Destructuración Directa
    📌 ¿Para qué sirve?
    Permite extraer props directamente en los parámetros de la función, reduciendo la repetición y mejorando la legibilidad.
    
    import UserGreeting from "./DestructuringShortcut";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Destructuración Directa en Props</h1>
        <UserGreeting name="Carlos" age={28} />
        <UserGreeting name="Ana" age={32} />
        </div>
    );
    }

    export default App;
 */
  }