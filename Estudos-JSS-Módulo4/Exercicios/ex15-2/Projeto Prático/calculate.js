export default function calculate(){
    const resultInput = document.querySelector("#result")
    resultInput.value = 'Error'
    resultInput.classList.add('Error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('Error')
}