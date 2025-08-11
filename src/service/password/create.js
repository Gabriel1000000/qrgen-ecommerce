import chalk from "chalk";
import handle from "../password/handle.js";

async function createPassword() {
    console.log(chalk.yellow("password"));
    const password = await handle();
    console.log(`Sua senha: ${password}`);
}

export default createPassword;