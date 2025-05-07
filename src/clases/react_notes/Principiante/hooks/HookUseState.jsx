//useState con funciones: inicialización perezosa
const [valor, setValor] = useState(() => calcularValorInicial());
//Estados derivados: Muchos errores vienen de querer derivar un estado de otro. Mira este anti-patrón:
const [precio, setPrecio] = useState(100);
//const [iva, setIva] = useState(precio * 0.21); // ❌

useEffect(() => {
  setIva(precio * 0.21); // ❌ efecto innecesario
}, [precio]);

//const iva = precio * 0.21; // ✅ ¡más simple y limpio!



//useState con objetos: hacer copia para mantener inmutabilidad
const [usuario, setUsuario] = useState({ nombre: "Ana", edad: 30 });

// Actualizar solo la edad
setUsuario((prev) => ({ ...prev, edad: 31 })); // ✅


// Campos dinámicos y formularios escalables
const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    edad: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

 {/*
    <input name="nombre" value={formulario.nombre}   
        onChange={handleChange} />
    <input name="correo" value={formulario.correo} 
        onChange={handleChange} />*/} 

//
//