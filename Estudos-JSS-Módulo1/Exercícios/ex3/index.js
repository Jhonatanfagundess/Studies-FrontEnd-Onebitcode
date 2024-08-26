const metros = prompt('Quantos metros deseja converter?')
const metroNumericos = parseFloat(metros)
const medida = prompt('Qual medida Deseja converter \n1-MM\n2-CM\n3-DM\n4-DAM\n5-HM\n-6KM ?')

switch (medida) {
    case '1':
       converte =  metroNumericos * 1000
       alert('Sua conversão em MM é:' + converte)
        break;
    case '2':
        converte = metroNumericos * 100
        alert("Sua conversão é CM é :" + converte)    
    case '3':
        converte = metroNumericos * 10
        alert("Sua conversão é CM é :" + converte) 
        break
    case '4' :
        converte = metroNumericos * 0.1
        alert("Sua conversão é CM é :" + converte) 
        break
    case '5':
        converte = metroNumericos * 0.01
        alert("Sua conversão é CM é :" + converte) 
        break
    case '6':
        converte = metroNumericos * 0.001
        alert("Sua conversão é CM é :" + converte) 
        break
    default:
        alert('Finalizando...')
        break;
}