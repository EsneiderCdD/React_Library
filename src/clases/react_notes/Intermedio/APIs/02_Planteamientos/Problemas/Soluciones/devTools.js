const API_DEVELOPER_TOOLS = "http://localhost:3000/devTools";

export async function getDevTools() {
    try {
        const res = await fetch(API_DEVELOPER_TOOLS);
        if (!res.ok) {
            throw new Error('Ey ey! tenemos problemas!');
        }
        const data = res.json();
        return data

    } catch (error) {
        console.log('Error', error);
        return
    }
}