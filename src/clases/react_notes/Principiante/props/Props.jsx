//  las props (abreviación de properties) son valores que se envían desde un componente padre a un componente hijo.


 function PropsBasicas() {
  return (
    <div>
      <Usuario nombre="Ana" edad={30} activo={true} />
      <Usuario nombre="Luis" edad={22} activo={false} />
    </div>
  );
}

function Usuario({ nombre, edad, activo }) {
  return (
    <div style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Estado:</strong> {activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
}


// En React, no hay limitaciones para pasar múltiples props a un componente. 
import PropsMultiple from './PropsMultiple';

function App() {
  const mensaje = "¡Bienvenidos a React!";
  const edad = 30;
  const estaRegistrado = true;
  const listaHobbies = ["Leer", "Viajar", "Cine"];
  const usuario = { nombre: "Juan", email: "juan@ejemplo.com" };

  return (
    <div>
      <h1>Componente Padre</h1>
      <PropsMultiple 
        texto={mensaje} 
        edad={edad} 
        registrado={estaRegistrado} 
        hobbies={listaHobbies} 
        usuario={usuario}
      />
    </div>
  );
}





// 🔑 Importante: Las props son inmutables, lo que significa que no puedes modificar una prop dentro del componente hijo. Si necesitas cambiarla, deberás hacerlo en el componente padre.

// En React, puedes pasar arrays como props a un componente. Los arrays son útiles cuando deseas mostrar listas de elementos, como en el caso de mostrar una lista de productos, usuarios o cualquier otro conjunto de datos dinámicos.

// Componente Padre: App.jsx

import PropsObjetosYArrays from './PropsObjetosYArrays';

function App() {
  const listaProductos = [
    { id: 1, nombre: 'Camiseta', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 50 },
    { id: 3, nombre: 'Zapatos', precio: 80 },
  ];

  return (
    <div>
      <h1>Componente Padre</h1>
      <PropsObjetosYArrays productos={listaProductos} />
    </div>
  );
}


function PropsObjetosYArrays({ productos }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}


// Los objetos son también un tipo de dato común en React. Al pasar un objeto como prop, puedes enviar un conjunto de datos relacionados (como detalles de usuario, configuración de la app, etc.).

// Componente Padre: App.jsx

import PropsObjetosYArrays from './PropsObjetosYArrays';

function App() {
  const usuario = {
    nombre: 'Juan',
    email: 'juan@ejemplo.com',
    edad: 30,
    direccion: {
      calle: 'Av. Principal',
      numero: 123,
      ciudad: 'Ciudad X',
    },
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <PropsObjetosYArrays usuario={usuario} />
    </div>
  );
}

// Componente Hijo: PropsObjetosYArrays.jsx

function PropsObjetosYArrays({ usuario }) {
  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <p>Edad: {usuario.edad}</p>
      <h3>Dirección:</h3>
      <p>{usuario.direccion.calle}, {usuario.direccion.numero}, {usuario.direccion.ciudad}</p>
    </div>
  );
}

// Una vez que tengas arrays y objetos como props, puedes realizar renderizado condicional basado en sus valores. Por ejemplo, podrías no mostrar ciertos elementos si el array o el objeto está vacío.

// Componente Hijo: PropsObjetosYArrays.jsx
import React from 'react';

function PropsObjetosYArrays({ productos, usuario }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length > 0 ? (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}

      <h2>Datos del Usuario</h2>
      {usuario ? (
        <div>
          <p>Nombre: {usuario.nombre}</p>
          <p>Email: {usuario.email}</p>
        </div>
      ) : (
        <p>No se ha proporcionado información del usuario.</p>
      )}
    </div>
  );
}


// ¿Por qué pasar funciones como props?
// React tiene un flujo unidireccional de datos. Eso significa que:

// El padre puede pasar props al hijo.

// Pero el hijo no puede modificar directamente los datos del padre.

// Entonces, para permitir que el hijo informe o active algo en el padre, se le pasa una función como prop. El hijo la ejecuta en algún evento, y el padre puede reaccionar.

// 📌 Esto se conoce como un callback (llamada de vuelta).

// App.jsx (Componente Padre)

import PropsFunciones from './PropsFunciones';

function App() {
  const mostrarMensaje = () => {
    alert("¡El hijo activó esta función en el padre!");
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <PropsFunciones onAccion={mostrarMensaje} />
    </div>
  );
}

// PropsFunciones.jsx (Componente Hijo)

import ActionButton from "./PropconFunciones";

function App() {
  // Funciones de ejemplo para manejar el clic
  const handleClickAlert = () => {
    alert("¡Botón clickeado!");
  };

  const handleClickConsole = () => {
    console.log("Se hizo clic en el botón");
  };

  return (
    <div>
      <h1>Ejemplo de Props con Funciones (Callbacks)</h1>
      <ActionButton onAction={handleClickAlert} label="Mostrar Alerta" />
      <ActionButton onAction={handleClickConsole} label="Imprimir en Consola" />
    </div>
  );
}

export default App;


const ActionButton = ({ onAction, label }) => {
  return (
    <button onClick={onAction}>
      {label}
    </button>
  );
};



// PROP DEFAULT EN REACT 
// Si no se pasa un valor por defecto, el componente hijo usa el valor por defecto.


const ButtonDefault = ({ label = "Click aquí" }) => {
    return <button>{label}</button>;
  };

  
    import ButtonDefault from "./PropDefault";

    function App() {
    return (
        <div>
        <h1>Ejemplo de Valor por Defecto en Props</h1>
        
        <ButtonDefault />
        
        <ButtonDefault label="Enviar" />
        </div>
    );
    }









    //Props con Estilos. Podemos pasar estilos como props.

    const StyledButton = ({ label, variant = "primary" }) => {
    const styles = {
      primary: { backgroundColor: "blue", color: "white", padding: "10px" },
      secondary: { backgroundColor: "gray", color: "white", padding: "10px" },
      danger: { backgroundColor: "red", color: "white", padding: "10px" },
    };
  
    return <button style={styles[variant]}>{label}</button>;
  };
  


    import StyledButton from "./PropStyles";

    function App() {
    return (
        <div>
        <h1>Ejemplo de Variantes con Diferentes Estilos</h1>
        <StyledButton label="Primario" variant="primary" />
        <StyledButton label="Secundario" variant="secondary" />
        <StyledButton label="Peligroso" variant="danger" />
        
        <StyledButton label="Predeterminado" />
        </div>
    );
    }




    // Spread Operator en Props: el Spread es una forma de pasar informacion 


    // 🧒 children -> un componente envuelve contenido dentro de su etiqueta.
    // ...rest -> técnica de desestructuración de JavaScript, usada para capturar todas las props restantes que no fueron extraídas explícitamente.


    const InputField = ({ label, ...rest }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...rest} />
      </div>
    );
  };
  

  import InputField from "./PropSpread";

    function App() {
    return (
        <div>
        <h1>Ejemplo de Spread Operator en Props</h1>
        <InputField 
            label="Nombre:" 
            type="text" 
            placeholder="Ingresa tu nombre" 
        />
        <InputField 
            label="Contraseña:" 
            type="password" 
            placeholder="Ingresa tu contraseña" 
            maxLength={12} 
        />
        </div>
    );
    }



// En React, props.children es una prop especial que representa el contenido que se coloca entre las etiquetas de apertura y cierre de un componente.


// Archivo: PropsChildren.jsx
 function PropsChildren() {
  return (
    <div>
      <Caja>
        <p>Este es un párrafo dentro de una Caja.</p>
      </Caja>

      <Caja>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
        </ul>
      </Caja>
    </div>
  );
}

function Caja({ children }) {
  return (
    <div style={{ border: "2px dashed gray", padding: "1rem", marginBottom: "1rem" }}>
      {children}
    </div>
  );
}


