let nomes = ["João" , " Clara" , " Jonas" , " Carla" , " Maria" , " Carlos" , " José"]

console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((element, index) =>
    {
    console.log(element + "globmail.com")
    }
);

nomesComSobrenome = nomes.map((nome) => {
    return nome + " Da Silva"
})

let nomesFiltrados = nomes.filter((nome) => nome.length > 5)
let findNome = nomes.find((nome) => nome.length > 5)
console.log(findNome)



// console.log(nomes[10]);
// console.log(nomes.length)

// for(let contador = 0; contador < nomes.length; contador++){
//     console.log(nomes(contador))
// }

// nomes.push()
// nomes.pop()
// nomes.shift()
// nomes.unshift()