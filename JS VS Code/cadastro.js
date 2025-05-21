function cadastrar(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let tagresultado = document.getElementById("resultado")

    tagresultado.innerText = "Bem vindo ao nosso sistema " +
    nome + " você tem " + idade + " anos." + " É uma satisfção ter você aqui, pq prazer é só na cama!"
}