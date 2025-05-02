//Imagina que quieres llenar un formulario: tu nombre, tu edad, tu profesión, etc.
//Pero en React no queremos que el navegador controle ese input. Queremos nosotros mismos manejar el dato, almacenarlo en el estado.
//Así que lo primero que necesitamos es: un input que se controle desde React. Eso se llama componente controlado.


//onSubmit = es un evento especial de los formularios, se dispara con type="submit o ENTER". Envia todos los datos
//preventDefault() = es un metodo que evita que el formulario se envie y recargue la pagina.
import React from 'react';
import { useState } from 'react';



function Formulario () {

    

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [profesion, setProfesion] = useState("");
    const [aceptado, setAceptado] = useState(false);
    const estilo = { marginBottom: "10px"};
    const [genero, setGenero] = useState("");
    const [comentario, setComentario] = useState("")

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Aqui se valida

    if (!nombre || !edad || !profesion || !genero) {
        setError(" Por favor completa todos los campos.");
        return;
    }
    if (isNaN(edad) || Number(edad) <= 0) {
        setError("La edad debe ser un número positivo.");
        return;
    }
    if (!aceptado) {
        setError("Debes aceptar los términos y condiciones.");
        return;
    }

    setError(""); //limpia el error si los datos son correctos
    alert(`Nombre: ${nombre}\nEdad: ${edad}\nProfesion: ${profesion}\nGenero: ${genero}\nComentario: ${comentario}`);

    }
 
    


    return (
        <div>
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input 
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder='Escribe tu nombre'
                        style={estilo}
                    />
                </label>
                <label>
                    Edad:
                    <input 
                        type="number"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        placeholder='Escribe tu edad' />
                        
                </label>
                <div>
                    <label>
                        Profesion:
                        <select value={profesion} 
                                onChange= {(e) => setProfesion(e.target.value)}
                                style={estilo}>
                            <option value="">-- Selecciona una profesion -- </option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Diseñador">Diseñador"</option> 
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="checkbox"
                            checked={aceptado}
                            onChange={(e) => setAceptado(e.target.checked)}
                            
                        />
                        Acepto los terminos y condiciones
                    </label>
                </div>
                <div>
                    <fieldset>
                        <legend>Genero:</legend>


                        <label> 
                            <input 
                                type="radio"
                                name='genero'
                                value="masculino"
                                checked={genero === "masculino"}
                                onChange={(e) => setGenero(e.target.value)} 
                            />
                            Masculino
                        </label>
                        <label> 
                            <input 
                                type="radio"
                                name='genero'
                                value="femenino"
                                checked={genero === "femenino"}
                                onChange={(e) => setGenero(e.target.value)} 
                            />
                            Femenino
                        </label>
                        <label> 
                            <input 
                                type="radio"
                                name='genero'
                                value="Otro"
                                checked={genero === "Otro"}
                                onChange={(e) => setGenero(e.target.value)} 
                            />
                            Otro
                        </label>

                    </fieldset>


                </div>
                <div>
                    <label>
                        Comentarios:
                        <br />
                        <textarea 
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            placeholder='Escribe tus comentarios'
                            rows={4}
                            cols={30}
                        ></textarea>
                    </label>
                </div>

                <button 
                    type='submit'>Enviar</button>


                    {error && (
                    <p >{error}</p>
                    )}

            </form>

        </div>
    );
}
export default Formulario