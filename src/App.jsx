import React from 'react';
import ProductCard from './clases/react_notes/props/ejercicios/ProductCard';

function DynamicShop() {
  const productos = [
    { name: 'Espada de Luz', price: 120, category: 'Armas', id: 1 },
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