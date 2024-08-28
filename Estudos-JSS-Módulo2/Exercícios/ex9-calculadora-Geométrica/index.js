function areaDoTriangulo(base , altura){
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return (base * altura) / 2
}

function areaDoRetangulo(base , altura){
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
}

function areaDoQuadrado(lado){
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
}

function areadoTrapezio(base_maior, base_menor,altura){
    const base_menor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const base_maior= parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (base_maior + base_menor) * altura / 2   
}

function areaDoCirculo(pi = 3.14 , raio){
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (pi * raio * raio)
}

function exibirMenu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }

function executar(){
let opcao = ''

do{
    opcao = exibirMenu()
    let resultado = ''

    switch(opcao){
        case '1':
            resultado = areaDoTriangulo()
            break
        case '2':
            resultado = areaDoRetangulo()
            break
        case '3':
            resultado = areaDoQuadrado()
            break
        case '4':        
            resultado = areadoTrapezio()
            break
        case '5':
            resultado =  areaDoCirculo() 
            break   
        case '6':
            alert('Finalizando...')
            break
        default:
            alert('Opção inválida')        
    }


}while(opcao !== '6')
}