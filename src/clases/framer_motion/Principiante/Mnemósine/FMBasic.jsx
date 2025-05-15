import { motion } from "framer-motion";
import React from "react";
import Card from "./componentes/fm/Card";

function FMBasic() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Framer Motion</h1>

      <Card
        titulo="Initial y Animate"
        descripcion="Initial -> Define el estado inicial del elemento antes de que entre en pantalla. Animate -> Define el estado final o destino de la animación"
        codigo={`initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.5 }}`}

      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            borderRadius: "8px",
          }}
        />
      </Card>
    </div>
  );
}

export default FMBasic;








