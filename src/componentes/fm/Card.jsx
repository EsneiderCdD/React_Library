

function Card ({titulo, descripcion, children, codigo  }) {

    return (

        <div style={styles.card}>
            <h2 style={styles.titulo}>{titulo}</h2>
            <p style={styles.descripcion}>{descripcion}</p>
            <div style={styles.ilustracion}>{children}</div>
            <pre>{codigo}</pre>
            
        </div>
    );

};
export default Card

const styles = {
    card: { height : "auto", width: "300px", border: "2px solid #cccc", padding: "1rem", margin: "1rem", display : "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"},

    titulo: {},

    descripcion: {
        fontSize: "0.95rem",
        textAlign: "left",
    },

    ilustracion: { 
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    
    codigo: {
        width: "100%",
        backgroundColor: "#272822",
        color: "#f8f8f2",
        borderRadius: "4px",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        textAlign: "left",
        
  },
}