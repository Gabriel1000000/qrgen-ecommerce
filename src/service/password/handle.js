import permittedCharacters from "./util/permitted-characters.js";

async function handler() {
    let caracter =[];
    let password ="";

    const passwordLength= process.env.PASSWORD_LENGTH;

    caracter = await permittedCharacters();

    for (let i=0; i<passwordLength; i++){
        const index = Math.floor(Math.random()*caracter.length);
        password+=caracter[index];
    }

    return password;
}

export default handler;