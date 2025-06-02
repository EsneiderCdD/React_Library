// En Framer Motion, una transición define cómo y cuándo se produce una animación entre dos estados.
// transition.jsx
// Duration = Duracion de la animacion en segundos.
// Delay = Retardo de la animacion en segundos.
// Type = Tipo de animacion.
// Ease = Curva de la animacion.
// | `ease` Values          | Qué hacen                    |
// | ---------------------- | ---------------------------- |
// | `'linear'`             | Sin aceleración              |
// | `'easeIn'`             | Aumenta velocidad al inicio  |
// | `'easeOut'`            | Suaviza al final             |
// | `'easeInOut'`          | Suaviza al inicio y al final |
// | `[0.25, 0.1, 0.25, 1]` | Curvas personalizadas Bezier |

// Type Spring = Animacion con curva de aceleración y desaceleración.
// Type Tween = Animacion con curva de aceleración y desaceleración, pero con una curva diferente.

// | Propiedad   | Qué controla                                       |
// | ----------- | -------------------------------------------------- |
// | `stiffness` | Qué tan fuerte es el resorte (más = rebote rápido) |
// | `damping`   | Cuánto frena (más = menos rebote)                  |
// | `mass`      | Masa del objeto (más = rebote más lento)           |


// | Propiedad         | Uso                                         |
// | ----------------- | ------------------------------------------- |
// | `repeat`          | Repite la animación (`Infinity`, `2`, etc.) |
// | `repeatType`      | `'loop'`, `'reverse'`, `'mirror'`           |
// | `repeatDelay`     | Espera entre repeticiones                   |
// | `staggerChildren` | Retardo entre hijos (en `motion.ul`)        |


// https://easings.net/

import React from 'react';
import { motion } from 'framer-motion';

const boxStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '40px',
};

const TransitionDemo = () => {
  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      {/* Duración simple */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ ...boxStyle, backgroundColor: '#3b82f6' }}
      >
        Duración: 2s
      </motion.div>

      {/* Delay */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ ...boxStyle, backgroundColor: '#10b981' }}
      >
        Delay: 1s
      </motion.div>

      {/* Tipo: spring */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        style={{ ...boxStyle, backgroundColor: '#f59e0b' }}
      >
        Tipo: Spring
      </motion.div>

      {/* Tipo: tween + ease */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          duration: 1.5,
        }}
        style={{ ...boxStyle, backgroundColor: '#ef4444' }}
      >
        Tipo: Tween
      </motion.div>

      {/* Combinación total */}
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 8,
          delay: 0.5,
        }}
        style={{ ...boxStyle, backgroundColor: '#8b5cf6' }}
      >
        Delay + Spring + Opacidad
      </motion.div>

    </div>
  );
};

export default TransitionDemo;
