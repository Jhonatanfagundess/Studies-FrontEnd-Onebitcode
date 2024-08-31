function addInput(){
    const ul = document.getElementById('inputs')
    
    
    const newli = document.createElement('li')
    newli.innerText = 'Novo Input'


    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    

    newli.appendChild(newInput)
    ul.appendChild(newli)
}