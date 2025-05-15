//drag convierte cualquier componente animable en un elemento que el usuario puede arrastrar con el mouse o el dedo.

import { motion } from "framer-motion";

function DragBox() {
  return (
    <motion.div
      drag
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#e74c3c",
        borderRadius: 20,
        margin: "3rem auto",
        cursor: "grab",
      }}
    />
  );
}

export default DragBox;

//Puedes controlar hacia dónde se permite arrastrar con:
// ➤ drag="x" o drag="y" 

//Define un área límite (con un ref o con valores estáticos sin usar el useRef): 

// ➤ dragConstraints

const constraintsRef = useRef(null);

return (
  <div
    ref={constraintsRef}
    style={{ width: 300, height: 300, border: "2px dashed #ccc", margin: "auto" }}
  >
    <motion.div
      drag
      dragConstraints={constraintsRef}
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#9b59b6",
        borderRadius: 20,
        margin: "auto",
      }}
    />
    
  </div>
);

//Definir limites:
// ➤ dragConstraints: Define un área límite (con un ref o con valores estáticos).  
// ➤ dragElastic: Define la elasticidad del arrastre.
// ➤ dragMomentum: Define la momentum del arrastre.
// ➤ dragTransition: Define la transición del arrastre.
// ➤ dragSnapToOrigin: Define si el arrastre se debe hacer al origen.
function LimitesDrag () {
const constraintsRef = useRef(null);
return (
  <div
    ref={constraintsRef}
    style={{ width: 300, height: 300, border: "2px dashed #ccc", margin: "auto" }}
  >
    <motion.div
      drag
      dragConstraints={constraintsRef}
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#9b59b6",
        borderRadius: 20,
        margin: "auto",
      }}
    />
    <motion.div
        drag
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.2} // qué tanto puede "estirarse" antes de soltar
        dragMomentum={false} // evita que se desplace con inercia al soltar
        />

            
  </div>
);
}



//Extras: 
// usa onDragStart, onDragEnd, onDrag como eventos que pueden ser usados para la logica personalizada
// usa curso: grab, grabbing  mejora la experiencia del usuario
//