/*🧃 4. A Máquina de Suco Inteligente
História:
Uma máquina mágica de sucos aceita o nome da fruta e prepara o suco
correspondente. Se não reconhecer a fruta, diz que está fora do cardápio.
Desafio:
Use if/else com strings.
let fruta;
Se fruta for:
"laranja" → "Preparando suco de laranja 🍊"
"uva" → "Preparando suco de uva 🍇"
"morango" → "Preparando suco de morango 🍓"
Lista de exercícios 2
qualquer outro → "Essa fruta não está disponível 😢"*/

let fruta = prompt("Digite o sabor do suco:")

if (fruta == "laranja"){
    console.log("Preparando suco de laranja 🍊")
}else if(fruta =="uva"){
    console.log("Preparando suco de uva 🍇")
}else if(fruta == "morango"){
    console.log("Preparando suco de morango 🍓")
}else console.log("Essa fruta nâo está disponível no nosso cardápio 😢")
