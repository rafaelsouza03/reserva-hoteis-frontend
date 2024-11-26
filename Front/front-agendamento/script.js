document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário
    
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const checkinTime = document.getElementById('checkin-time').value;
    const checkoutTime = document.getElementById('checkout-time').value;
    
    const today = new Date().toISOString().split('T')[0]; // Data de hoje

    // Validação de data de entrada
    if (checkinDate < today) {
        showError('A data de entrada não pode ser anterior à data de hoje.');
        return;
    }

    // Validação de data de saída
    if (checkoutDate <= checkinDate) {
        showError('A data de saída deve ser posterior à data de entrada.');
        return;
    }

    // Se tudo estiver correto, removemos a mensagem de erro
    document.getElementById('errorMsg').style.display = 'none';

    // Exibe uma mensagem de sucesso ou o próximo passo
    alert(`Reserva confirmada para ${checkinDate} às ${checkinTime} até ${checkoutDate} às ${checkoutTime}`);
});

function showError(message) {
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
}