import StatusIcon from "./clases/react_notes/props/PropCondional";

function App() {
  return (
    <div>
      <h1>Ejemplo de Props Condicionales</h1>
      <StatusIcon status="online" />
      <StatusIcon status="offline" />
    </div>
  );
}

export default App;