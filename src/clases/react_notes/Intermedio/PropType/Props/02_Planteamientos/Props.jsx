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

//(3)


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

// (4)

// import PropTypeCard from "../../PropType/02_Planteamientos/PropType.types";

// function PropCard ({id, title, description, url, image}) {
//     return (
//         <div>
//             <img src={image} alt="imagen" />
//             <h1>{id}</h1>
//             <h2>{title}</h2>
//             <h3>{description}</h3>
//             <a href={url} target="_blank" rel="noopener noreferrer"> {url} </a>
//         </div>
//     );
// } 
// PropCard.propType = PropTypeCard

// export default PropCard;

//(5)

import PropTypeCard from "../../PropType/02_Planteamientos/PropType.types";

const DEFAULT = "https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-vector-40343347.jpg"
function PropsCard ({id, title, description, url, image = DEFAULT}) {
    return(
        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer"> {url} </a>
            <img src={image} alt="iamgen" width={120} />
        </div>
    );
} 
PropsCard.propType = PropTypeCard ;

export default PropsCard

