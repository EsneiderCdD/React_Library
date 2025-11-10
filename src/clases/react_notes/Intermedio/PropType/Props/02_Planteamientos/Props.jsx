function Props ({ id, title, url , descripcion  }) {
    return (
        <div>
            <h1>{title}</h1>
            <a href={url} target="_blank" rel="noopener noreferrer"> </a>
            <p>{descripcion}</p>
            <span>{id}</span>
        </div>
    )
} 
export default Props;