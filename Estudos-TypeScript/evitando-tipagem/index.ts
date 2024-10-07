function sendSpaceShip(spaceship : {pilont : string , copilot? : string}){

}


sendSpaceShip({pilont :'Jhonatan', copilot : 'Rafael'})
sendSpaceShip({pilont: 'João'}) // Aqui evitamos um erro do TS


let input : unknown //Não sabe o tipo de dado recebido

input = 10
input = 'Test'
input = []

let any //Aqui fazemos o TS para de funcionar

function Verificar(test){
    if(true){

    }else{
        let check: never // Mostra que esse valor não devia existir
        return check
    }
}