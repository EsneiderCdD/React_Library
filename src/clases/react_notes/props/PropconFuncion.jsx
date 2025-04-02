const ActionButton = (props) => {
    return (
      <button onClick={props.onAction}>
        {props.label}
      </button>
    );
  };
  
  export default ActionButton;
  
  {/*import ActionButton from "./PropconFunciones";

function App() {
  // Funciones de ejemplo para manejar el clic
  const handleClickAlert = () => {
    alert("¡Botón clickeado!");
  };

  const handleClickConsole = () => {
    console.log("Se hizo clic en el botón");
  };

  return (
    <div>
      <h1>Ejemplo de Props con Funciones (Callbacks)</h1>
      <ActionButton onAction={handleClickAlert} label="Mostrar Alerta" />
      <ActionButton onAction={handleClickConsole} label="Imprimir en Consola" />
    </div>
  );
}

export default App;




const ActionButton = ({ onAction, label }) => {
  return (
    <button onClick={onAction}>
      {label}
    </button>
  );
};

export default ActionButton;

 */}