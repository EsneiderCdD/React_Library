//¿Qué es async/await?
// Es una forma moderna y clara de trabajar con funciones asincrónicas en JavaScript.
// Sustituye a .then() y .catch() con una estructura más secuencial, parecida al código “normal”:

// Antes

fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

  
// Ahora
  async function cargarDatos() {
  try {
    const res = await fetch('url');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
