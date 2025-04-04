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
