const CondicionalAND = ({ age }) => {
    return (
      <div>
        <h2>Renderizado con AND (&&)</h2>
  
        {age >= 18 && <p>Bienvenido a la plataforma 🧑‍💻</p>}
     
        {age < 18 && <p>Lo siento, necesitas ser mayor de 18 para acceder 🔞</p>}
      </div>
    );
  };
  
  export default CondicionalAND;
  