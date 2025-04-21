import React from 'react';

function FeedbackCard({ username, rating, comment, highlight, children, ...rest }) {
  const cardStyle = {
    border: highlight ? '2px solid gold' : '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    background: highlight ? '#fffbe6' : '#f9f9f9',
    ...rest.style,
  };

  

  

  return (
    <div {...rest} style={cardStyle}>
      <h4>{username}</h4>
      <p>⭐️ Calificación: {rating} / 5</p>
      <blockquote>"{comment}"</blockquote>

      {/* Contenido adicional opcional */}
      {children && (
        <div style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default FeedbackCard;

{/*

  import React from 'react';
import FeedbackCard from './FeedbackCard';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Opiniones de Clientes</h2>

      <FeedbackCard
        username="Laura Rodríguez"
        rating={5}
        comment="Excelente servicio y atención."
        highlight={true}
      >
        <p>Verificado el 20 de abril de 2025.</p>
      </FeedbackCard>

      <FeedbackCard
        username="Carlos M."
        rating={4}
        comment="El producto llegó rápido, aunque el empaque estaba algo dañado."
        style={{ backgroundColor: '#eef2f3' }}
      />

      <FeedbackCard
        username="Ana Sofía"
        rating={3}
        comment="Normal, nada especial."
      />
    </div>
  );
}

export default App;

  
  
  
  
  */}