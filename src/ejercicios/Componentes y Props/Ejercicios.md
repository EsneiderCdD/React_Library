Ejercicio 1: Propiedades Dinámicas y Tipado con PropTypes
📌 Descripción:
Crea un componente UserCard que muestre información de un usuario (nombre, edad, correo electrónico). Implementa PropTypes para asegurarte de que las props sean del tipo correcto y sean obligatorias.

🎯 Conceptos clave:
Validación de props con PropTypes.

Uso de props dinámicas en un componente.

💡 Pistas:
Usa prop-types y asegúrate de que name sea un string, age un número, y email un string obligatorio.

Prueba pasando props erróneas y observa qué sucede.

Ejercicio 2: Prop Drilling y Optimizaciones
📌 Descripción:
Tienes una estructura de componentes donde App pasa datos hasta un componente nieto (UserInfo). Implementa prop drilling y luego optimiza el código con context API o un HOC para evitar pasar props innecesarias.

🎯 Conceptos clave:
Prop Drilling (pasar props a través de múltiples niveles).

Cómo evitar prop drilling con Context API o un HOC.

💡 Pistas:
Pasa una prop desde App → Parent → Child → UserInfo.

Usa un HOC o useContext para evitar el drilling.

Ejercicio 3: Props como Funciones y Eventos Personalizados
📌 Descripción:
Crea un componente CounterButton que reciba una función como prop para manejar el incremento del contador. El componente no debe manejar el estado, solo ejecutar la función recibida.

🎯 Conceptos clave:
Pasar funciones como props.

Comunicación de componente hijo a padre.

💡 Pistas:
El estado del contador debe estar en el componente padre.

Usa una prop onIncrement en el botón y llámala al hacer clic.

Ejercicio 4: Render Props para Componentes Reutilizables
📌 Descripción:
Crea un componente Toggle que reciba una función como prop (render) y permita alternar entre dos estados (true/false).

🎯 Conceptos clave:
Uso de render props en React.

Componentes más reutilizables.

💡 Pistas:
El componente Toggle debe manejar el estado internamente.

Usa this.props.render(isActive) para renderizar diferentes contenidos.

Ejercicio 5: Props para Personalización de Estilos
📌 Descripción:
Crea un componente StyledButton que reciba props para personalizar su color, tamaño y tipo de borde.

🎯 Conceptos clave:
Uso de props para personalizar estilos dinámicamente.

Aplicación de clases CSS basadas en props.

💡 Pistas:
Usa className dinámico según los valores de las props.

Pasa un objeto style directamente al componente.

Ejercicio 6: Uso Avanzado de children para Composición
📌 Descripción:
Crea un componente Modal que use props.children para aceptar cualquier contenido dinámico.

🎯 Conceptos clave:
Uso del prop children en React.

Creación de contenedores reutilizables.

💡 Pistas:
Modal debe envolver su contenido en un fondo oscuro con un cuadro de diálogo.

Usa children para permitir personalizar el contenido dentro del modal.

Ejercicio 7: Composición de Componentes con Props Compartidas
📌 Descripción:
Crea un formulario de autenticación con los componentes LoginForm y RegisterForm, y encapsúlalos en AuthContainer, que maneja las props comunes (ejemplo: función onSubmit).

🎯 Conceptos clave:
Reutilización de componentes con props compartidas.

Uso de un componente contenedor para evitar duplicar lógica.

💡 Pistas:
AuthContainer debe manejar la lógica común y pasar props a LoginForm y RegisterForm.

Usa props.children para manejar qué formulario mostrar.

Ejercicio 8: HOCs para Reutilización de Lógica
📌 Descripción:
Crea un HOC withLoading que envuelva cualquier componente y le agregue una prop isLoading. Si está true, debe mostrar un spinner, si está false, renderizar el componente normalmente.

🎯 Conceptos clave:
Creación de Componentes de Orden Superior (HOC).

Reutilización de lógica sin modificar los componentes originales.

💡 Pistas:
withLoading(Component) debe devolver un nuevo componente con lógica de carga.

Usa props.isLoading dentro del HOC para mostrar un spinner o el contenido.

Ejercicio 9: Pasar Objetos Completos como Props
📌 Descripción:
Crea un componente UserProfile que reciba una prop user (objeto con name, email, avatar y age).

🎯 Conceptos clave:
Pasar objetos completos como props.

Uso del operador spread (...user).

💡 Pistas:
Usa <UserProfile {...user} /> en App.js.

Extrae las props en UserProfile usando desestructuración.

Ejercicio 10: Listas Dinámicas y Propiedades Únicas
📌 Descripción:
Crea un componente TodoList que reciba un array de tareas y renderice una lista de TodoItem, asegurando que cada ítem tenga una prop key única.

🎯 Conceptos clave:
Listas dinámicas en React.

Uso de key para mejorar rendimiento.

💡 Pistas:
Usa .map() para iterar sobre las tareas.

Asegúrate de que cada TodoItem tenga una prop key={id} única.

📢 Conclusión
Estos 10 ejercicios cubren diferentes aspectos de props y composición de componentes en React, desde lo más básico hasta técnicas avanzadas como HOCs, render props y children. ✨

🚀 ¿Listo para el reto? Intenta resolverlos y si necesitas ayuda, ¡pregunta! 😊