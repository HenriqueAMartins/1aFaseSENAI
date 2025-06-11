// 12
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numeroDois = numeros.map(element * 2)
console.log(numeros)
console.log(numeroDois)

// 14
let soma = numeros.reduce(acumulado , valorAtual => acumulado + valorAtual , 0)

let nomes2 = [" João" , " Clara" , " Jonas" , " Carla" , " Maria" , " Carlos" , " José"]
let nomesvirgula = nomes2.reduce((acumulado , valorAtual) => acumulado + ", " + valorAtual , "")
console.log(nomesvirgula)

let numeros1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosInvertidos = 
