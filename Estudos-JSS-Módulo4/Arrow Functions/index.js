function normal(a,b){
    return a + b
}

console.log(`Soma normal é : ${normal(2,2)}`)


const anonima = function (a,b){
    return a + b
}

console.log(`Soma Anonima é : ${anonima(2,2)}`)


const arrowFuc = (a,b) => {return a + b
}

console.log(`Soma pelo Arrow Fuction é : ${arrowFuc(2,2)}`)


const ArrowSub = (a,b) => {return a - b
}

console.log(`Soma pelo Arrow Fuction é : ${ArrowSub(2,2)}`)


const double = x => `O dobro de ${x} é ${x*2}`
const number = 10
console.log(double(number))



const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)