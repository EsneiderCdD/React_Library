// styleAnim.jsx

// | Propiedad    | Descripción                                         |
// | ------------ | --------------------------------------------------- |
// | `initial`    | Estado inicial del estilo.                          |
// | `animate`    | Estado al que animar.                               |
// | `exit`       | Estado al salir (cuando el componente se desmonta). |
// | `whileHover` | Animación mientras el mouse está encima.            |
// | `whileTap`   | Al hacer clic o presionar.                          |
// | `transition` | Controla duración, tipo de animación, etc.          |

import React from 'react';
import { motion } from 'framer-motion';

const boxBaseStyle = {
  width: '160px',
  height: '160px',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
};

const StyleAnim = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
      }}
    >

      {/* Opacidad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ ...boxBaseStyle, backgroundColor: '#3b82f6' }}
      >
        Opacidad
      </motion.div>

      {/* Escala */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ ...boxBaseStyle, backgroundColor: '#10b981' }}
      >
        Escala
      </motion.div>

      {/* Rotación */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1.5 }}
        style={{ ...boxBaseStyle, backgroundColor: '#ef4444' }}
      >
        Rotación
      </motion.div>

      {/* Cambio de color */}
      <motion.div
        whileHover={{ backgroundColor: '#facc15' }} // Amarillo
        transition={{ duration: 0.5 }}
        style={{ ...boxBaseStyle, backgroundColor: '#8b5cf6' }}
      >
        Color
      </motion.div>

      {/* Combo de animaciones */}
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 15,
          backgroundColor: '#3b82f6',
          opacity: 0.9
        }}
        transition={{ duration: 0.5 }}
        style={{ ...boxBaseStyle, backgroundColor: '#ec4899' }}
      >
        Combo
      </motion.div>

    </div>
  );
};

export default StyleAnim;
