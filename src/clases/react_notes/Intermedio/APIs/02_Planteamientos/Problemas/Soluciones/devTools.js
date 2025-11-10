// const API_DEVELOPER_TOOLS = "http://localhost:3000/devTools";
// export async function getDevTools() {
//     try {
//         const res = await fetch(API_DEVELOPER_TOOLS);
//         if (!res.ok) {
//             throw new Error('Ey ey! tenemos problemas!');
//         }
//         const data = await res.json();
//         return data

//     } catch (error) {
//         throw error;
//     }
// }

// (2)

// const API = "http://localhost:3000/devTools"

// export default async function getDevTools() {

//     try {
//         const res = await fetch(API);
//         if (!res.ok) {
//             throw new Error('Error Houston!');
//         }
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }

// }

// (3)

const API = "http://localhost:3000/devTools"
async function fetchData() {

    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error('HOUSTON PROBLEMAS');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error ;
    }

}
export default fetchData