//Array com duas dismensões
const aryy = [
    'Nível 1',
    ['Nivel 2 ','Pedro'],
    [
        ['Nivel 3','Ola mundo'],
        ['Nivel 3', 'Hello World']
    ]

]

const matriz = [
    ['l1 , c1' , 'L2 , C2' , 'L3,C3' , 'LI,C4']
    ['l2 , c1' , 'L2 , C2' , 'L3,C3' , 'LI,C4']
    ['l3 , c1' , 'L3 , C2' , 'L3,C3' , 'L3,C4']

]

console.table(matriz)

matriz.push(['Nova Linha'])
matriz[0].push(['Nova coluna'])


// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}
