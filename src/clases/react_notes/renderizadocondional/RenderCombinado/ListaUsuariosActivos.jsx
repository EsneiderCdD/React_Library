const ListaUsuariosActivos = () => {
    const usuarios = [
      { id: 1, nombre: "Alice", activo: true },
      { id: 2, nombre: "Bob", activo: false },
      { id: 3, nombre: "Charlie", activo: true },
      { id: 4, nombre: "Dana", activo: false }
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>🟢 Usuarios Activos</h2>
        <ul>
          {usuarios.map((user) =>
            user.activo ? <li key={user.id}>✅ {user.nombre}</li> : null
          )}
        </ul>
      </div>
    );
  };
  
  export default ListaUsuariosActivos;
  