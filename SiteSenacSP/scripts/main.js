// CADASTRO
document.addEventListener("DOMContentLoaded", () => {
    const btnCadastro = document.getElementById("cadastrarBtn");
    if (btnCadastro) {
      btnCadastro.addEventListener("click", function (event) {
        event.preventDefault();
  
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

  
        if (nome === "" || email === "" || senha === "") {
          alert("Preencha todos os campos!");
          return;
        }
  
        let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
  
        // Checar se email já está cadastrado
        const jaExiste = usuariosSalvos.find(u => u.email === email);
        if (jaExiste) {
          alert("Esse email já está cadastrado.");
          return;
        }
  
        usuariosSalvos.push({ nome: nome, email: email, senha: senha });
        localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
  
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html";
      });
    }
  
    // LOGIN
    const btnLogin = document.getElementById("loginBtn");
    if (btnLogin) {
      btnLogin.addEventListener("click", function (event) {
        event.preventDefault();
  
        const loginEmail = document.getElementById("username").value.trim();
        const loginSenha = document.getElementById("password").value.trim();
  
        if (loginEmail === "" || loginSenha === "") {
          alert("Por favor, preencha todos os campos.");
          return;
        }
  
        const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioEncontrado = usuariosSalvos.find(
          u => u.email === loginEmail && u.senha === loginSenha
        );
  
        if (usuarioEncontrado) {
          localStorage.setItem("usuarioLogado", usuarioEncontrado.nome);
          alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
          window.location.href = "../index.html"; // redireciona
        } else {
          alert("Usuário não encontrado. Faça o cadastro primeiro.");
        }
      });
    }
  });
  const nomeUsuario = localStorage.getItem("usuarioLogado");
  if (nomeUsuario) {
    document.getElementById("userProfile").textContent = nomeUsuario;
  }