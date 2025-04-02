const ButtonDefault = ({ label = "Click aquí" }) => {
    return <button>{label}</button>;
  };
  
  export default ButtonDefault;
  
  {/*
    import ButtonDefault from "./PropDefault";

    function App() {
    return (
        <div>
        <h1>Ejemplo de Valor por Defecto en Props</h1>
        
        <ButtonDefault />
        
        <ButtonDefault label="Enviar" />
        </div>
    );
    }

    export default App;


    ***USO DE ECMASCRIPT 6***

    
    */}