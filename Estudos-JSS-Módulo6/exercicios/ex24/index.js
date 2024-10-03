function body(peso, altura){
    return new Promise((resolvida,rejeitada) => {
        console.log('Executando aqui...')
            if(typeof peso != "number" || altura != typeof 'number'){
                rejeitada('O valor tem que ser apenas do tipo Number')
            }else{
                return peso  / (altura * altura)
            }
            resolvida(true)        
    })
}


function bodyTwo(peso,altura){
    body(peso,altura).then((result) => {
        console.log(`Resultado do IMC: ${result}`)
        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')   
    }).catch((err) => {
        console.log(err)
    })
    console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`)


}


