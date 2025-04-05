const productos = [
    { id: 1, nombre: "Camisa", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Zapatos", precio: 60 },
  ];
  
  const ListaProductos = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Lista de Productos</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {productos.map((item) => (
            <li key={item.id}>
              🛒 {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListaProductos;
  