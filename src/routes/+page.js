
// export async function load() {
//     let data;
//     try {
//         const response = await fetch('https://v2.jokeapi.dev/joke/Any');
//         if (!response.ok) {
//             throw new Error('Fetch data failed');
//         }
//         data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error.message);
//     }

//     console.log(data);

//     return {
//         data
//     }
// }