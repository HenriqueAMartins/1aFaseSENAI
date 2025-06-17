// 26. Crie um novo array contendo apenas as strings de um array com tipos mistos.

let mistos = ['Abacaxi' , 'Laranja' , 34 , 322]
let strings = mistos.filter(valor => typeof valor === "string")
