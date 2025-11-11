import { useEffect, useState } from 'react'
import getFechData from '../APIs/02_Planteamientos/Problemas/Soluciones/devTools';


function useDevTools() {
    const [developerTools, setDeveloperTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function DeveloperTool() {
            try {
                setLoading(true);
                const data = await getFechData();

                setDeveloperTools(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        DeveloperTool();
    },[]);

    return {developerTools, loading, error}
}
export default useDevTools