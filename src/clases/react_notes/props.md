



Si una prop no se pasa o es null/undefined, darle un valor por defecto.




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