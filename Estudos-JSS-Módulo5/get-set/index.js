class Wallet{
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100 // 10099
    }


    get amount(){
        return this.#amount / 100 //O formato certo do calculo
        //Não precisamos usar parentese
    }

    //Fazendo com que propriedade seja alterada por atribuição
    set username(NewUsername){
        if(typeof NewUsername === 'string'){
            this.#username = NewUsername
        }else{
            return `Não é uma String!`
        }
        
    }

    // Retornando ela!
    get username(){
        return this.#username
    }

    getAmount(){
        //Metodo do get em forma de metodo padrão
        return this.#amount / 100
    }
}

const My = new Wallet()
console.log(My.amount)

My.username = 'Jhonatan'
console.log(My.username)

My.username += ' Fagundes'
console.log(My.username)