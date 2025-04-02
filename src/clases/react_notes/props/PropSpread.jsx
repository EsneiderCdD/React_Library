const InputField = ({ label, ...rest }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...rest} />
      </div>
    );
  };
  
  export default InputField;

  {/*import InputField from "./PropSpread";

function App() {
  return (
    <div>
      <h1>Ejemplo de Spread Operator en Props</h1>
      <InputField 
        label="Nombre:" 
        type="text" 
        placeholder="Ingresa tu nombre" 
      />
      <InputField 
        label="Contraseña:" 
        type="password" 
        placeholder="Ingresa tu contraseña" 
        maxLength={12} 
      />
    </div>
  );
}

export default App;
 */}
  