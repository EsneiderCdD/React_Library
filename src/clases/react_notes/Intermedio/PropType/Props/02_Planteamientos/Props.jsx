// import { developerTools } from "../../PropType/02_Planteamientos/PropType.types"
// function PropsCard ({ id, title, url , descripcion  }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <a href={url} target="_blank" rel="noopener noreferrer"> {url}</a>
//             <p>{descripcion}</p>
//             <span>id: {id}</span>
//         </div>
//     )
// } 
// PropsCard.propTypes = developerTools;

//(2)

// export default PropsCard;

// import developerTools from "../../PropType/02_Planteamientos/PropType.types"
// function PropsCard({ id, title, url, descripcion }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2>{id}</h2>
//             <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
//             <h3>{descripcion}</h3>
//         </div>
//     )
// }
// PropsCard.propTypes = developerTools;

// export default PropsCard;


// import PropTypeCard from '../../PropType/02_Planteamientos/PropType.types';

// function PropsCard({ id, title, descripcion, url }) {
//     return (
//         <div>
//             <h4>{id}</h4>
//             <h3>{title}</h3>
//             <h2>{descripcion}</h2>
//             <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
//         </div>
//     )
// }
// PropsCard.propType = PropTypeCard;

// export default PropsCard;

import PropTypeCard from "../../PropType/02_Planteamientos/PropType.types";

function PropCard ({id, title, description, url, image}) {
    return (
        <div>
            <img src={image} alt="imagen" />
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer"> {url} </a>
        </div>
    );
} 
PropCard.propType = PropTypeCard

export default PropCard;