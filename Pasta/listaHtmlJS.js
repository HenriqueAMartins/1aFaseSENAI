// 1. Exercício 1 - Saudação Personalizada
// Solicite ao usuário que digite seu nome usando prompt .
// Exiba uma saudação personalizada no formato: "Olá, [nome]! Seja bemvindo!" usando alert .

function ola(){
    let nome = prompt("Digite qual é o seu nome: ")
    alert(`Olá, ${nome}! Seja bem-vindo!`)
}

// 2. Exercício 2 - Calculadora de Soma
// Peça ao usuário para inserir dois números (você pode usar prompt para
// pegar os valores como strings e depois convertê-los para números com
// Number ).
// Mostre o resultado da soma desses dois números usando alert .

function soma(){
    let aviso = prompt("Vamos somar dois números! (Digite 'ok' para continuar)")
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite mais um número: "))
    let soma = num1 + num2
    alert(`A soma de ${num1} + ${num2} é = ${soma}`)
}

// 3. Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
// Solicite ao usuário que insira uma temperatura em Celsius.
// Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
// Exiba o resultado em uma mensagem de alert .

function conversor(){
    let aviso = prompt("Vamos converter Graus Celsius para Graus Fahrenheit! \n(Digite 'ok' para continuar)")
    let grausCelsius = Number(prompt("Digite a temperatura em Celsius  que você quer converter para Fahrenheit: "))
    let grausFahrenheit = grausCelsius * 9/5 + 32
    alert(` ${grausCelsius}°C = ${grausFahrenheit}°F`)
}

// 4. Exercício 4 - Verificar se um número é par ou ímpar
// Solicite ao usuário que insira um número.
// Verifique se o número é par ou ímpar e exiba uma mensagem
// correspondente usando alert .

function parOuImpar(){
    let aviso = prompt("Vamos ver se o número que você digitar é par ou ímpar! \n(Digite 'ok' para continuar)")
    let numero = Number(prompt("Digite um número qualquer: "))
        if(numero % 2 == 0){
            alert(`O número ${numero} é par!`)
        } else{
            alert(`O número ${numero} é ímpar!`)
        }
}

// 5. Exercício 5 - Calcular a média de três notas
// Peça ao usuário para inserir três notas de um aluno.
// Calcule a média das notas e exiba o resultado em um alert .

function media3Notas(){
    let aviso = prompt("Vamos ver se você passou de ano! (Digite 'ok' para continuar)")
    let nota1 = Number(prompt("Digite a sua primeira nota: "))
    let nota2 = Number(prompt("Digite a sua segunda nota: "))
    let nota3 = Number(prompt("Digite a sua terceira nota; "))
    let soma = nota1 + nota2 + nota3
    let media = soma / 3
    alert(`A sua média de 3 notas é = ${media}`)
}

// 6. Exercício 6 - Calculadora de IMC
// Solicite ao usuário que insira seu peso e altura.
// Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura²).
// Exiba o resultado em um alert e classifique o IMC de acordo com os
// valores:
// Menos de 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// 30 ou mais: Obesidade

function imc(){
    let aviso = prompt("Vamos ver o seu IMC (Índice de Massa Corporal!) \n(Digite 'ok' para continuar)")
    let peso = Number(prompt("Digite qual é o seu peso: "))
    let altura = Number(prompt("Digite qual é a sua altura: "))
    let imc = peso / (altura * 2)
    alert(`O seu IMC é = ${imc}`)
        if(imc >= 18.5 &&  24.9 ){
            alert(`Seu IMC é normal/adequado para você!`) 
        } else{
             alert(`Seu IMC é ${imc}, `)
        }
        
}

// 8. Exercício 8 - Verificar ano bissexto
// Solicite ao usuário que insira um ano.
// Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas
// não por 100, exceto se for divisível por 400) e exiba uma mensagem com o
// resultado em alert .

function anoBissexto(){
    let aviso = prompt("Vamos verificar se o ano é bissexto \n(Digite 'ok' para continuar)")
    let 
}

function exercicio3Lista2(){
    let nome = prompt("Digite seu nome para saber o seu nome de super herói!")
    let min = 1
    let max = 4
    let numeroaleatorio = Math.floor(Math.random() * (max - min) + min)

    // Math.ceil() -> arredonda pra cima 
    // Math.floor() -> arredonda pra baixo
    // Math.round() -> arredonda pro mais próximo

    let frase1 = "Capitão América"
    let frase2 = "Homem de Ferro"
    let frase3 = "Homem Aranha"

    if(numeroaleatorio === 1){
        alert(nome + ` ${frase1}`)
    }
    else if(numeroaleatorio === 2){
        alert(nome +  ` ${frase2}`)
    }
    else if(numeroaleatorio === 3){
        alert(nome +  ` ${frase3}`)
    }
}