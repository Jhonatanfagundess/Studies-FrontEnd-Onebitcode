class Propriedade{
    constructor(area,price){
        this.area = area
        this.price = price

    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}


class Casa extends Propriedade{

}

const terra = new Propriedade(200, 3000000)
const house = new Casa(120, 500000)

console.log(terra)
console.log(house instanceof Propriedade)

class apartamento extends Propriedade {
    constructor(number , area , price){
        //this.area = area
        //this.price = price Não fazer desse jeito pois dá um erro
        super(area,price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0,-2)
    }
}

const ap = new apartamento('201', 150, 20000)
console.log(ap)
console.log(ap.getFloor())
