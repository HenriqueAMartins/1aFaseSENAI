// 1. Mostre apenas os números pares de 1 a 20.

function exercicio1(){
    contador = 1
    while(contador <= 20){
        resultado = contador % 2
        if(resultado == 0){
            alert("o número: " + contador + " é par!")
        }
        contador++
    }
}

// 2. Mostre apenas os números ímpares de 1 a 20.

function exercicio2(){
    contador = 1
    while(contador <= 20){
        resultado = contador % 2
        if(resultado != 0){
            alert("o número: " + contador + " é impar!")
        }
        contador++
    }
}

// 3. Imprima “Olá, mundo!” 5 vezes.

function exercicio3(){
    contador = 1
    while(contador <= 5){
        alert("Olá, mundo!")
        contador++
    }
}

// 4. Conte de 0 a 50 pulando de 5 em 5.

function exercicio4(){
    contador = 0
    while(contador <= 50){
        alert("O número é: " + contador)    
        contador += 5  
    }
}


// 5. Conte de 100 até 0 diminuindo de 10 em 10.

function exercicio5(){
    contador = 100
    while(contador <= 100 && contador >= 0){
        alert("o número é: " + contador)
    contador -= 10
    }
}


// 6. Conte de 0 até 30 e mostre apenas os múltiplos de 3.

function exercicio6(){
    contador = 0
    while(contador <= 30){
        resultado = contador % 3
        if(resultado == 0){
            alert("Os números são: " + contador)
        }
        contador++
    }
}


// 7. Conte de 1 até 10 e mostre o quadrado de cada número.

function exercicio7(){
    contador = 1
    while(contador <= 10){
        quadrado = contador **2
        alert("O quadrado de " + contador + " é: " + quadrado)
    contador++
    }
}


// 8. Conte de 1 até 10 e mostre o cubo de cada número.

function exercicio8(){
    contador = 1
    while(contador <= 10){
        cubo = contador **3
        alert("O cubo de " + contador + " é: " + cubo)
    contador++
    }
}


// 9. Conte de 1 até 15 e mostre se o número é par ou ímpar.

function exercicio9(){
    contador = 1
    while(contador <= 15){
        resto = contador % 2
        if(resto == 0){
        alert("O número " + contador + " é par!")
        contador++  
        } else {
            alert("O número " + contador + " é impar!")
            contador++
        }
    }
}


// 10. Conte até 100 e imprima somente os divisíveis por 4.

 function exercicio10(){
    contador = 1
    while(contador <= 100){
        resto = contador % 4
        if(resto === 0){
            alert("Contando até 100, mas somente com números divididos por 4: " + contador)
        }
        contador++
    }
 }



// 11. Faça um loop que mostre os números de 1 a 10 com a frase “Número: X”.

function exercicio11(){
    contador = 1
    while(contador <= 10){
        alert("Número " + contador)
        contador++
    } 
}

// 12. Conte até 20 e exiba “Fizz” para múltiplos de 3.
function exercicio12(){
    contador = 1 
    while(contador <= 20){
        resto = contador % 3
        if(resto === 0){
            alert(contador + " Fizz")
        }else{
            alert(contador)
        }
        contador++
    }
}


// 13. Conte até 20 e exiba “Buzz” para múltiplos de 5.

function exercicio13(){
    contador = 1 
    while(contador <= 20){
        resto = contador % 5
        if(resto === 0){
            alert(contador + " Buzz")
        }else{
            alert(contador)
        }
        contador++
    }
}


// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


// PARTE 2
// 1. Calcule a soma dos números de 1 a 10.



// 2. Calcule a multiplicação de 1 a 5 (fatorial de 5).



// 3. Conte quantos números pares existem entre 1 e 50.



// 4. Conte quantos múltiplos de 6 existem até 100.



// 5. Conte de 1 a 30, pulando os múltiplos de 4.



// 6. Some os números de 1 a 100, mas pare se a soma passar de 400.
function exercicio6Parte2(){
    let cont = 1
    while(cont <= 100 && soma <= 400){
        soma = soma + cont
        console.log('Cont: ' + cont)
        console.log('Soma: ' + soma)
        console.log('=======================')
        cont++ //modificação da contagem
    }
    console.log("Soma: ") + soma
}


// 7. Simule uma senha com 3 tentativas



// 8. Conte os números de 1 a 50, mas pare se chegar a 30.



// 9. Conte até 100, mas exiba uma mensagem especial no 50.



// 10. Conte de 10 a 0 e diga “Lançamento!” ao final.



// 11. Conte até 30 e diga “Pulando!” para múltiplos de 7.



// 12. Conte de 1 a 20 e diga “Especial!” para múltiplos de 2 e 3 ao mesmo tempo.



// 13. Conte de 1 a 10 e diga se o número é menor ou maior que 5.



// 14. Faça um loop que pare ao chegar em um número aleatório entre 1 e 10(simulado).



// 15. Mostre todos os divisores de um número X (por exemplo, 24).



// 16. Some apenas os números ímpares entre 1 e 20.



// 17. Conte os múltiplos de 9 entre 1 e 100.



// 18. Conte os números de 50 até 0 que não são múltiplos de 5.



// 19. Calcule a soma dos números pares até 100.



// 20. Simule o funcionamento de um semáforo (verde → amarelo → vermelho).


