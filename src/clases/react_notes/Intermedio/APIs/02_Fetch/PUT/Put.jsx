import {useState } from 'react';

function EditarPost() {
    const [titulo, setTitulo] = useState ('');
    const [contenido, setContenido] = useState ('');
    const [mensaje, setMensaje] = useState ('');

    async function manejarEdicion(e) {
        e.preventDefault();
    
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
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
            throw new Error('Error al editar el post');
        }
        const data = await res.json();
        setMensaje(`✅ Post actualizado con título: "${data.title}"`);
    } catch (error) {
        setMensaje(`❌ Error: ${error.message}`);
    }
    } 

    return (
        <div>
            <h2>Editar Post</h2>

            <form onSubmit={manejarEdicion}>
                <input type="text"
                    placeholder='Nuevo titulo'
                    value= {titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <textarea 
                placeholder="Nuevo contenido"
                value= {contenido}
                onChange={(e) => setContenido(e.target.value)}
                ></textarea>

                <button type="submit">Guardar Cambios</button>
            </form>
             {mensaje && <p>{mensaje}</p>}
        </div>
       
    );
}

export default EditarPost