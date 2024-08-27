let opcao = ''
let pacientes = []


do{ 
    let fila = ''
    for(let i = 0; i < fila.length ; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    
    opcao = prompt('O que deseja realizar?\n1-Novo Paciente \n2-Consultar Paciente \n3-Sair')

    switch(opcao)
    {
        case opcao == '1':
            let name = prompt('Qual o nome do paciente?')
            pacientes.push(name)
            break
        case opcao == '2':
            const remove = pacientes.shift()
            if (!remove) {
              alert("Não há pacientes na fila!")
            } else {
              alert(remove + " foi removido da fila.")
            }
            break
        case opcao == '3':
            alert('Finalizando...')
            break    
        default:
            alert('Opção Inválida')
            break
    }

}while(opcao !== 'Sair')