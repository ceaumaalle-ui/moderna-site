document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mobile-nav');
    const navLinks = nav.querySelectorAll('a');
    const fixedHeaderHeight = 85; // Altura do seu header (aprox. 81px) + buffer

    // 1. Funcionalidade de Abrir/Fechar Menu
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // 2. Funcionalidade de Smooth Scroll Personalizado
    // Este código substitui o scroll-behavior: smooth do CSS para melhor controle
    
    // Adiciona evento de clique a CADA link do menu E ao botão 'Fale Conosco'
    const allScrollLinks = document.querySelectorAll('a[href^="#"]');

    allScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Ignora o clique se for apenas # ou se for um link externo
            if (href === '#' || href.length < 2) return;

            // Previne o comportamento padrão (rolagem instantânea)
            e.preventDefault();

            // Garante que o menu mobile feche, se estiver aberto
            nav.classList.remove('active'); 

            // Encontra o elemento de destino (ex: #contato-target)
            const targetElement = document.querySelector(href);

            if (targetElement) {
                // Calcula a posição de destino com a compensação do header fixo
                const targetPosition = targetElement.offsetTop - fixedHeaderHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Faz a rolagem suave
                });
            }
        });
    });
});





