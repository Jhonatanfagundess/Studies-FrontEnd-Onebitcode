module.exports = class Product{
    constructor(name,description,price,stock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
    }

    addStock(qtd){
        this.stock += qtd
    }

    removeStock(qtd){
        this.stock -= qtd
    }
}