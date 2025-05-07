const Text = ({ as: Tag = "p", children, ...rest }) => {
    return <Tag {...rest}>{children}</Tag>;
  };
  
  export default Text;

  {/*
    Trampilla con as (Reutilización de Componentes con Etiquetas Diferentes)
    📌 ¿Para qué sirve?
    Permite reutilizar un componente para renderizar diferentes etiquetas HTML según la prop as, lo que aporta flexibilidad en la presentación.
        
    import Text from "./PropsAs";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Reutilización con la Prop "as"</h1>
        Renderiza un párrafo por defecto 
        <Text>Este es un párrafo.</Text>
        Renderiza un encabezado 
        <Text as="h1" style={{ color: "blue" }}>
            Este es un encabezado.
        </Text>
        Renderiza un span 
        <Text as="span" style={{ fontWeight: "bold" }}>
            Este es un texto en un span.
        </Text>
        </div>
    );
    }

    export default App;
 */}