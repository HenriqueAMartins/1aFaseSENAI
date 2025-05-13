// Exibe número múltiplos de 2 e 3 ou que sejam 25.

for(let contador = 0 ; contador <= 100 ; contador++){
    if(contador % 2 == 0
        || contador % 3 == 0
        ||  contador == 25){
        alert("Número atende a regra " + contador)
        }
    // if(contador % 2 == 0)  alert("Múltiplo de 2: " + contador)
    //     else if(contador % 3 == 0) alert("Múltiplo de 3: " + contador)
}