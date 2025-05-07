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

{/*import React from 'react';
import ProductCard from './ProductCard';

function DynamicShop() {
  const productos = [
    { name: 'Espada de Luz', price: 120, category: 'Armas' },
    { name: 'Poción de Vida', price: 45, category: 'Consumibles' },
    { name: 'Armadura Élfica', price: 300, category: 'Equipamiento' },
  ];

  const handleSelect = (nombreProducto) => {
    alert(`¡Has seleccionado: ${nombreProducto}!`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mercado de Aventura</h1>

      {productos.map((producto, index) => (
        <ProductCard
          key={index}
          {...producto}
          onSelect={handleSelect}
          className="product-card"
        >
          <small>Haz clic para añadir a tu inventario</small>
        </ProductCard>
      ))}
    </div>
  );
}

export default DynamicShop;
 */}

