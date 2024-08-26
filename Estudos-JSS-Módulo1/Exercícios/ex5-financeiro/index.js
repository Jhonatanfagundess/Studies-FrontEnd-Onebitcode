let qtd = parseFloat(prompt('Qual a quantidade de dinheiro que tem?'))
let menu = ''

do{
    menu = prompt(('O valor atual é: ' + qtd + 'Deseja  1- Adicionar\n2-Remover\n3-Sair'))
    switch(menu){
        case '1':
            qtd += parseFloat(prompt('Qual a quantidade que deseja adicionar?'))
            break
        case '2':
            qtd -= parseFloat(prompt('Qual a quantidade que deseja adicionar?'))
            break
        case '3':
            alert('Saindo do Sistema..')    
        default:
            alert('Finalizando!')
    }
}while(menu != 'Sair')
