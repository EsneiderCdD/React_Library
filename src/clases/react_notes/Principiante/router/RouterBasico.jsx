{/*<BrowserRouter>	Envuelve toda la app y habilita el uso de rutas en React.
<Routes>	Es el contenedor moderno de todas tus rutas (v6+).
<Route>	Define una ruta y qué componente renderizar para ese path.
<Link to=\"...\">	Crea navegación sin recargar la página (SPA). */}



import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Página de Inicio</h2>;
}

function About() {
  return <h2>📘 Acerca de Nosotros</h2>;
}

function Contacto() {
  return <h2>📞 Página de Contacto</h2>;
}

export default function RouterBasico() {
  return (
    <BrowserRouter>
      <div style={{ padding: "1rem" }}>
        <h1>🌐 Demo de React Router</h1>

        {/* Navegación */}
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
