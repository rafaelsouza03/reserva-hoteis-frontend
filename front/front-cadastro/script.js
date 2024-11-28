// Função para validar o formulário
function validarFormulario(event) {
    // Impede o envio do formulário para validarmos os dados
    event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Limpa mensagens de erro anteriores
    limparErros();

    let valido = true;

    // Validação do campo nome
    if (nome === '') {
        exibirErro('nome', 'O campo nome é obrigatório.');
        valido = false;
    }

    // Validação do campo email
    if (email === '') {
        exibirErro('email', 'O campo email é obrigatório.');
        valido = false;
    } else if (!validarEmail(email)) {
        exibirErro('email', 'Por favor, insira um email válido.');
        valido = false;
    }

    // Validação do campo senha
    if (senha === '') {
        exibirErro('senha', 'O campo senha é obrigatório.');
        valido = false;
    } else if (senha.length < 6) {
        exibirErro('senha', 'A senha deve ter pelo menos 6 caracteres.');
        valido = false;
    }

    // Se tudo estiver válido, o formulário é enviado
    if (valido) {
        alert("Cadastro realizado com sucesso!");
        document.getElementById('formCadastro').submit();
    }
}

// Função para exibir mensagens de erro
function exibirErro(campo, mensagem) {
    const campoElemento = document.getElementById(campo);
    const divErro = document.createElement('div');
    divErro.classList.add('error');
    divErro.textContent = mensagem;
    campoElemento.parentElement.appendChild(divErro);
}

// Função para limpar as mensagens de erro
function limparErros() {
    const mensagensErro = document.querySelectorAll('.error');
    mensagensErro.forEach(function(erro) {
        erro.remove();
    });
}

// Função para validar o formato do email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}