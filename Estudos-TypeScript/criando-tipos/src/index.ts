let literal : 'Hello World'
let pi : 3.14159

let option: 'Yes' | 'No' | 'Maybe' //Qualqueer um dos valores é válido

let optins : number | boolean // Recebe vários tipos


type Plannet = 'Terra' | 'Venus'

let plannet : Plannet

function checkPlanet(plannet: Plannet){
    if (plannet === 'Terra'){
        console.log('Que merda!')
    }else{
        console.log('Ue tá no futuro?')
    }
}