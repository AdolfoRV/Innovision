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