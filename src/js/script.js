document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos
    const toggleIconsContainer = document.querySelector('.toggle-icons');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const body = document.body;

    // Função para aplicar ou remover o modo escuro
    function applyDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeIcon.classList.remove('visible'); // Esconde o ícone de modo escuro
            lightModeIcon.classList.add('visible');   // Mostra o ícone de modo claro
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            lightModeIcon.classList.remove('visible'); // Esconde o ícone de modo claro
            darkModeIcon.classList.add('visible');    // Mostra o ícone de modo escuro
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Verifica se o modo escuro estava ativado na última visita
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        applyDarkMode(true);
    } else {
        applyDarkMode(false); // Garante que o modo claro seja o padrão
    }

    // Event listener para o clique no contêiner dos ícones
    toggleIconsContainer.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDark); // Alterna o modo
    });
});