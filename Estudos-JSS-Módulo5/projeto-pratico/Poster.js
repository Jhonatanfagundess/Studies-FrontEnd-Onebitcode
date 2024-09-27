const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name,description,height,width,price,stock = 0){
        super(name,description,price,stock)
        this.height = height
        this.width = width
    }
}