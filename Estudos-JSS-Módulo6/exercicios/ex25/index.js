async function body(peso, altura){
    if(typeof peso != "number" || typeof altura != 'number'){
        return Promise.reject('O valor tem que ser apenas do tipo Number')
    }else{
            return peso  / (altura * altura)
        }       
    }


async function bodyTwo(peso,altura){
    try{
        console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`)

        const result = await body(peso,altura)
        console.log(`Resultado do IMC: ${result}`)

        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')  


    }catch(err){
        console.log(err)
    }
    
}


bodyTwo(71, 1.74)
bodyTwo(48, 1.60)
bodyTwo(71, 1.91)
bodyTwo(82, 1.72)
bodyTwo(120, 1.80)