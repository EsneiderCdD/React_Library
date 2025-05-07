const ToggleMessage = (props) => {
    return (
      <div>
        <h2>Mensaje Principal</h2>
        {/* Si props.showDetails es true, se muestra el detalle */}
        {props.showDetails && <p>Este es un mensaje detallado que se muestra solo cuando está activo.</p>}
      </div>
    );
  };
  
  export default ToggleMessage;
  {/*
    import ToggleMessage from "./PropBooleanVariant";

function App() {
  return (
    <div>
      <h1>Ejemplo de Booleanos para Activar/Desactivar Funcionalidad</h1>
       Con showDetails activado 
      <ToggleMessage showDetails />
       Sin showDetails (se omite o se envía false)
      <ToggleMessage showDetails={false} />
    </div>
  );
}

export default App;


const ToggleMessage = ({ showDetails }) => {
  return (
    <div>
      <h2>Mensaje Principal</h2>
      {showDetails && <p>Este es un mensaje detallado que se muestra solo cuando está activo.</p>}
    </div>
  );
};

export default ToggleMessage;

 */}