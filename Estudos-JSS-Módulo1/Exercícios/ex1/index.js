let name = window.prompt('Qual seu primeiro nome?')
let sobre = window.prompt('Qual seu sobrenome?')
let estudo = window.prompt('Qual seu campo de estudo?')
let year = window.prompt('Qual seu ano de nascimento?')
let cal = 2024 - year

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + name + " " + sobre +
    "\nCampo de estudo: " + estudo +
    "\nIdade: " + cal
)