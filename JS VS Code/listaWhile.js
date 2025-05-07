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