/*🛒 6. O Carrinho da Loja
História:
Uma loja só dá desconto se o cliente comprar mais de 3 itens ou se o valor total
for maior que R$ 100.
Desafio:
let quantidadeItens;
let valorTotal;
Mostre:
"Desconto aplicado!" ou
"Sem desconto dessa vez."*/

let quantidadeItens = prompt("Digite a quantidade de itens do seu carrinho:") 
let valorTotal = prompt("Digite o valor total da sua compra:")

if(quantidadeItens > 3 || valorTotal > 100){
    console.log("Desconto aplicado!")
}else console.log("Sem desconto dessa vez.")