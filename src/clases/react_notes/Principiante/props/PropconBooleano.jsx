const StatusMessage = (props) => {
    return <p>{props.isActive ? "El estado está activo ✅" : "El estado está inactivo ❌"}</p>;
  };
  
  export default StatusMessage;

  {/*
    import StatusMessage from "./PropconBoolean";

    function App() {
    return (
        <div>
        <h1>Ejemplo de Props con Booleanos</h1>
        <StatusMessage isActive={true} />
        <StatusMessage isActive={false} />
        <StatusMessage isActive={true} />
        </div>
    );
    }

    export default App;

    const StatusMessage = ({ isActive }) => {
    return <p>{isActive ? "El estado está activo ✅" : "El estado está inactivo ❌"}</p>;
    };

    export default StatusMessage;


    
    */}