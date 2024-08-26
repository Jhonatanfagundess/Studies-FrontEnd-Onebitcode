const p1 = prompt('Qual o nome do seu personagem?')
const at = parseFloat(prompt('Qual seu poder de ataque?'))

const p2 = prompt('Qual o nome do seu personagem?')
let life = parseFloat(prompt('Qual a quantidade de vida?'))
const def = parseFloat (prompt('poder de defesa?'))
const escudo = parseFloat(prompt('Tem escudo? Digite Sim ou Não(Respeite as letras maiusculas)'))

let dano_causado = 0


if(at > def && escudo == 'Não'){
    dano_causado = a - d
}else if(a > d && escudo =='Sim'){
    dano_causado = (a - d) / 2
}else if(a <= d){
    dano_causado = 0
}

life -= dano_causado


alert(p1 + " causou " + dano_causado + " pontos de dano em " + p2)
alert(
  p1 + "\nPoder de ataque: " + at + "\n\n" +
  p2 + "\nPontos de vida: " + life +
  "\nPoder de defesa: " + def + "\nPossui escudo: " + escudo
)

