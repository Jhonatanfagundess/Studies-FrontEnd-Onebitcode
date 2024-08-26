let opcao = ''

do{
    opcao = prompt('1-Batman\n2-Superman\n3-Flash\n4-Mulher-Maravailha\n5-Encerrar')

    switch(opcao){
        case '1':
            alert('Você Acha o Batman o Melhor!')
            break
        case '2':    
            alert('Você Acha o Superman o Melhor!')
            break
        case '3':
            alert('Você Acha o Flash o Melhor!')
            break
        case '4':
            alert('Você Acha o Mulher-Maravailha o Melhor!')
            break
        case '5':
            alert('Encerrando o programa')
            break
        default:
            alert('Inválido!')    
    }

}while(opcao != '5') 