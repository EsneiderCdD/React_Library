import { developerTools } from "../../PropType/02_Planteamientos/PropType.types";

function PropsCard ({ id, title, url , descripcion  }) {
    return (
        <div>
            <h1>{title}</h1>
            <a href={url} target="_blank" rel="noopener noreferrer"> </a>
            <p>{descripcion}</p>
            <span>{id}</span>
        </div>
    )
} 
PropsCard.propTypes = developerTools;

export default PropCarPropsCard;