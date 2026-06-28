// Aguarda o carregamento completo do HTML antes de acessar os elementos da página.
document.addEventListener("DOMContentLoaded", function () {

    // Localiza o formulário de contato pelo seu identificador.
    const formulario = document.getElementById("formContato");

    // Executa a validação somente se o formulário existir na página atual.
    if (formulario) {

        // Escuta o evento de envio do formulário.
        formulario.addEventListener("submit", function (evento) {

            // Impede o recarregamento da página e permite validar os dados primeiro.
            evento.preventDefault();

            // Obtém os valores digitados e remove espaços desnecessários no início e no fim.
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verifica se todos os campos obrigatórios foram preenchidos.
            if (nome === "" || email === "" || mensagem === "") {
                alert("Preencha todos os campos.");
                return;
            }

            // Expressão regular usada para verificar o formato básico do endereço de e-mail.
            const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Interrompe o envio quando o e-mail informado não possui formato válido.
            if (!formatoEmail.test(email)) {
                alert("Digite um e-mail válido.");
                return;
            }

            // Simula o envio e informa ao usuário que a validação foi concluída com sucesso.
            alert("Mensagem enviada com sucesso!");

            // Limpa todos os campos após a simulação do envio.
            formulario.reset();
        });
    }
});
