const ItemList = (props) => {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default ItemList;
  
  {/*import ItemList from "./PropconArray";

function App() {
  return (
    <div>
      <h1>Ejemplo de Props con Arrays</h1>
      <ItemList items={["Manzana", "Banana", "Cereza"]} />
      <ItemList items={["HTML", "CSS", "JavaScript", "React"]} />
      <ItemList items={["Correr", "Leer", "Programar"]} />
    </div>
  );
}

export default App;

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
*/}