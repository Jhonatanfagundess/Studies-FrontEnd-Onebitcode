//Cadastro Básico
class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(this.email == email && this.password === password){
            console.log('Registrado com Sucesso')
        }else{
            console.log('Está errado! Faça novamente')
        }
    }
}

const usuario = new User('Jhonatan Fagundes Costa de jesus','Jhonatan15gmail.com','25568867')
console.log(usuario)


//Produto
class Product {
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.Stock = 0
    }

    AddStock(qtd){
        this.Stock += qtd
    }

    Discount(des){
        return this.price * ((100 - des) / 100)
    }
}

const produto = new Product('Coca-Cola','Zero é sempre melhor!',10)
produto.AddStock(120)

console.log(produto)

console.log(produto.Discount(15))