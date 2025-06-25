localStorage.setItem("usuario" , JSON.stringify(usuario))

const usuariolocalstorage = JSON.parse(localStorage.getItem("usuario"))
console.log(usuariolocalstorage.nome)

//Exemplo real

function listar(){
        
}

function cadastrar(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let usuarios = localStorage.getItem("usuarios")
    if(usuario){
        let usuariosConvetido = JSON.parse(usuarios)
        
        let novoUsuario = {
            nome : nome, 
            idade : idade
        }
        usuariosConvetido.push(novoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuariosConvetido))
    }else{
        let novoUsuario = {
            nome : nome,
            idade : idade
        }
        let usuarios [novoUsuario]
        localStorage.setItem("usuarios", JSON.stringify(usuarios))

    }
    limparTela()
    listar()
}

listar()