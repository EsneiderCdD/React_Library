const StyledButton = ({ label, variant = "primary" }) => {
    const styles = {
      primary: { backgroundColor: "blue", color: "white", padding: "10px" },
      secondary: { backgroundColor: "gray", color: "white", padding: "10px" },
      danger: { backgroundColor: "red", color: "white", padding: "10px" },
    };
  
    return <button style={styles[variant]}>{label}</button>;
  };
  
  export default StyledButton;

  {/*
    import StyledButton from "./PropStyles";

function App() {
  return (
    <div>
      <h1>Ejemplo de Variantes con Diferentes Estilos</h1>
      <StyledButton label="Primario" variant="primary" />
      <StyledButton label="Secundario" variant="secondary" />
      <StyledButton label="Peligroso" variant="danger" />
      
      <StyledButton label="Predeterminado" />
    </div>
  );
}

export default App;

    */
    }