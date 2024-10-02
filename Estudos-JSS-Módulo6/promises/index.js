//Tem três estados
//Pendente,resolvido e rejeitado
const p = new Promise((resolve,reject) => {
    console.log('Promisse executada')
   setTimeout(() => {
    if(true){
        reject(false)
    }
    console.log('Resolvendo a promisse')
    resolve(true)
   }, 1000 * 2)
})

console.log(p)


setTimeout(() => {
    console.log(p)
},1000 * 3)


function executar(){
    return new Promise((resolvida,rejeitada) => {
        console.log('A promisse está sendo executada')
        setTimeout(() => {
            console.log('Resolvendo aqui...')
            resolvida('Resultado')
        },1000 * 3 )
    })
}

const pp = executar()
console.log(p)
setTimeout(() => {
    console.log(pp)
},1000 * 5)