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
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link (rolagem instantânea)
            
            const targetId = this.getAttribute('href'); // Ex: "#contato"
            const target = document.querySelector(targetId); // Seleciona a seção destino
            
            // Fecha o menu (para dispositivos móveis)
            nav.classList.remove('active');

            // Aguarda o menu fechar completamente (caso tenha transição no CSS)
            setTimeout(() => {
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300); // 300ms é o tempo médio da transição do menu
        });
    });
});
