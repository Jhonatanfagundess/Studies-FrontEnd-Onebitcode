const name = prompt('Qual seu nome?')
let visita = prompt('Já visitou alguma cidade? Sim ou Não?')
let cidades = ''
let qtd = 0

while(visita === 'Sim'){
    let nome = prompt('Qual o nome da cidade ?')
    cidades += '-' + nome + '\n'
    qtd += 1
    visita = prompt('Já visitou alguma cidade? Sim ou Não?')
}


alert('O aluno: ' + name + ' Já visitou:' + cidades + 'no total sendo:' + qtd)