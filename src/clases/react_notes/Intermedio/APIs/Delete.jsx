import {useState} from 'react';

function EliminarPost() {
    const [postId, setPostId] = useState('');
    const [mensaje, setMensaje] = useState('');

    async function manejarEliminacion(e) {
        e.preventDefault();

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error('Error al eliminar el post');
            }

            setMensaje(`✅ Post eliminado con ID: ${postId} Eliminado correctamente`);
        } catch (error) {
            setMensaje(`❌ Error: ${error.message}`);
        }
    }

    return (
        <div>
            <h2>Eliminar Post</h2>
            <form onSubmit={manejarEliminacion}>
                <input
                    type="number"
                    placeholder="ID del post"
                    value={postId}
                    onChange={e => setPostId(e.target.value)}
                />
                <button type="submit">Eliminar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
export  default EliminarPost