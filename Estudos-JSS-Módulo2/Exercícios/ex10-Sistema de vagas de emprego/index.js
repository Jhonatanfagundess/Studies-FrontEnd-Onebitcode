function menu(){
    return prompt(
        "Lista de vagas\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever Candidato\n" +
        "5. Excluir vaga\n" +
        "6. Sair\n"
      )
    }

function listarVagas() {
        const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
          textoFinal += indice + ". "
          textoFinal += vaga.nome
          textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
          return textoFinal
        }, "")
      
        alert(vagasEmTexto)
      }    

  


function Criar_vagas(){
    const vaga = {}
    vaga.name= prompt('Qual o nome da vaga?')
    vaga.descrisption = prompt('Descrição da vaga:\n')
    vaga.date = parseFloat(prompt('Qual a data limite da vaga?'))
  


    const confirma = confirm( "Salvar esta vaga?\n" +
        "\nNome da vaga " + vaga.name +
        "\nDescrição: " + vaga.descrisption +
        "\nData limite: " + vaga.date 
      )


      if(confirma){
        vagas.push(vaga)
        alert('Vaga feita')
      }
}  

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
  }

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vaga.candidatos.push(candidato)
      alert("Inscrição realizada")
    }
  }  


function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída.")
    }
  }  


const vagas = []    

function executar(){
    let opcao = ''
    
    do {
        opcao = menu()
    
        switch (opcao) {
          case "1":
            listarVagas()
            break
          case "2":
            Criar_vagas()
            break
          case "3":
            exibirVaga()
            break
          case "4":
            inscreverCandidato()
            break
          case "5":
            excluirVaga()
          case "6":
            alert("Saindo...")
            break
          default:
            alert("Opção inválida.")
        }
    
      } while (opcao !== "6");
}  




  

 