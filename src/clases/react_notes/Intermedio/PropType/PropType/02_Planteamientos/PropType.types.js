import PropTypes from "prop-types";

export const developerTools = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
};