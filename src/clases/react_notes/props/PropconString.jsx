const Mensaje = (props) => {
    return (
        <h1>{props.mensaje}</h1>
    )
}
export default Mensaje

{/* 
    
import Message from "./PropconString";

function App() {
  return (
    <div>
      <h1>Ejemplo de Props con String</h1>
      <Message text="¡Hola, esto es un mensaje!" />
      <Message text="Las props son reutilizables" />
      <Message text="Este es otro mensaje con una prop de tipo string" />
    </div>
  );
}

export default App;


USANDO DESTRUCTURING

const Message = ({ text }) => {
  return <p>{text}</p>;
};

export default Message;


*/}