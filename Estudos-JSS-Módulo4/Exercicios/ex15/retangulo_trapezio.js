export function areaDoRetangulo(base , altura){
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
}


export function areadoTrapezio(base_maior, base_menor,altura){
    const base_menor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const base_maior= parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (base_maior + base_menor) * altura / 2   
}

export { areaDoRetangulo , areadoTrapezio}
