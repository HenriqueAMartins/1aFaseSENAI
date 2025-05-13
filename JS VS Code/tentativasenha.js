// let tentativa = 0
// let senha = 'henrique1234'
// let senhadigitada = ''
// while(senhadigitada !== senha && tentativa <= 3){
//     senhadigitada = prompt("Digite sua senha: ")
//     tentativa++ 
// }

// for(let tentativas = 1 ; tentativas <= 3 && senhadigitada !== senha ;  tentativas++){
//     senhadigitada = prompt("Digite sua senha")
// }

// if(senhadigitada !== senha){
//     alert("Conta bloqueada!")
// }
// else{
//     alert("Logado!")
// }


let usuario = "admin"
let senha = "1234"
usuariodigitado = ''
senhadigitada = ''
let tentativas = 1
while((usuario !== usuariodigitado || senha !== senhadigitada) && tentativas <= 3){
    usuariodigitado = prompt("Digite seu usuário: ")
    senhadigitada = prompt("Digite sua senha: ")
    tentativas++
}

if(senhadigitada == senha && usuario == usuariodigitado){
    alert("Você está logado")
}
else alert("Usuário Bloqueado!")