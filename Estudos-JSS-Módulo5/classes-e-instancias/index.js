class animes {
    constructor(name){
        this.name = name
        this.public = false
    }

    publico(){
        this.public = true
    }
}

//Instancia - Classe
const self = new animes('Naruto')
const selfTwo = new animes('Cavaleiros do Zodiaco')
self.publico()
console.log(self) 
console.log(selfTwo)


console.log(self instanceof animes)