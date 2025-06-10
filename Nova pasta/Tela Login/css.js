inicializar()

let usuarios = []

// let nomeTeste = ["usuario 1" , "usuario 2"]


function cadastrar(){

    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value

    }

    usuarios.push(usuario)

    alert("Cadastrado com sucesso!!")

    console.log(usuarios)

    limparInputs()
    mostrarLogin()
}

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value
    
    for(let i=0; i<usuarios.length; i++)    
    if((nome === usuarios[i].nome || nome === usuarios[i].email) && senha === usuarios[i].senha){
        alert("Login efetuado com sucesso! Olá " + usuarios[i].nome)
        limparInputs()
        mostrarProdutos()
        // document.getElementById('navbar').style.display = 'block'
    }
    // else{
    //     alert("Login não efetuado. Sem sucesso!")
    // }
}

function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex'
    document.getElementById('inpLogNome').focus()
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}
function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
    document.getElementById('navbar').style.display = 'flex'
}

function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
} 

function limparInputs(){
    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadSenha').value = ''

    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadSenha').value = ''

}

function inicializar(){
    mostrarLogin()
}