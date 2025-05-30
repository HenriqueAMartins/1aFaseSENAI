// let value, email, senha

inicializar()

let usuario = {
    value: '',
    email: '',
    senha: '' 
}

function cadastrar(){
    value = document.getElementById('inpCadvalue').value 
    email = document.getElementById('inpCadEmail').value 
    senha =  document.getElementById('inpCadSenha').value
    alert("Cadastrado com sucesso!!")

    console.log(usuario);
    limparInputs()
    mostrarLogin()
}

function logar(){
    let value = document.getElementById('inpLogvalue').value
    let senha = document.getElementById('inpLogSenha').value
    if(value === usuario.value && senha === usuario.senha){
        alert("Login efetuado com sucesso!")
        mostrarProdutos()
    }else{
        alert("Login não efetuado. Sem sucesso!")
    }
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