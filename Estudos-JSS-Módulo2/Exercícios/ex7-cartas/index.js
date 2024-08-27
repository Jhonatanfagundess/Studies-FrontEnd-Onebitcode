let opcao = ''
const baralho = []

do{
    opcao = prompt('O que deseja realizar?\n1-Adicionar Carta \n2- Puxar uma carta \n3-Sair')

    switch(opcao){
        case opcao == '1':
            const nameCarta = prompt('Qual o nome da carta?')
            baralho.push(nameCarta)
        case opcao == '2':
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
              } else {
                alert("Você puxou um(a) " + cartaPuxada)
              }
        case opcao == '3':
            alert('Finalizando!')
            break    
        default:
            alert('Opção inválida!')
    }


}while(opcao !== 'Sair')