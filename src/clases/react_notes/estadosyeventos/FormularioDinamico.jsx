import { useState } from "react";

const FormularioDinamico = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Formulario Dinámico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <hr />
      <h4>Vista previa del estado:</h4>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default FormularioDinamico;
