function body(peso, altura){
    return new Promise((resolvida,rejeitada) => {
        console.log('Executando aqui...')
        setTimeout(() => {
            if(peso && altura != typeof Number){
                console.log('O valor tem que ser apenas do tipo Number')
                rejeitada(true)
            }else{
                return peso - altura
            } 
            resolvida(true)          
        },1000 * 4)
    })
}


function bodyTwo(peso,altura){
    body().then((result) => {
        list = []
    }).catch().finally(() => console.log('Promisse Finalizada!'))
}