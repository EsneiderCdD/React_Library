import PropTypes from "prop-types";

function CardReutilizable({name, age, email}) {
    
    {/*
        Bugs: No funciona el prop-types y el defaultProps


     CardReutilizable.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    }
    
    CardReutilizable.defaultProps = {
        name: "Anonimo",
        age: 0,
        email: "not_provided@example.com",
      };
 
    */}

    return (
        <div >
            <h2>{name}</h2>
            <p>Edad: {age} </p>
            <p>Email {email} </p>

        </div>
    );
}



export default CardReutilizable

{/*
IMPORTANTE: 
npm install prop-types

App.jsx 

import CardReutilizable from './ejercicios/Componentes y Props/Soluciones/1.PropType'

<CardReutilizable name="Carlos" age={30} email="carlos@email.com" /> // ✅ Funciona bien
<CardReutilizable name={123} age="veinte" email={false} /> // ❌ PropTypes advertirá errores
<CardReutilizable name="Ana" age={25} /> // ❌ Falta `email`, mostrará error en consola
<CardReutilizable name="John" age={null} email="john@email.com" /> // ❌ `null` no es un número
 */}