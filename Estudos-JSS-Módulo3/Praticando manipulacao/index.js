function addContact(){
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'
  
  const ul = document.createElement('ul')
  const nameli = document.createElement('li')
  nameli.innerText = 'Nome:'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  ul.appendChild(nameli)
  nameli.appendChild(nameInput)
  ul.appendChild(document.createElement('br'))

  const phoneli = document.createElement('li')
  phoneli.innerText = 'Telefone:: '
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  ul.appendChild(phoneli)
  phoneli.appendChild(phoneInput)
  ul.appendChild(document.createElement('br'))
  

  const addresli = document.createElement('li')
  addresli.innerHTML = '<label for="address">Endereço</label>'
  const addressinput = document.createElement('Input')
  addressinput.type = 'text'
  addressinput.name = 'address'
  addressinput.id = 'address'
  addresli.appendChild(addressinput)
  ul.appendChild(addresli)
  ul.appendChild(document.createElement('br'))
  
  contactSection.append(h3, ul)
}


function removeContact(){
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')
  
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}