// 🧠 Parámetros en eventos deben ir dentro de funciones anónimas.
// React ejecuta onClick solo cuando el usuario interactúa.
// Ideal para pasar datos dinámicos como ID, índice o nombres.
// ⚙️ Eventos con parámetros usan funciones flecha: () => miFunc(param)
// ⚠️ No ejecutar funciones directamente: miFunc() ❌
// ✅ Se usa para pasar ID, nombre o valores dinámicos

const EventoConParametro = () => {
    const saludar = (nombre) => {
      alert(`Hola ${nombre}, ¡bienvenido!`);
    };
  
    return (
      <div>
        <h2>Ejemplo con Parámetro</h2>
        <button onClick={() => saludar("Ana")}>Saludar a Ana</button>
        <button onClick={() => saludar("Luis")}>Saludar a Luis</button>
      </div>
    );
  };
  
  export default EventoConParametro;
  