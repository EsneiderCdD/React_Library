import React from 'react';

function ProductCard({ name, price, category, onSelect, children, ...rest }) {
  return (
    <div {...rest} style={{ border: '1px solid gray', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Categoría: {category}</p>

      <button onClick={() => onSelect(name)}>Seleccionar</button>

      <div style={{ marginTop: '0.5rem' }}>
        {children}
      </div>
    </div>
  );
}

export default ProductCard;

{/*
    
import React from 'react';
import PortalModule from './clases/react_notes/props/ejercicios/PortalBuilder';

function PortalBuilder() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌌 Constructor de Portales</h1>

      <PortalModule title="Portal al Reino del Fuego">
        <p>🔥 Solo los más valientes cruzan este umbral...</p>
        <PortalModule title="Subzona: Núcleo de lava">
          <p>🌋 Aquí la temperatura sube peligrosamente.</p>
        </PortalModule>
      </PortalModule>

      <PortalModule title="Portal a la Dimensión Fantasma">
        <p>👻 Espíritus deambulan sin rumbo en este dominio.</p>
      </PortalModule>

      <PortalModule title="Portal Oculto">
        <p>🔒 Nadie sabe lo que hay al otro lado...</p>
      </PortalModule>
    </div>
  );
}

export default PortalBuilder; */}
