// Framer Motion es una librería de animaciones para React creada por el equipo de Framer
// npm install framer-motion --save


/* Estructura basica:
<motion.[element]
  initial={{ ... }}
  animate={{ ... }}
  transition={{ ... }}
/> 
*/

// motion.jsx
import { motion } from "framer-motion";

export default function MotionElements() {
  return (
    <div style={{ display: "grid", gap: "1rem", padding: "2rem" }}>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Título animado
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ padding: "1rem", fontSize: "1rem" }}
      >
        ¡Haz clic!
      </motion.button>



      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sphynx_-_cat._img_031.jpg/1200px-Sphynx_-_cat._img_031.jpg"
        alt="gatito"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        style={{ width: 300, borderRadius: 12 }}
      />
    </div>
  );
}

// motion.div	Elemento que puede ser animado
// initial	Estado inicial antes de que se monte el componente
// animate	Estado final al que se anima el componente
// transition	Define el tipo, duración y dinámica de la animación


// ¿Qué es motion?
// En Framer Motion, motion es un objeto que contiene versiones animables de los elementos HTML y SVG comunes.
// Framer Motion no interfiere con tus estilos. Puedes usar Tailwind, CSS Modules, inline styles o cualquier sistema de estilos como siempre.

//Reutilización como componentes
function AnimatedBox({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#4ade80",
        borderRadius: 8,
      }}
    />
  );
}

//los cuatro props principales que controlan la animación en Framer Motion

// initial	Define el estado inicial del elemento antes de que entre en pantalla
// animate	Define el estado final o destino de la animación
// exit	Define el estado de salida cuando el componente se desmonta (usado con AnimatePresence)
// transition	Controla la forma en que se ejecuta la animación (tiempo, curva, delay, tipo)


// transition: personaliza el cómo
// El prop transition permite controlar cómo se produce la animación.

// 🔧 Propiedades comunes
// Propiedad	Descripción
// duration	Tiempo total de la animación (en segundos)
// delay	Retardo antes de iniciar la animación
// type	spring (por defecto), tween, inertia
// ease	Tipo de curva: easeIn, easeOut, [0.17, 0.67, 0.83, 0.67], etc
// stiffness, damping	Parámetros adicionales para animaciones tipo spring


// 5. Secuenciar múltiples propiedades

// Puedes animar varias propiedades con transiciones independientes:

<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    x: { type: "spring", stiffness: 120 },
    opacity: { duration: 0.4, ease: "easeOut" },
  }}
/>

// Animaciones automáticas con React state
// Este es el flujo más común: el componente cambia de estado, y Framer Motion se encarga del resto.

const [expanded, setExpanded] = useState(false);

<motion.div
  animate={{ height: expanded ? 200 : 100 }}
  transition={{ duration: 0.4 }}
  onClick={() => setExpanded(!expanded)}
>
  Pulsa para expandir
</motion.div>
