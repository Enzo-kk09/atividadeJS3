const form = document.getElementById('cadastroForm');

const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmaInput = document.getElementById('confirmaSenha');
const perfilInput = document.getElementById('perfil');
const termosInput = document.getElementById('termos');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');
const erroConfirma = document.getElementById('erroConfirma');
const erroPerfil = document.getElementById('erroPerfil');
const erroTermos = document.getElementById('erroTermos');
const mensagemSucesso = document.getElementById('mensagemSucesso');

const saidaNome = document.getElementById('saidaNome');
const saidaEmail = document.getElementById('saidaEmail');
const saidaPerfil = document.getElementById('saidaPerfil');
const saidaStatus = document.getElementById('saidaStatus');
const saidaAvatar = document.getElementById('saidaAvatar');

const campos = [
    nomeInput,
    emailInput,
    senhaInput,
    confirmaInput,
    perfilInput
];

function definirEstadoCampo(campo, invalido) {
    campo.setAttribute('aria-invalid', String(invalido));
}

function limparErros() {
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroSenha.textContent = '';
    erroConfirma.textContent = '';
    erroPerfil.textContent = '';
    erroTermos.textContent = '';
    mensagemSucesso.textContent = '';

    campos.forEach((campo) => {
        definirEstadoCampo(campo, false);
    });

    termosInput.setAttribute('aria-invalid', 'false');
}

function exibirErro(campo, elementoErro, mensagem) {
    definirEstadoCampo(campo, true);
    elementoErro.textContent = mensagem;
}

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    limparErros();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmaSenha = confirmaInput.value;
    const perfil = perfilInput.value;

    let formularioValido = true;

    if (nome === '') {
        exibirErro(nomeInput, erroNome, 'Informe seu nome completo.');
        formularioValido = false;
    }

    if (email === '') {
        exibirErro(emailInput, erroEmail, 'Informe seu e-mail institucional.');
        formularioValido = false;
    } else if (!emailValido(email)) {
        exibirErro(emailInput, erroEmail, 'Digite um e-mail válido.');
        formularioValido = false;
    }

    if (senha === '') {
        exibirErro(senhaInput, erroSenha, 'Informe uma senha.');
        formularioValido = false;
    } else if (senha.length < 6) {
        exibirErro(senhaInput, erroSenha, 'A senha deve ter no mínimo 6 caracteres.');
        formularioValido = false;
    }

    if (confirmaSenha === '') {
        exibirErro(confirmaInput, erroConfirma, 'Confirme sua senha.');
        formularioValido = false;
    } else if (senha !== confirmaSenha) {
        exibirErro(confirmaInput, erroConfirma, 'As senhas não conferem.');
        formularioValido = false;
    }

    if (perfil === '') {
        exibirErro(perfilInput, erroPerfil, 'Selecione um perfil técnico.');
        formularioValido = false;
    }

    if (!termosInput.checked) {
        termosInput.setAttribute('aria-invalid', 'true');
        erroTermos.textContent = 'Você deve aceitar os termos de uso.';
        formularioValido = false;
    }

    if (!formularioValido) {
        const primeiroInvalido = form.querySelector('[aria-invalid="true"]');

        if (primeiroInvalido) {
            primeiroInvalido.focus();
        }

        return;
    }

    saidaNome.textContent = nome;
    saidaEmail.textContent = email;
    saidaPerfil.textContent = perfil;
    saidaStatus.textContent = 'Cadastro concluído';
    saidaAvatar.textContent = nome.charAt(0).toUpperCase();
    mensagemSucesso.textContent = 'Cadastro realizado com sucesso.';

    form.reset();

    campos.forEach((campo) => {
        definirEstadoCampo(campo, false);
    });

    termosInput.setAttribute('aria-invalid', 'false');
});
