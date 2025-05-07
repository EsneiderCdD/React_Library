const Greeting = ({ name }) => {
    // Si name es null o undefined, se asigna "Invitado"
    const displayName = name ?? "Invitado";
    return <p>Hola, {displayName}!</p>;
  };
  
  export default Greeting;

  { /* 
    Trampilla con ?? (Valor por Defecto Solo si es null o undefined)
    📌 ¿Para qué sirve?
    El operador ?? (nullish coalescing) asigna un valor por defecto solo cuando la variable es null o undefined. 
    Es útil para evitar reemplazar valores válidos como 0, "" o false.


    import Greeting from "./NullishCoalescing";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Valor por Defecto con Nullish Coalescing (??)</h1>
        <Greeting name="Lucía" />
        Si se pasa name="" se respeta el valor vacío 
        <Greeting name="" />
        Si se pasa null o se omite, se usa "Invitado" 
        <Greeting name={null} />
        <Greeting />
        </div>
    );
    }

    export default App;
 */}