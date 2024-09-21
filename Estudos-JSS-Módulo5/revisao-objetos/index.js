/*const hero  = {
    name : "Guts",
    age : 20,
    anime : 'Berserk',
    Stock : 0,
    tags : ["Fantasia" , "Dark" , "Violence"],
    author : 'Kentaro Miura',
    add0nStock(quantity){
    this.Stock += quantity
}
}*/


//PascalCase 
function Hero(name,age,anime,tags){
    this.name = name
    this.age = age 
    this.anime = anime
    this.tags = tags
    this.public = false
    this.stock = 0
    this.add0nStock = function (quantity){
        this.stock += quantity
    }
}




const tags = ["Fantasia", "Demons"]
const author = 'Kentaro Miura'
const call = new Hero('Guts',19,"Berserk",tags,author)
console.log(call)


function Pilotos(name,numbers,champions){
    this.name = name
    this.numbers = numbers
    this.champions = champions
    this.pitstop = 0
    this.add0nStock = function (qtd){
        this.pitstop += qtd
    }
}

const name = ['Vettel' , 'Max' , 'Lewis' ,'Kimi']
const numbers = [5,4,44,10]

const genios = new Pilotos(name,numbers,12)
console.log(genios )


