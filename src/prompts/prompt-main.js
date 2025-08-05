
const mainPrompt=[
    {
        name:"select",
        description:"Escolha uma das ferramento (1 - QRCODE ou 2 - PASSWORD)",
        pattern:/^[1-2]+$/,
        message:"Escolha entre 1 e 2.",
        require:true,

    },
]

export default mainPrompt;