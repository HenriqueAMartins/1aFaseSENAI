let idademinima = 0
let aceitouotermo = false


while((aceitouotermo == false) || (idademinima < 18)){
    idademinima = Number(prompt("Qual a sua idade? "))
    let resposta = prompt("Aceita o termo? Sim ou Não")
    if(resposta === "Sim") aceitouotermo = true
    else aceitouotermo = false
}

if(aceitouotermo === true && idademinima >= 18){
    alert("Você entrou no código!")
}

alert("Você está inscrito!")