class Address{
    constructor(rua,number,city,state){
        this.rua = rua
        this.number = number
        this.city = city
        this.state = state
    }

    fullAddress(){
        return `Rua : ${this.rua} , N:${this.number} , Cidade: ${this.city}/${this.state}`
    }
}

module.exports = Address