const SimpleWrapper = ({ children }) => {
    return <>{children}</>;
  };
  
  export default SimpleWrapper;

  {/*📌 ¿Para qué sirve?
    Evita escribir nombres innecesarios en componentes simples, especialmente cuando solo se requiere devolver children sin envoltorios adicionales.

    import SimpleWrapper from "./AnonymousChildren";

    function App() {
    return (
        <div>
        <h1>Ejemplo: Componente Anónimo con children</h1>
        <SimpleWrapper>
            <h2>Título sin envoltorio extra</h2>
            <p>Este contenido se renderiza sin un contenedor adicional en el DOM.</p>
        </SimpleWrapper>
        </div>
    );
    }

    export default App;
 */}