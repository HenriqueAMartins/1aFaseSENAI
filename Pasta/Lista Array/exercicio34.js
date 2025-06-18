// 34. Rotacione os elementos de um array uma posição para a direita.

function rotacionar(array){
    array.unshift(array.pop())
    return array
}
console.log(rotacionar(notas))