/*function brinquedos(){
let brinquedos = prompt("Digite quantos brinquedos você trouxe: ")
    if(brinquedos <= 0){
        alert("Você não trouxe brinquedos :(")
    }if(brinquedos == 1){
        alert("Parbéns, você trouxe " + brinquedos + " brinquedo e ganhou uma moeda!")
    }if(brinquedos == 2){
        alert("Parabéns, você trouxe " + brinquedos + " brinquedos e ganhou 2 moedas!")
    }if(brinquedos >= 3){
        alert("Opa, você atingiu o prêmio máximo, você trouxe " + brinquedos + " brinquedos e ganhou 3 moedas!!")
    }
}*/

function brinquedos(){
    let brinquedos = prompt("Digite quanto brinquedos você trouxe: ")
    let moedas = brinquedos
    if(brinquedos <= 0){
        alert("Você não trouxe brinquedos :( ")
    }else{
        if(brinquedos > 3){
            moedas = 3
        }alert("Você trouxe " + brinquedos + " brinquedos e ganhou " + moedas + " moedas!")

    }
}


