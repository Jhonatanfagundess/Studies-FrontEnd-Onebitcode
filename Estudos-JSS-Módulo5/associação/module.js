const Address = require('./address')
const Person = require('./person')

const endereco = new Address('Rua luta Feminina',11,'São Paulo','SP')
const pessoa = new Person('Jhonatan', endereco)

console.log(pessoa)
console.log(pessoa.address.fullAddress())