import prompt from "prompt";
import createQRCode from "./service/qr-code/create.js";
import mainPrompt from "./prompts/prompt-main.js"

async function main() {
    prompt.get(mainPrompt, async (err,result) => {
        if(result.select==1) await createQRCode()
        if(result.select==2)console.log("Escolheu password")
    });

    prompt.start();
}

main();