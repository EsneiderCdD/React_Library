const Checkbox = ({ checked }) => {
    return (
      <div>
        <label>
          <input type="checkbox" checked={checked} readOnly />
          {checked ? "Marcado" : "Sin marcar"}
        </label>
      </div>
    );
  };
  
  export default Checkbox;
  {/*
    Atajo con Props Booleanas (Sin Necesidad de ={true})
    📌 ¿Para qué sirve?
    Si una prop booleana es true, no es necesario escribir ={true}. Esto hace que el código sea más conciso.
    import Checkbox from "./BooleanShortcut";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Atajo con Props Booleanas</h1>
        Forma corta, se asume true 
        <Checkbox checked />
        Forma explícita, equivalente a checked={true}
        <Checkbox checked={true} />
        Marcado como false
        <Checkbox checked={false} />
        </div>
    );
    }

    export default App;

     */}