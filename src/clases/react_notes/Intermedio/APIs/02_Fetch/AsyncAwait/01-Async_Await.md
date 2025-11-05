# Async/Await con fetch

  ## Antes de Async/Await

    ```js

    fetch('url')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

    ```

  ## Ahora con Async/Await

    ```js

    async function cargarDatos() {
      try {
        const res = await fetch('url');
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    ```

  ## React con Async/Await y useEffect

    ```jsx
    
    useEffect(() => {
      async function obtenerDatos() {
        try {
          const res = await fetch('url');
          const data = await res.json();
          // setData(data), etc.
        } catch (error) {
          // setError(error.message), etc.
        }
      }

      obtenerDatos(); // ¡Importante! Llamamos la función
    }, []);
    
    ```