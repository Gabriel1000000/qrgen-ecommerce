import qr from "qrcode-terminal"
import chalk from "chalk";
async function handler(err, result){
    if(err){
        console.log("erro on aplication");
        return;
    }
    const isSmall = result.type==2;
    qr.generate(result.link, {small:isSmall},(qrcode)=>{
        console.log(chalk.yellow("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    })
}

export default handler;