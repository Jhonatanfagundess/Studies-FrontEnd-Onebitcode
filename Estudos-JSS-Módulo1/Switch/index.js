const result = prompt('Escolha uma alternativa: a/b/c')

switch(result){
    case 'a':
        alert('Está errado!')
        break
    case 'b':
        alert('O caso está certo')
        break
    case 'c':
        alert('Errado!') 
        break
    default:
        alert('Finalizando')
        break          
}