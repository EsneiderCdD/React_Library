// import PropTypes from "prop-types";


// export const developerTools = {     // Creamos una constante con un objeto 
//     id: PropTypes.number,
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     descripcion: PropTypes.string,
// };

//(2)

// import PropTypes from "prop-types";

// export const developerTools = {
//     id: PropTypes.number,
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     descripcion: PropTypes.string,
// };
// export default developerTools;


// (3)

import PropTypes from "prop-types";

const PropTypeCard = {
    id : PropTypes.number,
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    descripcion : PropTypes.string
}
export default PropTypeCard;