// 37. Conte as vogais em cada string de um array.
function contarVogais(palavras){
    return (palavras.match(/aeiou/gi) || []).length
}
let meuarray = ['palavra' , 'teste' , 'oi']
console.log(meuarray.map(palavra => {
    return{
        palavra: palavra,
        vogais: contarVogais(palavra)
    }
}))