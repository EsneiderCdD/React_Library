// Framer Motion puede animar cualquier propiedad que sea numéricamente interpolable o transformable, como:

// Transformaciones: scale, rotate, x, y, z, skew
// Estilos visuales: opacity, backgroundColor, borderRadius, boxShadow
// Colores: color, backgroundColor, borderColor, etc.
// styleAnim.jsx
import { motion } from "framer-motion";

export default function StyleAnimCard() {
  return (
    <div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            backgroundColor: "#ffadad"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: "#9bf6ff"
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333",
            fontSize: "1.2rem",
            fontWeight: "bold"
          }}
        >
          Hola estilo 🎨
        
        </motion.div>
        <motion.button
  whileHover={{
    scale: 1.1,
    backgroundColor: "#caffbf",
    color: "#2b2d42",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    padding: "12px 24px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#bdb2ff",
    color: "white",
    cursor: "pointer"
  }}
>
  Animar estilos
</motion.button>

    </div>

    
  );
}
