// 🧠 onChange permite leer inputs en tiempo real.
// Los inputs deben ser controlados vía useState.
// También se puede usar onBlur, onFocus y onSubmit.
// ✍️ onChange + useState = input controlado
// 📤 onSubmit se combina con preventDefault()
// 👁️ onFocus y onBlur permiten manejar interacciones

import { useState } from "react";

const EventoInput = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Formulario enviado. Nombre: ${nombre}`);
  };

  return (
    <div>
      <h2>Formulario con input controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={handleChange}
          onFocus={() => console.log("Input enfocado")}
          onBlur={() => console.log("Input desenfocado")}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>Tu nombre es: {nombre}</p>
    </div>
  );
};

export default EventoInput;
