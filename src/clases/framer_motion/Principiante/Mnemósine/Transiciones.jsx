// TransitionPlayground.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Playground = () => {
  const [type, setType] = useState('spring');
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [ease, setEase] = useState('easeInOut');
  const [stiffness, setStiffness] = useState(100);
  const [damping, setDamping] = useState(10);
  const [trigger, setTrigger] = useState(false);

  const boxStyle = {
    width: '120px',
    height: '120px',
    backgroundColor: '#6366f1',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '20px auto'
  };

  // Construir objeto transition dinámicamente
  const getTransition = () => {
    if (type === 'tween') {
      return {
        type,
        duration: parseFloat(duration),
        delay: parseFloat(delay),
        ease,
      };
    } else {
      return {
        type,
        delay: parseFloat(delay),
        stiffness: parseFloat(stiffness),
        damping: parseFloat(damping),
      };
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>🎛 Playground de Transiciones</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>Tipo: </label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="spring">spring</option>
          <option value="tween">tween</option>
        </select>
      </div>

      {type === 'tween' && (
        <>
          <div>
            <label>Duración (s): </label>
            <input
              type="number"
              value={duration}
              step="0.1"
              min="0"
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label>Ease: </label>
            <select value={ease} onChange={e => setEase(e.target.value)}>
              <option value="linear">linear</option>
              <option value="easeIn">easeIn</option>
              <option value="easeOut">easeOut</option>
              <option value="easeInOut">easeInOut</option>
            </select>
          </div>
        </>
      )}

      {type === 'spring' && (
        <>
          <div>
            <label>Stiffness: </label>
            <input
              type="number"
              value={stiffness}
              onChange={e => setStiffness(e.target.value)}
            />
          </div>
          <div>
            <label>Damping: </label>
            <input
              type="number"
              value={damping}
              onChange={e => setDamping(e.target.value)}
            />
          </div>
        </>
      )}

      <div>
        <label>Delay (s): </label>
        <input
          type="number"
          value={delay}
          step="0.1"
          min="0"
          onChange={e => setDelay(e.target.value)}
        />
      </div>

      <button
        onClick={() => setTrigger(prev => !prev)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4ade80',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        🔄 Animar
      </button>

      <motion.div
        key={trigger}
        initial={{ x: 0 }}
        animate={{ x: 200 }}
        transition={getTransition()}
        style={boxStyle}
      >
        Box
      </motion.div>
    </div>
  );
};

export default Playground;