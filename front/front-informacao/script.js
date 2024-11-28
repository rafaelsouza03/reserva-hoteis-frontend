// script.js
document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var numeroQuarto = document.getElementById('quarto').value;

    // Verifica se o quarto está ocupado ou disponível
    var quartosOcupados = [101, 102, 103, 104]; // Lista de quartos ocupados
    var quartoStatus = quartosOcupados.includes(parseInt(numeroQuarto)) ? "ocupado" : "disponível";

    // Exibe o resultado na tela
    var resultado = document.getElementById('resultado');
    if (quartoStatus === "ocupado") {
        resultado.innerHTML = `${nome}, o quarto ${numeroQuarto} está ocupado. Você precisará aguardar a liberação de um quarto.`;
        resultado.style.color = 'red';
    } else {
        resultado.innerHTML = `${nome}, o quarto ${numeroQuarto} está disponível. Você já está em um quarto!`;
        resultado.style.color = 'green';
    }
});