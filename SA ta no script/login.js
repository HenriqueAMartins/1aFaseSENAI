function toggleForms() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const isLoginVisible = loginContainer.style.display !== 'none';

    loginContainer.style.display = isLoginVisible ? 'none' : 'block';
    registerContainer.style.display = isLoginVisible ? 'block' : 'none';
  }

  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Tentativa de login com: ${email} / ${password}`);
  }

  function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    alert(`Cadastro: ${name} / ${email} / ${password}`);
  }