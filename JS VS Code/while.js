// let contador = 10

// while(contador >= 0) {
//     alert("contador igual a " + contador)
//     contador --
// }

// alert("acabou")

// let soma

// while(soma < 50){
//         alert("O número vale " + soma)
// }


function gerarCaracterAleatorio(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numeroaleatorio = Math.floor(Math.random() * caracteres.length);

    return caracteres.charAt(numeroaleatorio);
}
function mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua de ter - de 1 a 10 "))
    let senha = ''
    while(quantidade > 0){
        senha = senha + gerarCaracterAleatorio()
        quantidade = quantidade - 1
    }
    alert("A sua senha é: " + senha)x   
}