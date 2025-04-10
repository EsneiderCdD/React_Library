import React from 'react';

function PortalModule({ title, children, ...rest }) {
  return (
    <div {...rest} style={{ border: '1px solid blue', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default PortalModule;

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
