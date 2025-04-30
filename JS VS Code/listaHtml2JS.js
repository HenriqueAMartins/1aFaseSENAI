function gerarCaracterAleatorio(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numeroaleatorio = Math.floor(Math.random() * caracteres.length);

    return caracteres.charAt(numeroaleatorio);
}
function mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua de ter: "))

    if(quantidade == 1){
        alert("Senha: " + gerarCaracterAleatorio())
    } else if(quantidade == 2){
        alert("Senha: " + gerarCaracterAleatorio() + gerarCaracterAleatorio())
    } else if(quantidade == 3){
        alert("Senha: " + gerarCaracterAleatorio() + gerarCaracterAleatorio()
       + gerarCaracterAleatorio() )
    } else if(quantidade == 4){
        alert("Senha: " + gerarCaracterAleatorio() + gerarCaracterAleatorio()
       + gerarCaracterAleatorio() + gerarCaracterAleatorio())
    } else if(quantidade == 5){
        alert("Senha: " + gerarCaracterAleatorio() + gerarCaracterAleatorio()
       + gerarCaracterAleatorio() + gerarCaracterAleatorio() + gerarCaracterAleatorio())
    } 
}

// 1. Decodificador de Mensagem
// Descrição: Substitui as vogais de uma frase por símbolos.
// Entradas: Texto simples (ex: "olá mundo").
// Exemplo de Saída: "ol@ m*nd#"
function exercicio1Lista2(){
    let aviso = prompt("Vamos decodificar as mensagens! (Digite 'ok' para continuar)")
    let mensagem = prompt("Digite uma frase simples: ")


}

// 2. Exercício 2 - Calculadora de Soma
// Peça ao usuário para inserir dois números (você pode usar prompt para
// pegar os valores como strings e depois convertê-los para números com
// Number ).
// Mostre o resultado da soma desses dois números usando alert .
function exercicio2Lista2(){
    let aviso = prompt("Vamos somar dois números! (Digite 'ok' para continuar)")
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite mais um número: "))
    let soma = num1 + num2
    alert(`A soma de ${num1} + ${num2} é = ${soma}`)

}

// 3. Gerador de Nome de Super-herói
// Descrição: Junta o nome do usuário com um adjetivo e um superpoder aleatório.
// Entradas: Nome (ex: "Carlos").
// Exemplo de Saída: "Capitão Carlos, o Invencível das Sombras"

function exercicio3Lista2(){
    let aviso = prompt("Vamos descobrir qual o seu super-herói! (Digite 'ok' para continuar)")
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

// 4. Horóscopo Interativo
// Descrição: Mostra uma previsão aleatória com base no signo do usuário.
// Entradas: Seleção do signo (ex: "Leão").
// Exemplo de Saída: "Hoje é um ótimo dia para buscar novos desafios, Leão!"

function exercicio4Lista2(){
    let aviso = prompt("Vamos descobrir a mensagem pro seu signo! (Digite 'ok' para continuar)")
    let signo = prompt("Digite qual o seu signo: ")
    if(signo == "Aquário"){
        alert("No trabalho, você conta com praticidade e responsabilidade para fazer o serviço deslanchar")
    }else if(signo == "Peixes"){
        alert("Seu lado comunicativo será seu maior trunfo nesta semana e você pode explorar isso na hora de fazer contatos novos no trabalho")
    }else if(signo == "Áries"){
        alert("Você começa a semana com boas energias na hora de lidar com dinheiro")
    }else if( signo == "Touro"){
        alert("Esta semana será favorável para cuidar de alguns interesses pessoais")
    }else if( signo == "Gêmeos"){
        alert("Com a Lua infernizando o seu astral, vai ser preciso mais cautela e cuidado na hora de cuidar dos assuntos do dia a dia, inclusive no trabalho")
    }else if( signo == "Câncer"){
        alert("Você começa com ótimas vibes para se arriscar mais e buscar soluções inovadoras para problemas antigos")
    }else if( signo == "Leão"){
        alert("Sua atenção deve se concentrar na vida profissional esta semana")
    }else if( signo == "Virgem"){
        alert("Agir em equipe será o segredo do sucesso nesta semana")
    }else if( signo == "Libra"){
        alert("A semana começa movimentada, com direito a reviravoltas e surpresas pelo caminho")
    }else if( signo == "Escorpião"){
        alert("A semana promete boas energias para os relacionamentos e você tem tudo para se entender melhor com as pessoas à sua volta")
    }else if( signo == "Sagitário"){
        alert("Você já começa o dia com disposição para mergulhar nas tarefas")
    }else if( signo == "Capricórnio"){
        alert("No trabalho, vai dar um show em serviços que exigem criatividade")
    }else{
        alert("Este signo não existe!")
    }
    
}

// 10 - Jogo do Par ou Ímpar
// Objetivo: O usuário joga contra o computador para ver quem vence no jogo de
// par ou ímpar.
// 🧩 Como Funciona
// 1. O usuário escolhe “Par” ou “Ímpar”.
// 2. Depois, o usuário digita um número de 0 a 10.
// 3. O computador gera aleatoriamente um número de 0 a 10.
// 4. O sistema soma os dois números.
// 5. Se a soma for par e o usuário escolheu “Par”, ele ganha.
// Se a soma for ímpar e o usuário escolheu “Ímpar”, ele também ganha.
// 💡 Exemplo Completo
// O usuário escolhe: “Ímpar”
// O usuário digita: 3
// O computador sorteia: 4
// Soma total: 3 + 4 = 7
// Resultado: Ímpar
// Usuário venceu!

function exercicio10Lista2(){
    let aviso = prompt("Vamos descobrir se o número é par ou ímpar! \n(Digite 'ok' para continuar)")
    let parOuImpar = (prompt("Digite se você quer par ou ímpar: "))
    let numero = Number(prompt("Digite um número aleatório (de 1 a 10): "))
    let min = 0
    let max = 10
    let numeroaleatorio = Math.floor(Math.random() * (max - min) + min)
    let soma = numero + numeroaleatorio

    if(soma %2 === 0){
        if(parOuImpar == "par")
        alert("Você ganhou! Você digitou: " + parOuImpar + " e " + numero + ". \nO número aleatório é " + numeroaleatorio + ", e a soma é: " + soma)
    else alert("Você perdeu! Você digitou: " + parOuImpar + " e " + numero + ". \nO número aleatório é " + numeroaleatorio + ", e a soma é: " + soma)
    }else {
        if(parOuImpar == "impar")
            alert("Você ganhou! Você digitou: " + parOuImpar + " e " + numero + ". \nO número aleatório é " + numeroaleatorio + ", e a soma é: " + soma)
       else alert("Você perdeu! Você digitou: " + parOuImpar + " e " + numero + ". \nO número aleatório é " + numeroaleatorio + ", e a soma é: " + soma)
    }

}

// 14. Contador de Cliques por Segundo
// Descrição: Conta quantos cliques o usuário deu.
// Entradas: Cliques em botão.
// Exemplo de Saída: “Você clicou 32 vezes!” Ao clicar no botão de resultado.

function exercicio14Lista2(){
    let
}
