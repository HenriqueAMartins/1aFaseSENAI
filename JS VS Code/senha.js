let senha = "henrique123"
let tentativas = 1
let acertou = false

while(tentativas <= 3){
    let senhatentiva = prompt("Digite sua senha abaixo: ")
    if(senha === senhatentiva){
        alert("Senha correta! usuário logado!")
        acertou = true
    } else{
        let tentativassobrando = 3 - tentativas
        alert("Senha incorreta! Você tem mais " + tentativassobrando + " tentativas")
    }
    tentativas++
}
if(acertou === false) alert("Conta bloqueada!")
else alert("Você está dentro do sistema!")