import React from 'react';

// Componente BossCard
function BossCard({ name, level, isAwakened, stats, abilities, allies, children, ...rest }) {
  return (
    <div {...rest} style={{ border: '2px solid black', padding: '1rem', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Nivel: {level}</p>
      <p>Estado: {isAwakened ? 'Despertado' : 'Dormido'}</p>

      <h3>Estadísticas:</h3>
      <ul>
        <li>Fuerza: {stats.strength}</li>
        <li>Velocidad: {stats.speed}</li>
        <li>Resistencia: {stats.endurance}</li>
      </ul>

      <h3>Habilidades:</h3>
      <ul>
        {abilities.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Aliados:</h3>
      <ul>
        {allies.map((ally, index) => (
          <li key={index}>{ally.name} - {ally.type}</li>
        ))}
      </ul>

      {/* Contenido hijo */}
      <div style={{ marginTop: '1rem', background: '#f4f4f4', padding: '0.5rem' }}>
        {children}
      </div>
    </div>
  );
}

export default BossCard;

{/* 
    import React from 'react';
    import BossCard from './clases/react_notes/props/ejercicios/Ejercicio5';    
    
    function App() {
      const bossStats = { strength: 95, speed: 70, endurance: 88 };
      const bossAbilities = ['Fuego eterno', 'Invocación oscura', 'Grito del abismo'];
      const bossAllies = [
        { name: 'Gárgola de Hueso', type: 'Invocación' },
        { name: 'Sombras Errantes', type: 'Espíritu' },
      ];
    
      return (
        <BossCard
          name="Azkron el Devoraluz"
          level={99}
          isAwakened={true}
          stats={bossStats}
          abilities={bossAbilities}
          allies={bossAllies}
          id="boss-final"
          className="boss-wrapper"
        >
          <p><strong>¡Advertencia!</strong> Este jefe final consume almas para fortalecerse.</p>
        </BossCard>
      );
    }
    
    export default App;
     */}
