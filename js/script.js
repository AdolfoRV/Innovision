document.getElementById('toggleButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    // Alternar clase 'active' para abrir/cerrar la sidebar
    sidebar.classList.toggle('active');
    container.classList.toggle('with-sidebar');
});

document.getElementById('themeButton').addEventListener('click', function() {
    const body = document.body;

    // Alternar entre 'night-mode' y modo normal
    body.classList.toggle('night-mode');
});

document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim()) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = userInput;
        messageDiv.className = 'user-message';

        document.getElementById('chatMessages').appendChild(messageDiv);
        document.getElementById('userInput').value = ''; // Limpiar input
        // Aquí podrías integrar la lógica para el mensaje de respuesta de la IA
    }
});
