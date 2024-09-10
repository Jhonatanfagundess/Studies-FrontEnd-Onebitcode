function sum(...numbers){
    return numbers.reduce((acum,num) => acum + num, 0)
}

console.log(sum(1,1))
console.log(sum(25,25))
console.log(sum(1,30))
console.log(sum(1,1,1,1,1,1,1,1,1))
console.log(sum(30,30,30,29,25))