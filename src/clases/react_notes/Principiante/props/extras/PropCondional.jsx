const StatusIcon = (props) => {
    return (
      <div>
        {props.status === "online" ? (
          <span style={{ color: "green" }}>🟢 Online</span>
        ) : (
          <span style={{ color: "red" }}>🔴 Offline</span>
        )}
      </div>
    );
  };
  
  export default StatusIcon;

  {/*
    import StatusIcon from "./PropConditional";

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


const StatusIcon = ({ status }) => {
  return (
    <div>
      {status === "online" ? (
        <span style={{ color: "green" }}>🟢 Online</span>
      ) : (
        <span style={{ color: "red" }}>🔴 Offline</span>
      )}
    </div>
  );
};

export default StatusIcon;
*/}