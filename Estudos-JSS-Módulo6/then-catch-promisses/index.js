function executar(){
    return new Promise((resolvida,rejeitada) => {
        console.log('A promisse está sendo executada')
        setTimeout(() => {
            if(true){
                rejeitada('Promisse Rejeitada')
            }else{
                console.log('Resolvendo aqui...')
                resolvida(42)
            }
           // console.log('Resolvendo aqui...')
            // resolvida(42)
        },1000 * 3 )
    })
}

executar().then((result) => {
    console.log(`A Promisse foi resolvida. Resultado : ${result}`)
}).catch((err) => {
    console.log(`A promisse foi Rejeitada. O erro : ${err}`)
}).finally(() => {
    console.log('A Promisse foi executada!')
})

