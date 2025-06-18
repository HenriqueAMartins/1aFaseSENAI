// 32. Crie uma função que recebe um array de números e retorna a média.

let notas = [5, 6, 7, 8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual) => acumulador += atual, 0)
    return soma/array.length
}
console.log(calcularMedia(notas))