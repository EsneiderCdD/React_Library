
import { useState } from 'react';

function CrearPost () {
    const [titulo, setTitulo] = useState ('');
    const [contenido, setContenido] = useState ('');
    const [mensaje, setMensaje] = useState ('');

   async function manejarEnvio(e) {
    e.preventDefault(); // evita que el formulario recargue la página
    setMensaje('Enviando...');

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: titulo,
          body: contenido,
          userId: 1
        })
      });

      if (!res.ok) {
        throw new Error('Error al enviar el post');
      }

      const data = await res.json();
      setMensaje(`✅ Post creado con ID: ${data.id}`);
      setTitulo('');
      setContenido('');
    } catch (err) {
      setMensaje(`❌ Error: ${err.message}`);
    }
    }

    return (
        <div>
            <h2>
                Crear Nuevo Post 
            </h2>

            <form onSubmit={manejarEnvio}>
                <input type="text"
                placeholder="Título del post"
                value={titulo}
                onChange={e=> setContenido (e.target.value)} />
                <br />

                <textarea placeholder="Contenido"
                value={contenido}
                onChange={e => setContenido(e.target.value)}></textarea>
                <br />

                <button type="submit">Publicar</button>

            </form>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
export default CrearPost