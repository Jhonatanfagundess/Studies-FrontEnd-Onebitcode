function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)


    const listaElements = document.getElementsByTagName('li')
    console(listaElements)


    const inpustContatos = document.getElementsByClassName('contact-input')
    console.log(inpustContatos )


    const contatos = document.querySelectorAll('#contact-list > li > label')
    console.log(contatos)
    //Pega todos os elementos


    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)


    const primeiro = document.querySelector('#contact-list > li > label')// Pega apenas o primeiro elemmento
}