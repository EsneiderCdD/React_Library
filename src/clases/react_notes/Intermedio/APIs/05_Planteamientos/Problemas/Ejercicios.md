DESAFIOS:

1) Seleccionar Selectivamente en una Pagina. (Conociendo su resultado)

setPersonajes([data.results[0], data.results[1]]);

{
    personajes.map(p => (
        <div key={p.id}>
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
        </div>
    ))
}



2) Seleccionar Selectivamente en una Pagina. (Sin saberlo, Buscando)

const rick = data.results.find(p => p.name === 'Rick Sanchez');
const morty = data.results.find(p => p.name === 'Morty Smith');

<div>
    <h2>{rick.name}</h2>
    <img src={rick.image} alt={rick.name} />
    <h2>{morty.name}</h2>
    <p>Origen: {morty.origin.name}</p>
</div>

3) GET: ¿ si necito saber su index ?

    Cuando haces un.map() puedes acceder a dos cosas:
El elemento(p)
El índice(index)

{
    data.results.map((p, index) => (
        <div key={p.id}>
            <p>{index}: {p.name}</p>
        </div>
    ))
}

4) Buscandolo.

const indexMorty = data.results.findIndex(p => p.name === 'Morty Smith');
console.log(indexMorty);

5) Renderizado Condicional

if (p.name === "Rick Sanchez")
} else if (p.name === "Morty Smith") 
} else {

6) Crea reglas y mapealas.

const reglas = {
    "Rick Sanchez": {
        fondo: "#d1e7ff",
        mostrar: (p) => (
            <>
    "Morty Smith": {

{personajes.map((p) => {
const regla = reglas[p.name]; 
{regla ? regla.mostrar(p) : <p>{p.name}</p>}

7) Servidor Frontend


------------------------------------------>> >> << >>


8) Paginación simple
- Implementa paginación con `_page` y `_limit` en la URL. Muestra controles “Siguiente/Anterior” y evita recargar toda la página.

9) Espia (Filtrador de consultas ) GET con filtro (query params)
- Agrega filtros (p. ej., `userId=1`) usando parámetros de consulta. Renderiza solo lo que cumpla el filtro.

10) POST — Crear elemento
- Construye un formulario controlado y envía `POST` en JSON. Tras crear, muestra un mensaje de éxito y limpia el formulario.

11) PUT — Editar recurso
- Crea un formulario para editar un recurso completo con `PUT`. Muestra el resultado actualizado.

12) DELETE — Eliminar por id
- Agrega un campo `id` y elimina un elemento con `DELETE`. Actualiza la UI para que refleje la desaparición.
