// 24. Substitua todas as ocorrências de "banana" por "maçã" em um array.

let frutas = ['Abacaxi' , 'Laranja ' , 'Kiwi' , 'Banana' , 'Maçã']
let frutasNovo = frutas.map(fruta => fruta ===  ' Banana' ? 'Maçã' : fruta)
console.log(frutasNovo);