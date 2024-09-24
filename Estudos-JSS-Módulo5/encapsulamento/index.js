class Account{
    #senha
    #balance = 0

    constructor(user){
        this.email = user.email
        this.#senha = user.senha
    
    }

    getBalance(email,senha){
        if(this.#identificador(email,senha)){
            return this.#balance
        }else {
            return null
        }
            
    }

    #identificador(email,senha){
        return this.email === email && this.#senha === senha
    }




}

const user = {
        email: 'jhonatan@gmail.com',
        senha : '25568867'
}
//Aqui ainda podemos fazer a alteração de senha

user.senha = '66666'
user.balance = '99999'

const my = new Account(user)
console.log(my)
console.log(my.getBalance('Jhonatan@gmail.com','25568867'))


