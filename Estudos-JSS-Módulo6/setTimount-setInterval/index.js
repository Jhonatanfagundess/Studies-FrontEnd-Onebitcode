console.log('Hello, world')

const timeoutId = setTimeout(() =>{
    console.log('3 segundo se passaram')
} , 1000 * 3)

clearTimeout(timeoutId)

let seconds = 0

const intervalId =  setInterval(() => {
    seconds += 3  
    console.log(`Se passsaram ${seconds} segundos!`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('Já bateu o tempo!')
    }
}, 1000 * 3)