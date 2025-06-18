// 27. Coloque a primeira letra de cada palavra em maiúscula.

let palavras = ['teste' , 'seila' , 'qualquer' , 'coisa']
let palavrasMaiusculo = palavras.map((palavras) => {
    let [primeira, ...restante] = palavra
    console.log(primeira, restante)
    let novaletra = primeira.toUpperCase()
    return novaletra + restante.join('')
})
console.log(palavrasMaiusculo)