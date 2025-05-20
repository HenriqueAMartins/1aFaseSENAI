// 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira.

function exercicio1Pt1(){
    let idade = Number(prompt("Digite qual a sua idade: "))
    let cnh = prompt("Digite se você tem cnh (Sim ou Não): ")

    if(idade >= 18 && cnh == "Sim"){
        alert("Você pode dirigir!")
    }
    else{
        alert("Você ainda não pode dirigir!")
    }
}

// OUTRA FORMA DE FAZER

function exercicio1diferentePt1(){
 let idade = 0
 let temcnh = false
 while(idade < 18 || !temcnh){
     idade = Number(prompt("Digite sua idade"))
     temcnh = prompt("Tem cnh? (Sim ou Não)") == "Sim" ? true : false
     if(idade >= 18 && temcnh) alert("Você pode dirigir!")
        else alert("Ainda não pode dirigir!")
    }
}
// 2. Verifique se um número digitado é positivo e par.

function exercicio2Pt1(){
    let numero = Number(prompt("Digite um número: "))
    if(numero > 0 && numero % 2 == 0){
        alert(numero + " é par e positivo!")
    }
    else{
        alert(numero + " não é par ou não é positivo!")
    }
}


// 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" e a senha for "1234".

function exercicio3Pt1(){
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")
    if(usuario === "admin" && senha === "1234"){
        alert("Você está logado!")
    }
    else{
        alert("Usuário ou senha estão incorretos!")
    }
}


// 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
// negativo.

function exercicio4Pt1(){
    let numero1 = Number(prompt("Digite um número: "))
    let numero2 = Number(prompt("Digite um número: "))
    if(numero1 > 0 && numero2 < 0 || numero1 < 0 && numero2 > 0){
        alert("Valores válidos")
    }
    else{
        alert("Valores inválidos!")
    }
}


// 5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
// 10.

function exercicio5Pt1(){
    let nota = Number(prompt("Digite a sua nota: "))
    if(nota > 6 && nota <= 10){
        alert("Aprovado!")
    }
    else{
        alert("Reprovado!")
    }
}


// 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.

function exercicio6Pt1(){
    let numero = Number(prompt("Digite um número qualquer de 1 a 100:"))
    if(numero >= 1 && numero <= 100){
        alert("Número válido!")
    }
    else{
        alert("Número inválido!")
    }
}


// 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
// 18 ou estudante.

function exercicio7Pt1(){
    let idade = Number(prompt("Digite a sua idade: "))
    let estudante = prompt("Digite se você é estudante (Sim) ou (Não): ")
    if(idade <= 18 && estudante == "Sim"){
        alert("Meia entrada concedida!")
    }
    else{
        alert("Você não tem direito a meia entrada")
    }

}


// 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".

function exercicio8Pt1(){
    let termos = prompt("Digite se você aceitou os termos (Sim) ou (Não): ")
    let email = prompt("Digite se você confirmou o e-mail (Sim) ou (Não): ")
    if(termos == "Sim" && email == "Sim"){
        alert("Cadastro Completo!")
    }
    else{
        alert("Aceite os termos ou confirme seu e-mail para continuar seu cadastro")
    }
}


// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.

function exercicio9Pt1(){
    let altura = Number(prompt("Digite sua altura: "))
    let peso = Number(prompt("Digite seu peso: "))
    if(altura > 1.60 && (peso >= 50 && peso <=90)){
        alert("Apto para o esporte!")
    }
    else{
        alert("Não está apto para o esporte")
    }
}


// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
// for verdade, exiba "Acesso negado".

function exercicio10Pt1(){
    let idade = Number(prompt("Digite se você é maior de idade? (Sim) ou (Não): "))
    let termos = prompt("Digite se você aceitou os termos? (Sim) ou (Não): ")
    if(idade != "Sim" && termos != "Sim"){
        alert("Acesso Negado!")
    }
    else{
        alert("Acesso Concedido!")
    }
}







// 🔸 Parte 2 – while com condições compostas





// 1. Enquanto a senha digitada não for “abc123” e o número de tentativas for
// menor que 3, peça a senha novamente.
function exercicio1Pt2(){
    let tentativas = 0
    let senha = prompt("Digite sua ssenha")
    while(senha !== "abc123" && tentativas < 3)
}

// 2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue
// perguntando.
function exercicio2Pt2(){

}

// 3. Solicite dois números até que ambos sejam pares.
function exercicio3Pt2(){

}

// 4. Peça uma letra até que ela não seja “a” e não seja “b”.
function exercicio4Pt2(){

}

// 5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.
function exercicio5Pt2(){

}

// 6. Peça login e senha até que ambos estejam corretos.
function exercicio6Pt2(){

}

// 7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta
// não for “não”.
function exercicio7Pt2(){

}

// 8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro
// maior que 10.
function exercicio8Pt2(){

}

// 9. Enquanto o nome digitado não for "admin" ou a senha não for "321", continue
// pedindo login.
function exercicio9Pt2(){

}

// 10. Enquanto não forem preenchidos nome e idade, continue solicitando.
function exercicio10Pt2(){
    
}
