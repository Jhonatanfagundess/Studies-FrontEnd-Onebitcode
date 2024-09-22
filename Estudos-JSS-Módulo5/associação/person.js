 const Address = require('./address')

class Person {
    constructor(name,rua,number,city){
        this.name = name
        this.Address = Address
        //this.address = new Address(rua,number,city) Um dos metódos de associação

    }
}

module.exports = Person