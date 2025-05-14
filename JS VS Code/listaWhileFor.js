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

}


// 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.

function exercicio6Pt1(){

}


// 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
// 18 ou estudante.

function exercicio7Pt1(){

}


// 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".

function exercicio8Pt1(){

}


// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.

function exercicio9Pt1(){
    
}


// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
// for verdade, exiba "Acesso negado".

function exercicio10Pt1(){

}