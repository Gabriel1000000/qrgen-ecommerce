import chalk from "chalk";

const promptQRCode=[
    {
        name:"link",
        description:chalk.yellow("Insira o link para gerar a QR CODE"),
    },
    {
        name:"type",
        description:chalk.yellow("Escolha entre o tipo (1)NORMAL ou (2)TERMINAL "),
        pattern:/^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 e 2")
    }
];

export default promptQRCode;