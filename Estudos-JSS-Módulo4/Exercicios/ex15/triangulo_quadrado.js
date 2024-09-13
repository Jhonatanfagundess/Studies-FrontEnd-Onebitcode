 function areaDoTriangulo(base , altura){
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return (base * altura) / 2
}

 function areaDoQuadrado(lado){
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
}

export{ areaDoQuadrado , areaDoTriangulo}

