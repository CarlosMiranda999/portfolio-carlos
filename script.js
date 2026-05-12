// Seleciona o formulário de contato pelo ID
const formContato = document.getElementById("formContato");

// Seleciona o parágrafo que exibirá mensagens de retorno
const mensagemRetorno = document.getElementById("mensagemRetorno");

// Seleciona o botão usado para trocar o tema do site
const botaoTema = document.getElementById("botaoTema");

// Função para validar formato básico de e-mail
function emailValido(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}

// Evento de envio do formulário
formContato.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação obrigatória dos campos
    if (nome === "" || email === "" || mensagem === "") {
        mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
        mensagemRetorno.style.color = "red";
        return;
    }

    // Validação do formato de e-mail
    if (!emailValido(email)) {
        mensagemRetorno.textContent = "Por favor, informe um e-mail válido.";
        mensagemRetorno.style.color = "red";
        return;
    }

    // Simulação de envio da mensagem
    mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
    mensagemRetorno.style.color = "green";

    // Limpa os campos do formulário
    formContato.reset();
});

// Evento para alternar entre tema claro e escuro
botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "Tema claro";
    } else {
        botaoTema.textContent = "Tema escuro";
    }
});