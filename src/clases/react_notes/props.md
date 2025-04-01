1) Realiza un ejercicio de props donde se refleje el uso de:

2: Prop con Número (Number)
3: Prop con Booleano (true/false)
4: Prop con Arrays (Listas de Valores)
5: Prop con Objetos (Múltiples Valores en una sola Prop)
6: Prop con Funciones (Callbacks para Eventos)
---------------------------------
2) 
1️⃣ Prop con Valor por Defecto (defaultProps o valores por defecto en ES6)
2️⃣ Variantes con Diferentes Estilos 
3️⃣ Variantes con spread operator (...props)
4️⃣ Variantes con Booleanos (Activar/Desactivar Funcionalidad)Activar o desactivar estilos o comportamientos sin pasar valores explícitos.
5️⃣ Variantes con children (Pasar JSX dentro del Componente)
6️⃣ Variantes con Condicionales (Props Condicionales)
----------------------------------------------------------
3)
1️⃣ Atajo con Props Booleanas (Sin Necesidad de ={true})
📌 ¿Para qué sirve?
Si una prop booleana es true, no es necesario escribir ={true}.
2️⃣ Trampilla con && (Render Condicional Corto)
📌 ¿Para qué sirve?
Renderizar algo solo si una condición es true, sin usar if.
3️⃣ Atajo con Destructuración Directa
📌 ¿Para qué sirve?
Extraer props directamente en los parámetros de la función.
4️⃣ Trampilla con ?? (Valor por Defecto Solo si es null o undefined)
📌 ¿Para qué sirve?
Si una prop no se pasa o es null/undefined, darle un valor por defecto.
5️⃣ Trampilla con ...rest (Props Dinámicas sin Declarar una por una)
📌 ¿Para qué sirve?
Permite pasar cualquier prop sin definirlas todas en el componente.
6️⃣ Trampilla con Componentes Anónimos y children
📌 ¿Para qué sirve?
Evita escribir nombres innecesarios en componentes simples.
7️⃣ Trampilla con as (Reutilización de Componentes con Etiquetas Diferentes)



-------------------------------------------------------------------------}
Otros temas de experto:
🚀 Truco Final: React.memo para Evitar Renders Innecesarios con Props
Cuando usamos props, cada vez que un componente padre se renderiza, todos sus hijos también se vuelven a renderizar, aunque sus props no hayan cambiado. Esto puede causar renders innecesarios, afectando el rendimiento.

Aquí es donde entra React.memo, que memoriza el componente y solo lo vuelve a renderizar si sus props cambian. 🔥

📌 ¿Cómo Funciona React.memo?
Si un componente recibe las mismas props en diferentes renders, React lo reutiliza en lugar de volver a renderizarlo.
--------------------------------------------------------











🔥 Truco Final: Componentes Ultra Reutilizables y Optimizados
Aquí combinaremos todos los atajos, trampillas y variantes para construir componentes flexibles, reutilizables y eficientes en React. 🚀

🛠️ Construyendo un Componente "Final Boss"
Vamos a crear un Botón que:
✅ Soporte múltiples variantes (estilos como primary, secondary, danger).
✅ Sea completamente reutilizable con ...props.
✅ Tenga la opción de renderizarse como button, a, o cualquier otra etiqueta (as).
✅ Soporte props booleanas sin ={true} (disabled, loading).
✅ Muestre un loader si está cargando.
✅ Use children para ser flexible en su contenido.

⚡ Código Completo del Super Botón
jsx
Copiar
Editar
const Button = ({ 
  as: Tag = "button", 
  variant = "primary", 
  disabled, 
  loading, 
  children, 
  ...props 
}) => {
  const styles = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "white" },
    danger: { backgroundColor: "red", color: "white" },
  };

  return (
    <Tag 
      style={styles[variant]} 
      disabled={disabled || loading} 
      {...props}
    >
      {loading ? "Cargando..." : children}
    </Tag>
  );
};

// Uso del Componente
<Button>Normal</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="danger" as="a" href="#">Link Peligroso</Button>
<Button disabled>Clickeame (Deshabilitado)</Button>
<Button loading>Cargando...</Button>
🔍 Explicación del Truco
Uso de as

Permite que el botón sea un <button> por defecto, pero puede cambiarse a un <a>, <div>, etc.

Ejemplo: <Button as="a" href="#"> lo convierte en un <a>.

Uso de variant con un Objeto de Estilos

Se pueden agregar más variantes sin tocar el código base.

Uso de ...props para Pasar Props Dinámicas

Acepta cualquier atributo válido (onClick, href, type, aria-label, etc.).

Uso de Props Booleanas (Sin ={true})

disabled y loading se pasan como booleanas (<Button disabled />).

No es necesario escribir <Button disabled={true} />.

Uso de loading para Mostrar un Mensaje de Carga

Si loading es true, el botón muestra "Cargando..." en vez del contenido normal.

🚀 Conclusión
✅ Código limpio y reutilizable.
✅ Componente flexible sin necesidad de múltiples versiones.
✅ Uso de todas las mejores prácticas vistas.

Con este truco, podemos crear componentes ultra eficientes que ahorran código y mejoran la experiencia de desarrollo. 🔥