import {areaDoCirculo} from './circulo'
import { areaDoRetangulo , areadoTrapezio} from './retangulo_trapezio'
import { areaDoRetangulo } from './retangulo_trapezio'
import { areaDoQuadrado , areaDoTriangulo} from './triangulo_quadrado'





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

executar()