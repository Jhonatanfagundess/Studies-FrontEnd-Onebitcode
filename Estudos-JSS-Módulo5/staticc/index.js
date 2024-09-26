class Reservado{
    constructor(hospedes,quarto,dias){
        this.hospedes = hospedes
        this.quarto = quarto
        this.dias = dias
        this.total = dias * Reservado.base
    }

    static base = 150

    static ShowBase(){
        console.log(`O valor da diária : ${Reservado.base}`)
    }

    static get premium(){
        return Reservado.base * 1.5
    }


}

Reservado.ShowBase()

const r1 = new Reservado(3,'201',5)
console.log(r1)

Reservado.base = 400

const r2 = new Reservado(5,'500',12)
console.log(r2)

console.log(`O valor do quarto premium é : ${Reservado.premium}`)