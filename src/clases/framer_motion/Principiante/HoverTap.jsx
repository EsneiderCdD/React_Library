//whileHover: Se activa cuando el puntero está sobre el elemento.
//whileTap: Se activa mientras el elemento está siendo clickeado o tocado (presionado).

import { motion } from "framer-motion";

function HoverTapExample() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "1rem 2rem",
        fontSize: "1.2rem",
        borderRadius: "8px",
        border: "none",
        background: "#007bff",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Click Me
    </motion.button>
  );
}

//Personalizacion: Puedes usar cualquier propiedad animable+



function Personalizacion () {

        return (

        <motion.div
        whileHover={{ rotate: 10, backgroundColor: "#f39c12" }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        style={{
            width: 100,
            height: 100,
            backgroundColor: "#3498db",
            margin: "2rem auto",
            borderRadius: "10px",
        }}
        />
    )
}

// Combinacion con otras Props -> Puedes mezclar initial, animate, whileHover y whileTap:

function Combinacion () {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        style={{
            background: "#2ecc71",
            padding: "2rem",
            borderRadius: "1rem",
            color: "#fff",
            textAlign: "center",
            fontSize: "1.2rem",
            width: "200px",
            margin: "2rem auto",
        }}
        >
        Tarjeta Interactiva
        </motion.div>

            
        )
        }

