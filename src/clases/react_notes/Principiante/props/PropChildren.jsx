const Card = (props) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        {props.children}
      </div>
    );
  };
  
  export default Card;
{/*const Card = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      {props.children}
    </div>
  );
};

export default Card;

const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

export default Card;

const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

export default Card;

*/}  