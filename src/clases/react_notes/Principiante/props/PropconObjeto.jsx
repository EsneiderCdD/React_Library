const UserCard = (props) => {
    return (
      <div>
        <h2>Nombre: {props.user.name}</h2>
        <p>Edad: {props.user.age}</p>
        <p>Correo: {props.user.email}</p>
      </div>
    );
  };
  
  export default UserCard;

  {/*import UserCard from "./PropconObjeto";

function App() {
  return (
    <div>
      <h1>Ejemplo de Props con Objetos</h1>
      <UserCard user={{ name: "Juan Pérez", age: 30, email: "juan@email.com" }} />
      <UserCard user={{ name: "Ana Gómez", age: 25, email: "ana@email.com" }} />
      <UserCard user={{ name: "Carlos López", age: 40, email: "carlos@email.com" }} />
    </div>
  );
}

export default App;
 */}
  