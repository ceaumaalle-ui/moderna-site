document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o botão de hambúrguer e a navegação (que tem o ID 'mobile-nav')
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mobile-nav');

    // 2. Adiciona o evento de clique para abrir/fechar o menu
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active'); // Adiciona/remove a classe 'active' para exibir/ocultar o menu
    });

    // 3. Adiciona evento de clique em CADA link do menu
    const navLinks = nav.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Garante que o menu se feche automaticamente ao clicar em um link
            nav.classList.remove('active'); 
        });
    });
});





