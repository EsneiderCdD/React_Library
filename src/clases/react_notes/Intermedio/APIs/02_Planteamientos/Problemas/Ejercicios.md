DESAFIOS:
5) Renderizado Condicional

    {p.name === "Rick Sanchez" ? <Rick /> : null}


    if (p.name === "Rick Sanchez")
    } else if (p.name === "Morty Smith") 
    } else {

    if (p.name === "Rick Sanchez") {
    return <Rick />;
    } else {
    return <Morty />;
    }

    if (p.name === "Rick Sanchez") {
    return <Rick />;
    } else if (p.name === "Morty Smith") {
    return <Morty />;
    } else if (p.name === "Summer Smith") {
    return <Summer />;
    } else {
    return <Desconocido />;
    }

    switch (p.name) {
    case "Rick Sanchez":
        return <Rick />;
    case "Morty Smith":
        return <Morty />;
    case "Summer Smith":
        return <Summer />;
    default:
        return <Desconocido />;
    }





        

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
