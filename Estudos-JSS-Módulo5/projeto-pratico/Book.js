const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(title,sinopse,gen,pages,author,price,description,stock = 0){
        super(`livro: ${title}`,description , stock , price)
        this.title = title
        this.sinopse = sinopse
        this.gen = gen
        this.pages = pages
        this.author = author
    }

    
}