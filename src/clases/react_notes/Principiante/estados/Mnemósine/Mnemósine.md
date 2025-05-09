# 🧪 Práctica – Estados en React (Nivel Básico)

Estos ejercicios aplican los fundamentos del estado (`useState`) en React, cubriendo lo aprendido:

- Qué es un estado
- Cómo actualizarlo
- Cómo resetearlo
- Múltiples estados
- Estados como objetos
- Listas y tipos variados

---

## 1. `FormSimple.jsx`  
### 🧠 Múltiples estados, tipos variados, reset

Mini formulario con tres campos: nombre, edad (numérico), y aceptación de términos (booleano).  
Permite enviar los datos (mostrar en consola) o resetear el formulario.

```jsx
import { useState } from "react";

export default function FormSimple() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [acepta, setAcepta] = useState(false);

  const reset = () => {
    setNombre("");
    setEdad("");
    setAcepta(false);
  };

  const handleSubmit = () => {
    console.log({ nombre, edad, acepta });
  };

  return (
    <div>
      <input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        value={edad}
        type="number"
        onChange={e => setEdad(e.target.value)}
        placeholder="Edad"
      />
      <label>
        <input
          type="checkbox"
          checked={acepta}
          onChange={e => setAcepta(e.target.checked)}
        />
        Acepto términos
      </label>
      <button onClick={handleSubmit}>Enviar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

Agregá tareas a una lista y mostralas en pantalla. También podés vaciar la lista.
import { useState } from "react";

export default function ListaTareas() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregar = () => {
    if (tarea.trim() !== "") {
      setLista(prev => [...prev, tarea]);
      setTarea("");
    }
  };

  const vaciar = () => setLista([]);

  return (
    <div>
      <input
        value={tarea}
        onChange={e => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregar}>Agregar</button>
      <button onClick={vaciar}>Vaciar lista</button>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

3. ToggleSwitch.jsx

Botón tipo switch que alterna entre "modo oscuro" y "modo claro".
También tiene botones para activar o desactivar directamente.

import { useState } from "react";

export default function ToggleSwitch() {
  const [activo, setActivo] = useState(false);

  return (
    <div>
      <p>{activo ? "Modo oscuro activado" : "Modo claro activado"}</p>

      <button onClick={() => setActivo(!activo)}>Alternar</button>
      <button onClick={() => setActivo(true)}>Activar</button>
      <button onClick={() => setActivo(false)}>Desactivar</button>
    </div>
  );
}

4. ContadorDual.jsx
Dos contadores con comportamientos distintos: uno suma de a 1, otro de a 2.
Ambos pueden reiniciarse al mismo tiempo.

import { useState } from "react";

export default function ContadorDual() {
  const [uno, setUno] = useState(0);
  const [dos, setDos] = useState(0);

  const reset = () => {
    setUno(0);
    setDos(0);
  };

  return (
    <div>
      <p>Contador 1: {uno}</p>
      <button onClick={() => setUno(prev => prev + 1)}>+1</button>

      <p>Contador 2: {dos}</p>
      <button onClick={() => setDos(prev => prev + 2)}>+2</button>

      <button onClick={reset}>Resetear ambos</button>
    </div>
  );
}

Formulario editable con estado agrupado en un solo objeto.
Cada input actualiza una propiedad distinta del objeto.

5. PerfilEditable.jsx

import { useState } from "react";

export default function PerfilEditable() {
  const estadoInicial = {
    nombre: "",
    email: "",
    edad: ""
  };

  const [perfil, setPerfil] = useState(estadoInicial);

  const actualizar = (campo, valor) => {
    setPerfil(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const reset = () => setPerfil(estadoInicial);

  const mostrar = () => console.log(perfil);

  return (
    <div>
      <input
        value={perfil.nombre}
        onChange={e => actualizar("nombre", e.target.value)}
        placeholder="Nombre"
      />
      <input
        value={perfil.email}
        onChange={e => actualizar("email", e.target.value)}
        placeholder="Email"
      />
      <input
        value={perfil.edad}
        type="number"
        onChange={e => actualizar("edad", e.target.value)}
        placeholder="Edad"
      />

      <button onClick={mostrar}>Mostrar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

