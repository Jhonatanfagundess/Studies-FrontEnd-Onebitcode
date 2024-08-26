const name1 = prompt('Qual seu nome?')
const name2 = prompt('Qual seu nome?')
const vel1 = prompt('Qual a velocidade do carro 1?')
const vel2 = prompt('Qual a velocidade do carro 2?')

const x = parseFloat(vel1)
const y = parseFloat(vel2)


if(x > y){
    alert('\nCarro do  ' + name1 + 'é mais rápido e está a:' +x)
}else if(x < y){
    alert('\nCarro ' + name2 + 'é mais rápido e está a:' +y )
}else{
    alert('\nO carro dos dois estão na mesma velocidade!')
}